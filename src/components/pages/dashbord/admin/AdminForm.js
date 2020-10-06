import { FormHelperText, Grid, Input, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AdminForm = () => {

    const [eventFormState, setEventFormState] = useState(
        { 
            eventTitle: '',
            description: '',
            eventDate: '',
            eventImg:''

        });

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventFormState)
        };
        fetch('http://localhost:5000/admin/addEvent', requestOptions)
        .then(res => res.text())
        .then(data => {
            console.log(data);
        })
    }, [eventFormState]);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        console.log('Data', data);
        let newFormState = {...eventFormState, ...data};
        setEventFormState(newFormState);
        console.log(eventFormState);

    };

  return (
    <>
      <h1 style={{ padding: "1rem", display: "flex", flex: 1 }}>Adming Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{marginLeft:'2rem'}}>
        <Grid container style={{ padding: "1rem" }} direction="row">
          <Grid
            item
            xs={6}
            style={{ width: "50%"}}
          >
            <label htmlFor="eventTitle">Event Title: </label>
            <br />
            <input
              style={{ width: "81%" }}
              type="text"
              name="eventTitle"
              ref={register({required: true, minLength: 3})}
            />
            {
                errors.eventTitle && <>
                    <br/>
                    <FormHelperText error>Minimum length is 3</FormHelperText>
                </>
            }
            <label htmlFor="description">Description:</label>
            <br />
            <textarea
              name="description"
              cols="39"
              rows="12"
              ref={register}
            ></textarea>
             
          </Grid>
          <Grid item xs={6}>
            <label htmlFor="eventDate">Event Date: </label>
            <br />
            <input
              style={{ width: "80%" }}
              type="date"
              name="eventDate"
              ref={register({required:true})}
            />

            <br/>
            <label htmlFor="eventImg">Image link: </label>
            <br />
             <input
              style={{ width: "80%" }}
              type="text"
              name="eventImg"
              ref={register}
            />
          </Grid>
          
        </Grid>
        <input type="submit" />
      </form>
    </>
  );
};

export default AdminForm;
