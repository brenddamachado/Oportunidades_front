# Sistema de Oportunidades part.2 👩🏾‍💻💼
O Sistema de Oportunidades é uma API desenvolvida para ajudar pessoas de baixa renda a conseguirem emprego, estágio, cursos gratuitos e apoio do governo com bolsas. O objetivo é centralizar diversas oportunidades em um só lugar, 
facilitando o acesso a essas informações valiosas. A aplicação permite que os usuários adicionem, editem, excluam e busquem vagas por tipo ou ID. Foi desenvolvida utilizando React no front-end e Node.js no back-end com Express.

## Funcionalidades Principais

- **Adicionar Vaga:** Permite adicionar novas vagas através de um modal.
- **Editar Vaga:** Permite editar as informações de uma vaga existente.
- **Excluir Vaga:** Permite excluir uma vaga.
- **Buscar Vagas:** Permite buscar vagas por ID ou tipo.
- **Persistência:** As vagas são armazenadas na memória durante o uso da aplicação.

## Tecnologias Utilizadas
***Back-end***
- **Node.js:** Servidor back-end com JavaScript.
- **Express.js:** Framework minimalista para APIs.
- **Axios:** Cliente HTTP para fazer as requisições entre o front e o back.

***Front-end***
- **React:** Biblioteca JavaScript para construção de interfaces.
- **Axios:** Para consumo da API no front-end.
- **React Icons:** Para ícones de edição e exclusão
## Como Rodar o Projeto
### Pré-requisitos

   - Node.js instalado na máquina
### Passo a Passo

1. **Clone o repositório**

  ```bash
   git clone https://github.com/seu-usuario/oportunidades.git
````
2. **Instale as dependências do BackEnd**

Navegue até a pasta do projeto e execute o comando:
  ```bash
  cd backend
```
 ```bash
 npm install
```
3. **Inicie o servidor**

   Execute o comando abaixo para iniciar o servidor:

 ```bash
npm start
```
   - O servidor estará rodando na porta 4000.

4. **Instale as dependências do FrontEnd**

Navegue até a pasta do projeto e execute o comando:
  ```bash
  cd oportunidades
```
 ```bash
 npm install
```
3. **Inicie o servidor**

   Execute o comando abaixo para iniciar o servidor:

 ```bash
npm run dev
```
**OBSERVAÇÃO: VAI PRECISAR USAR DOIS TERMINAIS!**

## Funcionalidades Detalhadas
1. **Adicionar Vaga**
Ao clicar no card com o ícone +, o modal de adição de vagas será exibido. Preencha os campos com Tipo, Título, Descrição, e Link da vaga. Quando os dados forem inseridos, clique em "Adicionar Vaga" e ela será exibida na lista

2. **Editar Vaga**
Ao clicar no ícone de lápis em um dos cards de vaga, um modal será aberto com os dados atuais da vaga já preenchidos. Você pode modificar qualquer campo e, ao clicar em "Salvar", as alterações serão enviadas para a API, atualizando a vaga na interface e no banco de dados.

3. **Excluir Vaga**
Clicando no ícone da lixeira, a vaga selecionada será excluída. A exclusão será imediatamente refletida na interface e também no back-end.

4. **Buscar Vagas**
Você pode buscar vagas utilizando o campo de busca localizado no topo da página. O campo permite que você procure vagas por ID ou Tipo. Ao clicar em "Buscar", as vagas filtradas serão exibidas na interface.

## Melhorias Futuras
° Persistência em Banco de Dados: Substituir o armazenamento em memória por um banco de dados relacional (MySQL, PostgreSQL) ou não-relacional (MongoDB).

° Autenticação de Usuários: Adicionar sistema de login para que somente usuários autenticados possam editar e excluir vagas.

° Deploy: Implementar deploy no Heroku, Netlify, ou outra plataforma de cloud.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Envie um Pull Request ou abra uma Issue no repositório. Todas as sugestões são bem-vindas!

