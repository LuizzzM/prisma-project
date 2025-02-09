# Projeto Prisma com Node.js
**Autor:** Luiz Augusto Mendes Barbosa

Este projeto utiliza Node.js e Prisma ORM para gerenciar o banco de dados e facilitar o desenvolvimento da aplicação. Siga as instruções abaixo para configurar e executar o projeto localmente.

## Pré-requisitos

- **Node.js**: Certifique-se de que o Node.js esteja instalado em sua máquina.  
  [Download Node.js](https://nodejs.org/)

- **Extensão do Prisma**: Instale a extensão do Prisma no seu editor de código (por exemplo, [Prisma - VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)).

- **Git**: Necessário para clonar o repositório.  
  [Download Git](https://git-scm.com/)

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


# Relatório de Implementação

## 2. Implementação do Servidor
### 2.1 Criação do Backend
O backend foi desenvolvido utilizando o framework Express e o Prisma Client para a conexão com o banco de dados. Os endpoints implementados são:

#### **Endpoints Disponíveis**
- **POST `/alunos`**: Permite a criação de um novo aluno. Utiliza o método `connectOrCreate` do Prisma para associar uma disciplina, garantindo que, se a disciplina já existir, ela será vinculada ao aluno; caso contrário, será criada automaticamente.
- **GET `/alunos`**: Retorna a lista de alunos cadastrados, incluindo as disciplinas associadas.

#### **Estrutura do Código**
O backend está definido no arquivo `server.js`, que inclui:
- Configuração do servidor Express e habilitação do CORS.
- Conexão com o banco de dados via Prisma Client.
- Implementação dos endpoints de criação e listagem de alunos.
- Tratamento de erros para garantir um fluxo seguro de execução.

### 2.2 Tratamento de Erros e Respostas
O backend foi estruturado para tratar erros de forma adequada, fornecendo mensagens claras em caso de falhas na criação ou consulta de dados.

## 3. Desenvolvimento do Frontend
### 3.1 Interface Web Simples
O frontend foi desenvolvido utilizando HTML, CSS e JavaScript e inclui as seguintes funcionalidades:

#### **Componentes da Interface**
- **Formulário de Cadastro**: Permite a inserção dos dados do aluno (nome, email e disciplina) e o envio dessas informações para o backend.
- **Lista de Alunos**: Exibe os alunos cadastrados e as disciplinas associadas, atualizando dinamicamente a cada novo cadastro.

#### **Arquivos do Frontend**
- `index.html`: Contém a estrutura da interface do usuário.
- `styles.css`: Define os estilos da interface para melhorar a experiência do usuário.
- `script.js`: Responsável por interagir com a API do backend, enviando e recebendo dados dinamicamente.

### 3.2 Integração com a API
O frontend interage com a API por meio do arquivo `script.js`, garantindo a sincronização dos dados entre o servidor e a interface do usuário. Ele:
- Obtém a lista de alunos cadastrados ao carregar a página.
- Envia os dados de um novo aluno via requisição `POST`.
- Atualiza a interface dinamicamente após a inclusão de novos alunos.

## 4. Conclusão
Este projeto demonstra, na prática, como utilizar o Prisma ORM em conjunto com Node.js e Express para criar uma aplicação full-stack eficiente. A integração entre backend e frontend permite um gerenciamento de dados fluido, enquanto o Prisma Studio auxilia na visualização e manutenção do banco de dados.

A estrutura adotada, com modelagem no Prisma, implementação de endpoints e uma interface web simples, serve como uma base sólida para projetos mais complexos, promovendo boas práticas de desenvolvimento, integração e escalabilidade.


