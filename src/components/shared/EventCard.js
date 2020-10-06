import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

import img1 from '../../assets/images/cleanWater.png';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const EventCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  // eventTitle: 'Animal Shelter',
    // description: 'Animal Shelter.........',
    // eventDate: '2020-10-31',
    // eventImg: 'https://i.ibb.co/j8gpS51/animal-Shelter.png'
  const handleEventCard = ()=> {
    console.log(eventTitle);
    history.push(`/register/${eventTitle}`)
  }
  const {eventTitle, description, eventDate, eventImg} = props.event;
  return (
    <Grid item xs={6} sm={3}>
        <Card className={classes.root} onClick={handleEventCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={eventImg}
          title={eventTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {eventTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  );
};

export default EventCard;
