# Use a imagem oficial do MySQL
FROM mysql:latest

# Define variáveis de ambiente para o MySQL (ajuste conforme necessário)
ENV MYSQL_DATABASE=newton_db_odonto_app
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=12345678
ENV MYSQL_ROOT_PASSWORD=12345678
COPY banco_odonto.sql /docker-entrypoint-initdb.d/

# Expõe a porta 3306
EXPOSE 3306