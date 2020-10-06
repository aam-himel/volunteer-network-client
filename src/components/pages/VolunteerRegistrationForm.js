import {
  Button,
  Grid,
  Input,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";

import React, { useContext, useState } from "react";
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
  const handleDateChange = (date) => {
    const newDate = { ...selectedDate, date };
    setSelectedDate(newDate);
    console.log(selectedDate);
  };

  const onSubmit = (data) => {
    console.log(data);
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
            {/* <Input placeholder="Date" fullWidth>
                        
                        </Input> */}
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  helperText={""}
                  fullWidth
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Available day"
                  value={selectedDate}
                  onChange={handleDateChange}
                  ref={register}
                  name="date"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                
              </Grid>
            </MuiPickersUtilsProvider> */}
            <input
              placeholder="Full Name"
              fullWidth
              name="username"
              value={loggedInUser.name}
              ref={register}
            />
            <input
              placeholder="Username or Email"
              fullWidth
              value={loggedInUser.email}
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
              value={eventTitle}
              name="title"
              ref={register}
            />
            <br />
            {/* <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{ marginTop: "2rem" }}
            >
              Registration
            </Button> */}
            <input type="submit" />
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VolunteerRegistrationForm;
