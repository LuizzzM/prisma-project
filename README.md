# Projeto Prisma com Node.js
**Autores:** Luiz Augusto Mendes Barbosa, Marcos Cabral Barbosa, Filipe Santos Lima

Este projeto utiliza Node.js e Prisma ORM para gerenciar o banco de dados e facilitar o desenvolvimento da aplicação. Siga as instruções abaixo para configurar e executar o projeto localmente.

## Pré-requisitos

- **Node.js**: Certifique-se de que o Node.js esteja instalado em sua máquina.  
  [Download Node.js](https://nodejs.org/)

- **Extensão do Prisma**: Instale a extensão do Prisma no seu editor de código (por exemplo, [Prisma - VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)).

- **Git**: Necessário para clonar o repositório.  
  [Download Git](https://git-scm.com/)

  ## Relatório de Implementação

## 2. Implementação do Servidor
### 2.1 Criação do Backend
O backend foi desenvolvido com Express e Prisma Client para gerenciar a conexão com o banco de dados. Foram implementados os seguintes endpoints:

#### Endpoints Disponíveis
- **POST `/alunos`**: Cria um novo aluno e associa uma disciplina, utilizando `connectOrCreate` para garantir que disciplinas existentes sejam vinculadas e novas sejam criadas automaticamente.
- **GET `/alunos`**: Retorna a lista de alunos cadastrados, incluindo as disciplinas associadas.

#### Estrutura do Código
O backend está estruturado no arquivo `server.js`, que abrange:
- Configuração do servidor Express e CORS.
- Conexão com o banco de dados via Prisma Client.
- Implementação dos endpoints de criação e listagem de alunos.
- Tratamento de erros para um fluxo seguro de execução.

### 2.2 Tratamento de Erros e Respostas
Foram adotadas abordagens para tratar erros e fornecer mensagens claras em caso de falha na criação ou consulta de dados.

## 3. Desenvolvimento do Frontend
### 3.1 Interface Web
O frontend utiliza HTML, CSS e JavaScript, proporcionando as seguintes funcionalidades:

#### Componentes da Interface
- **Formulário de Cadastro**: Permite a inserção dos dados do aluno (nome, email e disciplina) e o envio dessas informações para o backend.
- **Lista de Alunos**: Exibe os alunos cadastrados e suas disciplinas, atualizando automaticamente a cada novo cadastro.

#### Arquivos do Frontend
- `index.html`: Estrutura da interface.
- `styles.css`: Estilos visuais.
- `script.js`: Manipulação da API do backend, enviando e recebendo dados dinamicamente.

### 3.2 Integração com a API
O frontend interage com a API via `script.js`, garantindo sincronização dos dados. Ele:
- Obtém a lista de alunos ao carregar a página.
- Envia os dados de um novo aluno por `POST`.
- Atualiza a interface dinamicamente após a inclusão de novos alunos.

## 4. Conclusão
O projeto demonstra a utilização do Prisma ORM com Node.js e Express para desenvolver uma aplicação full-stack eficiente. A integração entre backend e frontend possibilita um gerenciamento de dados fluido, com Prisma Studio auxiliando na administração do banco de dados.

A estrutura proposta, baseada em modelagem com Prisma, implementação de endpoints e interface web, serve como ponto de partida para projetos mais complexos, incentivando boas práticas de desenvolvimento e escalabilidade.



## Instalação e Configuração

Abra o terminal e execute os seguintes comandos, na ordem apresentada:

```bash
# Clone o repositório
git clone https://github.com/LuizzzM/prisma-project.git

# Acesse a pasta do projeto
cd prisma-project

# Instale as dependências do projeto
npm install

# Sincronize o banco de dados com o esquema do Prisma
npx prisma migrate dev

# Inicie o servidor
npm start

# Abra o arquivo index.html para ver a aplicação

# Abra o Prisma Studio para visualizar e interagir com o banco de dados
npx prisma studio
