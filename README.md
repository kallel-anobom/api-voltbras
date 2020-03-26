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