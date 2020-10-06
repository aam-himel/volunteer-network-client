import React, { useContext } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { googleSignIn } from "./loginManager";
import { UserContext } from "../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "2rem",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),width: theme.spacing(50),height: theme.spacing(40),
    },
  },
  btnGoogle: {
    padding: "8px 16px", borderRadius: "10px",border: "none",
  },
  mb: {
    paddingBottom: "1rem",
  },
  mt: {
    marginTop: "1rem",
  },
}));

const LogIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // google sign in 
const handleGoogleSignIn = ()=> {
  googleSignIn()
  .then(res => {
    console.log(res);
    const {user} = res;
    const newUserInfo = {
      name: user.displayName,
      email: user.email,
      img: user.photoURL,
      isUser: true,
      isAdmin: false
    }
    setLoggedInUser(newUserInfo);
    history.replace(from);
  })
  
}

  return (
    <Grid container className={classes.root} justify="center" alignItems="center" >
        <Paper elevation={3} variant="outlined" square>
          <Grid container justify="center" spacing={2} align="center"
            style={{ display: "flex", height: "100%" }}
          >
            <Grid item xs={10} style={{ margin: "auto 0" }}>
              <h1 className={classes.mb}>Login With</h1>
              <Button fullWidth variant="outlined" color="primary" onClick={handleGoogleSignIn}>
                Continue with Google
              </Button>
              <Typography className={classes.mt} variant="body2" component="h2">
                Don't have an account?
                <Link to="/login">Create an Account</Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    
  );
};

export default LogIn;
