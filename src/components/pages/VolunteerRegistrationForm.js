import {
  Button,
  Grid,
  Input,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import DateFnsUtils from "@date-io/date-fns";
import { useForm } from "react-hook-form";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    height: theme.spacing(60),
    width: "80%",
    margin: "0 auto",
    padding: theme.spacing(3),
  },
}));

// Function Call
const VolunteerRegistrationForm = () => {
  const classes = useStyles();
  let { eventTitle } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { register, handleSubmit, watch, errors } = useForm();
  const [userFormState, setuserFormState] = useState(
    { 
        username: loggedInUser.name,
        description: '',
        date: '',
        email:loggedInUser.email,
        title: eventTitle
    });

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userFormState)
        };
        fetch('http://localhost:5000/user/register', requestOptions)
        .then(res => res.text())
        .then(data => {
            console.log(data);
        })
    }, [userFormState]);


  const onSubmit = (data) => {
    console.log("From local form data",data);
    const newState = {...userFormState, ...data}
    console.log(newState);

  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      alignContent="center"
      spacing={2}
      className={classes.root}
    >
      <Grid item xs={6}>
        <Paper
          className={classes.paper}
          elevation={3}
          variant="outlined"
          square
        >
          <h2 style={{ marginBottom: "3rem" }}>Register as a Volunteer</h2>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            
            <input
              placeholder="Full Name"
              fullWidth
              name="username"
              defaultValue={loggedInUser.name}
              ref={register}
            />
            <input
              placeholder="Username or Email"
              fullWidth
              defaultValue={loggedInUser.email}
              ref={register}
              name="email"
            /> <br />
            <input type="date" name="date" ref={register} /> <br />
            <input
              placeholder="Description"
              fullWidth
              name="description"
              ref={register}
            />
            <input
              placeholder="event title"
              fullWidth
              defaultValue={eventTitle}
              name="title"
              ref={register}
            />
            <br />
            
            <input type="submit" />
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VolunteerRegistrationForm;
