# 🎓 API de Gerenciamento de Alunos

Este projeto é uma API desenvolvida como exemplo de um sistema de gerenciamento de alunos, permitindo o cadastro, edição, consulta e exclusão de registros. Além disso, inclui funcionalidades de autenticação com **JWT (JSON Web Tokens)**.  
A aplicação foi desenvolvida utilizando **Node.js** com **Express**, **MongoDB** como banco de dados, e diversas bibliotecas adicionais para garantir segurança e escalabilidade.

---

## 🧩 Funcionalidades

- **➕ Cadastro de Alunos:** Permite adicionar novos registros com informações como nome, RA, e notas.
- **📋 Exibição de Alunos:** Consulta a lista completa de alunos ou apenas um aluno específico pelo ID.
- **📈 Cálculo de Médias:** Retorna o nome e a média de todos os alunos cadastrados.
- **✔️ Verificação de Aprovação:** Retorna o status dos alunos com base em suas médias (aprovado ou reprovado).
- **📝 Edição de Alunos:** Atualiza os dados de um aluno específico através de seu ID.
- **➖ Remoção de Alunos:** Remove um registro de aluno pelo ID.
- **🔒 Sistema de Autenticação:** Utiliza **JWT** para autenticar e proteger as rotas da API.
- **👤 Registro e Login:** Permite criar contas de usuário e autenticar no sistema.

---

## 📋 Requisitos

Antes de executar o projeto, certifique-se de que você tenha os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/) - Plataforma JavaScript para execução de código no lado do servidor.
- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL para armazenamento das informações.

---

## 🚀 Tecnologias Utilizadas

- [**Node.js:**](https://nodejs.org/) Plataforma de execução de código JavaScript no servidor.
- [**Express:**](https://expressjs.com/) Framework minimalista para construção de APIs e aplicações web.
- [**Mongoose:**](https://mongoosejs.com/) Biblioteca ODM para interação com o MongoDB.
- [**JWT (jsonwebtoken):**](https://github.com/auth0/node-jsonwebtoken) Ferramenta para autenticação e autorização baseada em tokens.
- [**bcrypt:**](https://github.com/kelektiv/node.bcrypt.js) Biblioteca para hashing de senhas e autenticação segura.
- [**dotenv:**](https://github.com/motdotla/dotenv) Gerenciamento seguro de variáveis de ambiente.
- [**Nodemon:**](https://nodemon.io/) Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

---

## 🛠️ Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_PROJETO>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```env
   PORT=3000 // Por padrão o servidor irá rodar na porta 3000, mesmo que a variável não seja adicionada
   MONGO_URI=mongo_db_url
   JWT_SECRET=sua_chave_secreta
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse a API no endereço: [http://localhost:3000](http://localhost:3000)

---

## 🔀 Rotas da API

### Autenticação
- `POST /register` - Registro de novos usuários.
- `POST /login` - Login e geração de um token JWT.

### Alunos (rotas protegidas com JWT)
- `GET /alunos` - Retorna todos os alunos cadastrados.
- `GET /alunos/:id` - Retorna um aluno específico pelo ID.
- `GET /alunos/medias` - Retorna o nome e a média de todos os alunos.
- `GET /alunos/aprovados` - Retorna os alunos com seus status (aprovado/reprovado).
- `POST /alunos` - Cadastra um novo aluno.
- `PUT /alunos/:id` - Atualiza as informações de um aluno.
- `DELETE /alunos/:id` - Exclui um aluno pelo ID.

---

## ✨ Considerações Finais

Este projeto foi desenvolvido com foco em fornecer um exemplo prático de uma API RESTful com autenticação, protegendo rotas com JWT e gerenciando dados de forma eficiente utilizando o MongoDB.  
Com a implementação de boas práticas e ferramentas modernas, é possível expandir e adaptar o projeto para diferentes cenários do mundo real.
