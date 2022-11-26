const controllerPokemon = require('./src/controllers/pokemonController');

const express = require("express")
const app = express()

//parser do body em json
app.use(express.json())

app.get("/ola", (request, response)=>{
    response.status(200).json({"mensagem":"Api esta funcionando legal e maneira"})
})

app.post("/pokemon/criar", controllerPokemon.createPokemon)

app.get("/pokemons", controllerPokemon.getAll)

app.listen(1313, ()=>{
    console.log("alô pepe moreno, to ligando no porta!")
})