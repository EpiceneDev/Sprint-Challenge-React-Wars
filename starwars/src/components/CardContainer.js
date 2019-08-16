import React from 'react'
import { Grid } from 'semantic-ui-react'
import StarCard from './StarCard';
import '../components/StarWars.css'

export default function CardContainer(props) {
    console.log("CardContainer props: ", props)
    return (
        <div className="card-container">
           <StarCard name={props.data.name} birthYear={props.data.birth_year} eyeColor={props.data.eye_color} hairColor={props.data.hair_color} height={props.data.height}/>
            {/* <Grid columns={3}>
                <Grid.Row>
                <Grid.Column>
                    <StarCard />
                </Grid.Column>
                <Grid.Column>
                    <StarCard />
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column>
                    <StarCard />
                </Grid.Column>
                <Grid.Column>
                    <StarCard />
                </Grid.Column>
                <Grid.Column>
                    <StarCard />
                </Grid.Column>
                </Grid.Row>
            </Grid> */}
        </div>
    )
}