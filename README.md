#  CRUD API

#  CONTEXTO


------------

Um crud (create, read, update, delete) de cadastro de produtos 'name' 'quantity' com login autenticado.

------------


#  Tecnologias utilizadas:
- Nodejs, express, mongodb, nodemon, jwt

##  Como instalar:
`git clone git@github.com:arkyn25/crud-api.git`

## Instalar as dependencias:
`npm install`
##  Rodar a api:
`npm run dev`

#  Documentação
###  utilizando ferramentas de requisições http como postman.
####  Rotas:
##### Cadastro de usuário.
`localhost:3000/users`
método: POST
body: {
"name": "exemplo",
"password": "exemplo",
"email": exemplo@email.com
}
retorno {
    "user": {
        "name": "exemplo",
        "email": "exemplo@gmail.com",
        "_id": "624cc27d1f0c7852e5b40f80"
    }
}
##### Login de usuário.
`localhost:3000/login`
método: POST
body: {
"name": "exemplo",
"password": "exemplo",
"email": exemplo@email.com
}
retorno esperado token: jkr123i4n324n234234j23n4n jkr123i4n324n234234j23n4n jkr123i4n324n234234j23n4n jkr123i4n324n234234j23n4n jkr123i4n324n234234j23n4n

##### Cadast de produtos.
`localhost:3000/products`
método: POST
body {
    "name": "exemplo",
    "quantity": "10"
}
header: { authorization: "jkr123i4n324n234234j23n4n jkr123i4n324n234234j23n4n jkr123i4n324n234234j23n4n jkr123i4n324n234234j23n4n jkr123i4n324n234234j23n4n" }

##### Edição de produtos.
`localhost:3000/products/id`
método: PUT
body {
    "name": "exemplo",
    "quantity": "10"
}

##### Ver produtos.
`localhost:3000/products`
método: GET
body {
    "name": "exemplo",
    "quantity": "10"
}

##### Delete produtos.
`localhost:3000/products/id`
método: DELETE
