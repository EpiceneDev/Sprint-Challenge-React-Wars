import React from 'react'
import StarCard from './StarCard';

export default function CardContainer(props) {
    return (
        <>
            <Grid columns={3}>
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
            </Grid>
        </>
    )
}