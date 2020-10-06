import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  
const EventList = ({userEvent}) => {
   const [del, setDel] = useState();
    const classes = useStyles();

    // useEffect(() => {
      
    // }, [del])

    // const handleDelete = (id)=> {
    //   // fetch('http://localhost:5000/events?id=' +id)
    //   // .then(res => res.json())
    //   // .then(data => {
    //   //   console.log(data);
    //   // })
    //   fetch('/events/delete/' + id, {
    //     method: 'DELETE',
    //   })
    //   .then(res => res.text()) // or res.json()
    //   .then(res => console.log(res))
    // }
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Registration date</TableCell>
              <TableCell align="left">Volunteer list</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userEvent.map((row, key=row._id) => (
              <TableRow>
                {/* <TableCell component="th" scope="row">
                  {row.name}
                </TableCell> */}
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right" style={{cursor:"pointer"}}> X </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default EventList
