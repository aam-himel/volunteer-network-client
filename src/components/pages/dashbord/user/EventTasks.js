import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../App';
import EventTaskDisplay from './EventTaskDisplay';




const EventTasks = () => {

    const [eventTask, setEventTask] = useState([]);
    const [loggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://shielded-peak-10174.herokuapp.com/eventTasks?email=' + loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            console.log('Data', data)
            setEventTask(data);
        })
    }, [])

    return (
        // <div>
        //     {
        //         eventTask.length &&  eventTask.map(task => <li>{task.title}</li>)
        //     }
        // </div>
        <Grid container spacing={2} style={{marginTop:"3rem"}}>
            {
                eventTask.length && eventTask.map(task => <EventTaskDisplay task= {task} key={task._id}/>)
            }
        </Grid>
    )
}

export default EventTasks;

