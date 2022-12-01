from src.Crawler_of_projects import entry_in_repository,get_links_of_a_all_projects, get_full_url, get_all_projects

def test_entry_in_repository_failed():
    url_status = "https://httpbin.org/status/404"
    assert entry_in_repository(url_status) is None


def test_entry_in_repository_sucess():
    url = "https://meu-portfolio-beta-opal.vercel.app/"
    assert entry_in_repository(url) is not None
    assert "<!doctype html>" in entry_in_repository(url)


def test_get_links_of_a_all_projects_sucess():
    url = "https://github.com/Lucas5k?tab=repositories"
    html_content = entry_in_repository(url)
    result = get_links_of_a_all_projects(html_content)
    assert result is not []
    assert result == ['/Lucas5k/Meu_Portfolio', '/Lucas5k/Lucas5k', '/Lucas5k/Projeto-Blogs-API', '/Lucas5k/Projeto-Trybesmith', '/Lucas5k/Projeto-Job-Insights', '/Lucas5k/Projeto-Car-Shop', '/Lucas5k/Projeto-Trybe-Futebol-Clube', '/Lucas5k/Projeto-App-Receitas', '/Lucas5k/Projeto-Inventory-Report', '/Lucas5k/Projeto-frontend-online-store', '/Lucas5k/Projeto-Tryunfo', '/Lucas5k/Projeto-Trivia', '/Lucas5k/Projeto-TrybeWallet', '/Lucas5k/Project-One-for-all', '/Lucas5k/heroku-CI-CD', '/Lucas5k/deploy-heroku', '/Lucas5k/readme-template']


def test_get_links_of_a_all_projects_failed():
    assert get_links_of_a_all_projects("") == []


def test_get_full_url():
    url = "https://github.com/Lucas5k?tab=repositories"
    html_content = entry_in_repository(url)
    result = get_links_of_a_all_projects(html_content)
    assert get_full_url(result) == ['https://github.com/Lucas5k/Projeto-Blogs-API', 'https://github.com/Lucas5k/Projeto-Trybesmith', 'https://github.com/Lucas5k/Projeto-Job-Insights', 'https://github.com/Lucas5k/Projeto-Car-Shop', 'https://github.com/Lucas5k/Projeto-Trybe-Futebol-Clube', 'https://github.com/Lucas5k/Projeto-App-Receitas', 'https://github.com/Lucas5k/Projeto-Inventory-Report', 'https://github.com/Lucas5k/Projeto-frontend-online-store', 'https://github.com/Lucas5k/Projeto-Tryunfo', 'https://github.com/Lucas5k/Projeto-Trivia', 'https://github.com/Lucas5k/Projeto-TrybeWallet', 'https://github.com/Lucas5k/Project-One-for-all']

    