# Voltbras Challenge

# How to use

## 1.Download example & install dependencies
Clone this repository:
```bash
$ git clone git@github.com:kallel-anobom/api-voltbras.git
```
Install npm dependencies:
```bash
$ npm install
```

## 2. Start the Prisma and MongoDB server
Launch your Prisma server and MongoDB with this command:
```bash
$ docker-compose up -d
```

## 3. Start the GraphQL server
Launch your GraphQL server with this command:
```bash
$ npm run server
```

## 4. Generate Prisma Client
With the updated Prisma schema, you can now also update the Prisma Client API with the following command:
```bash
$ PRISMA_MANAGEMENT_API_SECRET=mysecret12 prisma deploy
```

# Observações:

## Arquivo Index Js Dentro do DataSource
Este arquivo tem como a responsabilidade de pegar os dados da api externa e tratar os dados (regras de negócio, tratar os dados)
Comando para rodar o fetch na api externa:
```bash
$ npm run fetch
```

## Arquivo Save DB Dentroo do DataSource
Este arquivo tem como a responsabilidade de salvar os dados no mongoDB que vem do arquivo index.js no Datasource
Comando para rodar o salvar os dados no mongoDB:
```bash
$ npm run save
```

## Pontos para ser melhorados e faltantes
- O requisito pede para implementar o mutation do graphql, neste caso não está funcionando 100% esse requisito
- O requisito pede para usar o RESTDataSource para fazer o fetch na api externa, foi usado a lib node-fetch
- Existe codigo duplicado no arquivo index.js dentro do datasource duplicados, falta estrutura melhor os codigos duplicados