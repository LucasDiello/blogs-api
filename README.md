# DOCUMENTAÇÃO DA API REST - BLOGS API #

## BEM-VINDO ##
Bem-vindo à documentação da API RESTful. Esta documentação fornece uma visão geral dos endpoints disponíveis, requisitos de autenticação e exemplos de uso.

## CONFIGURAÇÃO DO PROJETO ##
### REQUISITOS ###
- Node.js (v12 ou superior)
- Banco de dados MySQL (recomendado MySQL)
- Postman (ou outra ferramenta similar) para testar os endpoints

### INSTALAÇÃO ###
1. Clone o repositório:
   ```bash 
   git clone git@github.com:LucasDiello/blogs-api.git

2. Instale as dependências:
   ```bash
   npm install

3. Rodando com docker:
   ```
   docker-compose up -d --build
   docker exec -it blogs_api bash.
   npm i
   npm run dev

4. Sem docker:
   ```
   env $(cat .env) npm run dev


## ENDPOINTS DA API ##
### AUTENTICAÇÃO ###
#### POST /login ####
Autentica um usuário e retorna um token JWT válido.

##### CORPO DA REQUISIÇÃO #####
    {
    "email": "usuario@exemplo.com",
    "password": "senha123"
    }


### USUÁRIOS ###
#### POST /user ####
Cria um novo usuário na base de dados.

##### CORPO DA REQUISIÇÃO #####
    {
    "displayName": "Nome Exemplo",
    "email": "exemplo@email.com",
    "password": "senha123",
    "image": "http://exemplo.com/imagem.jpg"
    }


#### GET /user ####
Retorna todos os usuários cadastrados.

#### GET /user/:id ####
Retorna um usuário específico baseado no ID.

### CATEGORIAS ###
#### POST /categories ####
Cria uma nova categoria.

##### CORPO DA REQUISIÇÃO #####
    {
    "name": "Nome da Categoria"
    }


#### GET /categories ####
Retorna todas as categorias cadastradas.

### BLOG POSTS ###
#### POST /post ####
Cria um novo post no blog e vincula às categorias especificadas.

##### CORPO DA REQUISIÇÃO #####
    {
    "title": "Título do Post",
    "content": "Conteúdo do Post",
    "categoryIds": [1, 2]
    }


#### GET /post ####
Retorna todos os posts do blog, incluindo informações do autor e categorias.

#### GET /post/:id ####
Retorna um post específico do blog baseado no ID.

#### PUT /post/:id ####
Atualiza um post específico do blog (apenas título e conteúdo).

##### CORPO DA REQUISIÇÃO #####
    ```
    {
    "title": "Novo Título do Post",
    "content": "Novo Conteúdo do Post"
    }


#### DELETE /post/:id ####
Deleta um post específico do blog.

### BUSCA ###
#### GET /post/search?q=:searchTerm ####
Busca posts que contenham o termo especificado no título ou conteúdo.


    
