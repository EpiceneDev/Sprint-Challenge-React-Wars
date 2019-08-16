import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

export default function StarCard(props) {
    return (
        <>
            <h1>{res.data.name}</h1>
            <h2>{res.data.birth_year}</h2>
            <h1>{res.data.homeworld}</h1>
            {/* <h2>{res.data.films}</h2> */}
        </>
    )
}