# notas da review

O projeto funcionou certinho aqui na minha máquina, gostei da documentação, ficou bem descrito no README e como rodar.
Porém acredito que se foi escolhido usar `prisma` faltou estudar um pouco, como ele é usado e seus benefícios.
Vi que foi feito uma conexão direta com o mongo, mas era totalmente desnecessário, já que o prisma já está conectado ao mongo.
Fora isso, também tem alguns pontos estruturais/de melhoria:

- `nodemon` poderia ser adicionado às `devDependencies`, já que é utilizado nos scripts do `package.json`.
- a pasta dataSource ficou um pouco má estruturada, com ela temos o problema de se algum dado atualizar na API deles
  precisaríamos rodar o programa periodicamente, portanto poderíamos chamar a pasta em si de `db`, o arquivo `index.js` como
  `collector.js` ou algo nesse sentido, mas não sendo o `index.js`.
- o próprio setup do Mongo não precisa ser feito, não precisamos baixar `mongoose` nem ter a pasta `Models` já que o prisma já
  faz sozinho a tabela dos tipos. e tem uma interface pelo próprio prisma de tu inserir os dados., também poderíamos tirar o `mongoose`
  das dependências(e o `apollo-datasource-rest` já que não está sendo utilizado)
- botar a pasta `mongodb-data` no .gitignore, não se commita dados

Além disso, em alguns arquivos foi comentado melhorias de código e de estrutura dentro deles, sinta-se livre pra dar uma olhada neles :)

(dentro do arquivo `src/datasources/index.js` estou usando uma função `.flat` que não tem em algumas versões do node, só pra avisar)
