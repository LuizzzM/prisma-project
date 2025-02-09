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

# Abra o Prisma Studio para visualizar e interagir com o banco de dados
npx prisma studio
