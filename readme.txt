RPG Store
Este é o projeto de uma aplicação para gerenciamento de estoque de uma loja de RPG. O projeto inclui funcionalidades para login, visualização de estoque, criação, atualização e exclusão de itens.

Funcionalidades
Login:

Sistema de autenticação para proteger rotas e funcionalidades.
Somente usuários autenticados podem acessar o menu principal e demais páginas.
Visualizar Estoque:

Tabela com os itens armazenados no estoque.
Exibe informações como Nome, Categoria, Quantidade, Tipo e Linha.
Criar Item:

Formulário para adicionar novos itens ao estoque.
Validação de campos obrigatórios no frontend.
Atualizar/Excluir Item:

Funcionalidade para editar ou excluir itens existentes no estoque.
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
index.html: Página de login.
templates/: Contém as páginas:
main.html: Menu principal.
view-stock.html: Página para visualizar o estoque.
create-stock.html: Página para criar itens.
update-delete-item.html: Página para atualizar/excluir itens.
css/: Estilos organizados para cada funcionalidade.
js/: Scripts para comunicação com o backend e funcionalidades de cada página.
Como Executar o Projeto
Requisitos
Node.js instalado.
Live Server instalado no VS Code.
Backend
Acesse o diretório rpg-store-backend.
Instale as dependências:
bash
Copiar código
npm install
Inicie o servidor:
bash
Copiar código
npm run start
O backend estará rodando em: http://localhost:3000.
Frontend
Acesse o diretório rpg-store-frontendNeo.
Abra a pasta no VS Code.
Clique com o botão direito no arquivo index.html e escolha "Open with Live Server".
Acesse o frontend no navegador através do link gerado pelo Live Server.
Rotas do Backend
Login: POST /auth/login
Corpo da requisição:

json
Copiar código
{
  "email": "usuario@example.com",
  "password": "12345"
}
Visualizar Estoque: GET /stock

Criar Item: POST /stock
Corpo da requisição:

json
Copiar código
{
  "name": "Espada Lendária",
  "category": "Armas",
  "quantity": 5,
  "type": "Raro",
  "line": "Épico"
}
Atualizar Item: PUT /stock/:id
Corpo da requisição:

json
Copiar código
{
  "name": "Novo Nome",
  "quantity": 10
}
Excluir Item: DELETE /stock/:id

Autenticação
O token JWT gerado durante o login é armazenado no localStorage do navegador.
As rotas protegidas verificam a existência do token antes de permitir o acesso.
Observações
Certifique-se de que o backend esteja rodando antes de interagir com o frontend.
O banco de dados será recriado automaticamente ao iniciar o backend caso o arquivo SQLite seja excluído.