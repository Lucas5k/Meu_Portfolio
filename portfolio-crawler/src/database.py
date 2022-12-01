# Este é o arquivo de funções de acesso ao banco de dados. Basta importar e
# chamar as funçoes
# Atenção: este arquivo não deve ser alterado. Mudanças aqui não serão
# refletidas no avaliador automático.

from pymongo import MongoClient
from decouple import config
import copy

DB_HOST = config("DB_HOST", default="localhost")
DB_PORT = config("DB_PORT", default="27017")

client = MongoClient(host=DB_HOST, port=int(DB_PORT))
db = client.projects


def create_new_projects(data):
    db.news.insert_many(copy.deepcopy(data))
