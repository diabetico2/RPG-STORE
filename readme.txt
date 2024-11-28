RPG Store
Este é o projeto de uma aplicação para gerenciamento de estoque de uma loja de RPG. Ele inclui funcionalidades como login, visualização de estoque, criação, atualização e exclusão de itens.

Funcionalidades
Login:

Sistema de autenticação para proteger rotas e funcionalidades.
Somente usuários autenticados podem acessar o menu principal e demais páginas.
Visualizar Estoque:

Exibe os itens armazenados no estoque em formato de tabela.
Informações exibidas: Nome, Categoria, Quantidade, Tipo e Linha.
Criar Item:

Formulário para adicionar novos itens ao estoque.
Validação de campos obrigatórios no frontend.
Atualizar/Excluir Item:

Funcionalidades para editar ou excluir itens existentes no estoque.
Logout:

Botão para deslogar o usuário e redirecioná-lo para a página de login.


Tecnologias Utilizadas
Frontend: HTML, CSS e JavaScript puro.
Backend: NestJS com TypeORM e SQLite.
Servidor Local: Utilizando Live Server no Visual Studio Code para rodar o frontend.



RPG Store
Este é o projeto de uma aplicação para gerenciamento de estoque de uma loja de RPG. Ele inclui funcionalidades como login, visualização de estoque, criação, atualização e exclusão de itens.

Funcionalidades
Login:

Sistema de autenticação para proteger rotas e funcionalidades.
Somente usuários autenticados podem acessar o menu principal e demais páginas.
Visualizar Estoque:

Exibe os itens armazenados no estoque em formato de tabela.
Informações exibidas: Nome, Categoria, Quantidade, Tipo e Linha.
Criar Item:

Formulário para adicionar novos itens ao estoque.
Validação de campos obrigatórios no frontend.
Atualizar/Excluir Item:

Funcionalidades para editar ou excluir itens existentes no estoque.
Logout:

Botão para deslogar o usuário e redirecioná-lo para a página de login.
Tecnologias Utilizadas
Frontend: HTML, CSS e JavaScript puro.
Backend: NestJS com TypeORM e SQLite.
Servidor Local: Utilizando Live Server no Visual Studio Code para rodar o frontend.
Estrutura do Projeto
Backend (rpg-store-backend)
src/:
auth/: Sistema de autenticação.
stock/: Gerenciamento de estoque (criar, visualizar, atualizar e excluir itens).
Banco de Dados: SQLite.
Frontend (rpg-store-frontendNeo)
Páginas HTML:
index.html: Página de login.
templates/main.html: Menu principal.
templates/view-stock.html: Visualizar estoque.
templates/create-stock.html: Criar itens.
templates/update-delete-item.html: Atualizar/Excluir itens.
Estilos CSS: Organizados para cada funcionalidade em /css.
Scripts JS: Scripts específicos para cada funcionalidade em /js.


Como Executar o Projeto
Requisitos
Node.js instalado.
Live Server instalado no Visual Studio Code.
Backend

Acesse o diretório rpg-store-backend.

npm install

Inicie o servidor:

npm run start

O backend estará rodando em: http://localhost:3000.

Frontend
Acesse o diretório rpg-store-frontendNeo.
Abra a pasta no VS Code.
Clique com o botão direito no arquivo index.html e escolha "Open with Live Server".
Acesse o frontend no navegador através do link gerado pelo Live Server.


Rotas do Backend
Login:

POST /auth/login
Corpo da requisição:
{
  "email": "usuario@example.com",
  "password": "12345"
}

Visualizar Estoque:

GET /stock
Criar Item:

POST /stock
Corpo da requisição:
{
  "name": "Espada Lendária",
  "category": "Armas",
  "quantity": 5,
  "type": "Raro",
  "line": "Épico"
}


Atualizar Item:

PUT /stock/:id
Corpo da requisição:
{
  "name": "Novo Nome",
  "quantity": 10
}

Excluir Item:

DELETE /stock/:id:
Autenticação
Durante o login, um token JWT é gerado e armazenado no localStorage do navegador.
As rotas protegidas verificam a existência do token antes de permitir o acesso.

Observações
Certifique-se de que o backend esteja rodando antes de interagir com o frontend.
O banco de dados será recriado automaticamente ao iniciar o backend caso o arquivo SQLite seja excluído.
