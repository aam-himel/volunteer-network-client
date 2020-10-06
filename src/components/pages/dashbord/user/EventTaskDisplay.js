import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'

const EventTaskDisplay = (props) => {
    const title = props.task.title
    return (
        <Grid item xs={6} sm={3}>
            <Card>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
    )
}

export default EventTaskDisplay
