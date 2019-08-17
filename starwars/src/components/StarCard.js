import React from 'react'
// import { Grid, Image } from 'semantic-ui-react'

export default function StarCard(props) {
    console.log("Card props: ", props)
    console.log("Card props.data: ", props.data)
    return (
        <>
            <h1>HELLO</h1>
            <h1>NAME: {props.name}</h1>
            <h2>BORN IN: {props.birthYear}</h2>
            <h2>EYE COLOR: {props.eyeColor}</h2>
            <h2>HAIR COLOR: {props.hairColor}</h2>
            {/* <h2>{props.starships}</h2> */}
        </>
    )
}