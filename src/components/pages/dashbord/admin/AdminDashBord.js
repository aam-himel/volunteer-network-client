import { Button, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminForm from './AdminForm';
import EventList from './EventList';

const useStyles = makeStyles((theme) => ({
    root: {
      display:'flex',
      paddingTop:'1rem',
      backgroundColor:'#F4F7FC'
    },
    left: {
        height: '100vh',
        paddingTop:'4rem'
    },
    right: {
        minHeight: '450px',
        maxHeight: '100vh'
    }

  }));

const AdminDashBord = () => {
    const [displayProps, setDisplayProps] = useState({
        isForm : false,
        isList: false
    })

    const classes = useStyles();

    const handleVolunteerList = () => {

        setDisplayProps({isList:true})
        console.log('event list clicked')
    }
    const  handleCreateEvent= () => {
        setDisplayProps({isForm:true})
        console.log('event form clicked')
    }
    
    return (
        <Grid contaienr spacing={2} className={classes.root}>
           <Grid item xs={3} className={classes.left} style={{backgroundColor:'#FFFFFF', padding:'1rem'}}>
               <p onClick={handleVolunteerList} style={{cursor:'pointer', marginBottom:''}}> Volenteer list</p>
               <p onClick={handleCreateEvent} style={{cursor:'pointer'}}> Create Event</p>
           </Grid>
           <Grid item xs={9} style={{backgroundColor:'#FFFFFF', marginLeft:'1rem', borderRadius:'15px'}} className={classes.right}>
               {
                   displayProps.isList ? <EventList />
                  :  <AdminForm />
               }
           </Grid>
       </Grid>
    )
}

export default AdminDashBord;