# Livraria Backend

## Descrição

Este é o backend para o sistema de gerenciamento de livrarias. O projeto é construído com Node.js e Express e utiliza MongoDB para armazenamento de dados.

-   **Gerenciamento de Livros**: Adicionar, listar, editar e remover livros.
-   **Gerenciamento de Autores**: Adicionar, listar, editar e remover autores.
-   **Gerenciamento de Clientes**: Adicionar, listar, editar e remover clientes.

## Tecnologias Utilizadas

-   **Node.js**: Ambiente de execução para JavaScript no servidor.
-   **Express.js**: Framework para construção de APIs em Node.js.
-   **MongoDB**: Banco de dados NoSQL para armazenamento das informações.
-   **Mongoose**: Biblioteca para modelagem de dados no MongoDB.

## Instalação

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/ianptkcs/livraria-backend.git
    ```

2. **Acesse o diretório do projeto:**

    ```bash
    cd livraria-backend
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    ```

4. **Configure as variáveis de ambiente.** Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

    ```
    MONGO_URI=seu_uri_mongodb
    PORT=porta_desejada
    ```

5. **Inicie o servidor:**

    ```bash
    npm start
    ```

    O servidor estará disponível em `http://localhost:PORT`.

## Endpoints

Aqui estão alguns dos endpoints disponíveis na API:

-   **GET /livros**: Lista todos os livros.
-   **POST /livros**: Adiciona um novo livro.
-   **GET /livros/:id**: Recupera detalhes de um livro específico.
-   **PUT /livros/:id**: Atualiza informações de um livro específico.
-   **DELETE /livros/:id**: Remove um livro específico.

-   **GET /autores**: Lista todos os autores.
-   **POST /autores**: Adiciona um novo autor.
-   **GET /autores/:id**: Recupera detalhes de um autor específico.
-   **PUT /autores/:id**: Atualiza informações de um autor específico.
-   **DELETE /autores/:id**: Remove um autor específico.

-   **POST /login**: Autentica um usuário e retorna um token JWT.

## Contribuição

Se você deseja contribuir para este projeto, siga estas etapas:

1. Fork o repositório.
2. Crie uma branch para a sua feature ou correção de bug (`git checkout -b feature/MinhaFeature`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/MinhaFeature`).
5. Abra um Pull Request.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
