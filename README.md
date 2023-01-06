# Cashforce
<img align="center" alt="Lucas-Js" height="500" width="300" src="https://github.com/LucasLVF/Teste-tecnico-Cashforce/blob/main/misc/foto1.png">       <img align="center" alt="Lucas-Js" height="500" width="300" src="https://github.com/LucasLVF/Teste-tecnico-Cashforce/blob/main/misc/foto2.png"> Versão Mobile

<img align="center" alt="Lucas-Js" height="500" width="800" src="https://github.com/LucasLVF/Teste-tecnico-Cashforce/blob/main/misc/foto3.png"> Versão Desktop

## Figma
https://www.figma.com/file/KftxJUyuYMcLq8tCZw67ha/Cashforce?node-id=0%3A1&t=h5X4lD6e1eM6XxUm-1

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
