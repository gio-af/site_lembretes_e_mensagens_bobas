Lembretes e Mensagens Bobas

Site para criar lembretes e mensagens bobas que podem ser enviados por e-mail e/ou como notificação no celular.  
Projeto feito para aprender Node.js, Express, front-end com HTML/CSS/JS e, em breve, autenticação, grupos e Web Push.

Suas funções atuais

- Criar lembretes com:
  - Título
  - Mensagem
  - Data e hora
  - Tipo: Pessoal ou Grupo (visual, ainda sem lógica de grupo)
- Listar lembretes na tela inicial

O que foi usado:

- Back-end: Node.js + Express
- Front-end: HTML, CSS, JavaScript puro
- Git + GitHub

Como rodar localmente:

1. Instale o Node.js: https://nodejs.org
2. Clone o repositório:
   ```bash
   git clone https://github.com/gio-af/site_lembretes_e_mensagens_bobas.git
   cd site_lembretes_e_mensagens_bobas
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Rode o servidor:
   ```bash
   npm run dev
   ```
5. Acesse no navegador: http://localhost:3000

O que mais vou atualizar no site:

- Autenticação (cadastro/login)
- Banco de dados (SQLite/PostgreSQL)
- Envio de e-mail
- Notificações Web Push
- Grupos de amigos e lembretes compartilhados
