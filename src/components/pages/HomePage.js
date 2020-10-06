import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import EventCard from '../shared/EventCard';




const HomePage = () => {
    const [events, setEvents] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => {
            setEvents(data);
        })
    }, [])
    
    // const handleEventCard = (eventTitle) => {
    //     history.push(`/register/:${eventTitle}`)
    // }
    return (
        <>
         <h1 style={{marginTop:'3rem', textAlign:'center'}}>I GROW BY HELPING PEOPLE IN NEED</h1>
            <Grid  container direction="row"justify="flex-start" alignItems="center" style={{flstyleexGrow:1, marginTop:'3rem'}} spacing={2}>
                {
                    events.map(event => <EventCard event={event} key={event._id}/>)
                }
            </Grid>
        </>
    )
}

export default HomePage;
