# Este é o arquivo de funções de acesso ao banco de dados. Basta importar e
# chamar as funçoes
# Atenção: este arquivo não deve ser alterado. Mudanças aqui não serão
# refletidas no avaliador automático.

from pymongo import MongoClient
from decouple import config
import copy

DB_HOST = config("MONGOHOST", default="containers-us-west-130.railway.app")
DB_PORT = config("MONGOPORT", default="6766")

client = MongoClient(host=DB_HOST, port=int(DB_PORT))
db = client.projects


def create_new_projects(data):
    db.news.insert_many(copy.deepcopy(data))
