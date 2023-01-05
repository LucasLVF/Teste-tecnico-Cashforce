# Cashforce
## Instalação

1. Clone o repositório
```bash
git clone https://github.com/LucasLVF/Teste-tecnico-Cashforce.git
```
2. Entre na pasta do repositório que você acabou de clonar:
```bash
cd Teste-tecnico-Cashforce
```
3. Instale as dependências

```bash
  npm install
```
## Rodando localmente

1. Entre no diretório do projeto

```bash
  cd backend
```

2. Inicie o servidor da API backend

```bash
  npm run start
```

3. Agora entre no diretório frontend
```bash
cd ..
cd frontend/cashforce
```
4. Inicie o servidor da aplicação frontend

```bash
  npm run serve
```
## Atenção

As conexões com o banco de dados foram realizadas através do pacote Dotenv para gerenciar as variaveis de ambiente e exemplificar noções de segurança.

No diretório backend há o arquivo .env-example que deverá ser renomeado para .env e seguir o seguinte formato:

```bash
MYSQL_USER=root
MYSQL_PASSWORD=12345678
MYSQL_DATABASE=cashforce_v3
MYSQL_HOST=localhost
```
