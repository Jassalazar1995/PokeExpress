import React from "react";
import pokemon from "../models/pokemon";
function Capitalizer(str) {
    let stringArray = [... str]
    stringArray[0] = stringArray[0].toUpperCase()
    stringArray = stringArray.join( '' )
    return(stringArray)
}

export default function Show( { pokemons, id } ){
    return (
        <div>
            <h1>Gotta Catch 'Em All!</h1>
            <h2>{ Capitalizer( pokemons[id].name ) }</h2>
            <img src = { pokemons[id].img + '.jpg' }/>       
            <a href = '/pokemons'>Back</a>
        </div>
    )
}