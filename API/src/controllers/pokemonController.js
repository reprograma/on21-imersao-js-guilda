const { Pokemon } = require("../models/pokemon")

let pokemonsData = []

const createPokemon = (request, response)=>{
    let {
        name,
        number,
        types,
        abilities,
        hidden_ability,
        stats,
        moves,
        evolution_stage,
        level,
        evolution_level,
        exp,
        nickname
    } = request.body

    let pokemon = new Pokemon (
        name,
        number,
        types,
        abilities,
        hidden_ability,
        stats,
        moves,
        evolution_stage,
        level,
        evolution_level,
        exp,
        nickname
    )

    pokemonsData.push(pokemon)

    response.status(201).send(pokemon)
}

const getAll = (request, response)=>{
    response.status(200).send(pokemonsData)
}

module.exports = {
    createPokemon,
    getAll
}