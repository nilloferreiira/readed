# READ.ED

O READ.ED é uma biblioteca pessoal online completa e poderosa que oferece aos usuários uma experiência de leitura personalizada e segura. Desenvolvido com ReactJS, NextJS, NodeJS e Fastify, o projeto oferece uma interface amigável, recursos avançados e foco na acessibilidade.

  

__Funcionalidades:__

- Adicione, visualize, edite e exclua livros da sua biblioteca.

- Inclua informações como:
	- título
	- autor
	- nota de 0 a 5
	-  resenha da leitura.

- Acesse detalhes de cada livro, como data de adição.

- Utilize a barra de pesquisa para encontrar rapidamente um livro específico.

- Totalmente responsiva: Adapta-se a diferentes dispositivos e resoluções de tela.

 - Utiliza uma API REST: Permite interação com a aplicação através de requisições HTTP.

- Validação de dados com zod: Garante a qualidade dos dados inseridos na aplicação.

 - Gerenciamento de contexto através do React Tanstack Query: Simplifica o acesso a dados globais da aplicação.

 - Autenticação segura: Protege o acesso à aplicação com Google OAuth.

usando o app rounting module do Next para criar as rotas da aplicação front-end

__Estrutura:__
 - App routing module do Next14 para melhor roteamento da aplicação
 - Todas as paginas são pastas filhas de /books

Utilize a autenticação OAuth com Google para um acesso rápido e seguro.

__Tecnologias utilizadas:__

 - Front-end:
	- React
	- Next 14
	- Tailwind CSS
 	- Radix
	- Axios
	- React Hook Form
	- React Tanstack/Query
	- Zod

- Back-end:
	 - NodeJS
	 - Fastify 
	 - Prisma ORM
	- zod
	
__Autenticação__:
 - Login com o Google OAuth
- token de autenticacao
- middlawares de autenticação