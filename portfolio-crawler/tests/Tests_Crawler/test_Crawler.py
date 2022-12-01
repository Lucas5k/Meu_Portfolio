from src.Crawler_of_projects import entry_in_repository

def test_entry_in_repository_failed():
    url_status = "https://httpbin.org/status/404"
    assert entry_in_repository(url_status) is None


def test_entry_in_repository_sucess():
    url = "https://meu-portfolio-beta-opal.vercel.app/"
    assert entry_in_repository(url) is not None
    assert "<!doctype html>" in entry_in_repository(url)