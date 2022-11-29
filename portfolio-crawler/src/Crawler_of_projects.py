import requests
from time import sleep
from parsel import Selector
from database import create_new_projects


def entry_in_repository(url):
	try:
		response = requests.get(url)
		sleep(1)
		if response.status_code == 200:
			return response.text
	except requests.ReadTimeout:
		return None


def get_links_of_a_all_projects(Html_content):
	selector = Selector(text=Html_content)
	links = selector.css("h3.wb-break-all a::attr(href)").getall()

	if not links:
		return []

	return links


def get_full_url(link_urls):
	link_github = "https://github.com"
	full_url = []

	for link in link_urls:
		full_url.append(link_github + link)

	full_url.remove("https://github.com/Lucas5k/My__Portfolio")
	full_url.remove("https://github.com/Lucas5k/Lucas5k")
	full_url.remove("https://github.com/Lucas5k/heroku-CI-CD")
	full_url.remove("https://github.com/Lucas5k/deploy-heroku")
	full_url.remove("https://github.com/Lucas5k/readme-template")
	return full_url


def entry_in_links(full_url, url):
	selector = Selector(text=full_url)
	title = selector.css("article.markdown-body h1[dir=auto]::text").get()
	description = selector.css("article.markdown-body h2[dir=auto]::text").get()
	paragraph = selector.css("article.markdown-body p[dir=auto]::text").get()
	technology_used = selector.css("article.markdown-body h3[dir=auto]::text").get()
	technology = selector.css("article.markdown-body li::text").getall()
	
	return {
		"title": title,
		"description": description,
		"paragraph": paragraph,
		"technology_used": technology_used,
		"technology": technology,
		"url": url
		}


def get_all_projects():
	list_obj = []
	html_content = entry_in_repository("https://github.com/Lucas5k?tab=repositories")
	links = get_links_of_a_all_projects(html_content)
	full_url = get_full_url(links)

	for url in full_url:
		html = entry_in_repository(url)
		list_obj.append(entry_in_links(html, url))
	
	return list_obj


def writing_to_mongodb():
	all_projects = get_all_projects()
	print(all_projects)
	create_new_projects(all_projects)


writing_to_mongodb()
