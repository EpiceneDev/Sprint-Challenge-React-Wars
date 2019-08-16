import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

export default function StarCard(props) {
    return (
        <>
            <h1>HELLO</h1>
            <h1>{props.name}</h1>
            <h2>{props.birth_year}</h2>
            <h1>{props.homeworld}</h1>
            {/* <h2>{props.data.films}</h2> */}
        </>
    )
}