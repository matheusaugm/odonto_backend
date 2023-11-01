# Odonto DB

## Description
Backend para aplicação da aplicação que auxiliará o curso de odontologia.

## Installation
PTBR: Instale o docker https://www.docker.com/get-started
faça download da imagem do postgres usando o comando:

ENG: Install docker https://www.docker.com/get-started and download the postgres image using the command:
```bash
$docker pull postgres
```
PTBR: Crie uma imagem do banco do odonto db usando o comando:

ENG: Create an image of odonto backend database image using the command:
```bash
$docker build -t odonto_db .
```
PTBR: Crie um container do banco usando o comando:

ENG: Create a database container using the command:
```bash
$docker run -d -p 3306:3306 --name odonto_db_container odonto_db
```
PTBR:
Isso criará um contêiner MySQL com o nome de usuário "admin", senha "12345678" e o banco de dados "newton_db_odonto_app" com as tabelas definidas no script SQL.

ENG:
It'll create a MySQL container with username "admin", password "12345678" and database "newton_db_odonto_app" with the tables defined in the SQL script.
