import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

export default function StarCard(props) {
    console.log("Card props: ", props)
    return (
        <>
            <h1>HELLO</h1>
            <h1>NAME: {props.name}</h1>
            <h2>SPECIES: {props.species}</h2>
            <h2>HOMEWORLD: {props.homeworld}</h2>
            {/* <h2>{props.starships}</h2> */}
        </>
    )
}