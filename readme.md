# Rick and Morty API Express TypeScript Application

This guide provides detailed steps to create an Express TypeScript application that consumes the Rick and Morty API. The application includes authentication, validation middleware, a SQL ORM (TypeORM), and Swagger documentation.

## Step 1: Project Setup

Start by creating a new directory and initializing it as an npm project with TypeScript.

```bash
mkdir rick-and-morty-app
cd rick-and-morty-app
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init

```
```bash
npm install express typeorm mysql reflect-metadata class-validator class-transformer jsonwebtoken bcrypt express-validator swagger-ui-express axios
```

```bash
npm install @types/express @types/bcrypt @types/jsonwebtoken @types/express-validator --save-dev
```
## App Structure

``` bash
/rick-and-morty-app
|-- /src
|   |-- /config         # Configuration files
|   |-- /controllers    # Route controllers
|   |-- /entities       # TypeORM entities
|   |-- /middlewares    # Authentication and validation middleware
|   |-- /services       # Business logic
|   |-- /types          # TypeScript interfaces and types
|   |-- /utils          # Utility functions
|   |-- app.ts          # Express app
|   |-- server.ts       # Server entry point
|-- /dist               # Transpiled files from TypeScript to JavaScript
|-- ormconfig.json      # TypeORM configuration
|-- tsconfig.json       # TypeScript configuration

```


### nodemon

```bash
npm install --save-dev nodemon ts-node
```