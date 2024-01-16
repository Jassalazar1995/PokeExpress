import React from "react";

function Capitalizer(str) {
    let stringArray = [... str]
    stringArray[0] = stringArray[0].toUpperCase()
    stringArray = stringArray.join('')
    return(stringArray)
}

export default function Index( { pokemons } ){
    return (
        <div>
            <h1>Pokeman</h1>
            <ul>
                {pokemons.map((pokemon, i) => (
                    <li key = {i}>
                        {Capitalizer(pokemon.name)}<br />
                        <img src ={pokemon.img} />
                    </li>
                ))}
            </ul>
        </div>
    )
}