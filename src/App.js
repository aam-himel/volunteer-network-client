import React, { createContext, useState } from "react";
import NavBar from "./components/layout/NavBar";
import './App.css';
import HomePage from "./components/pages/HomePage";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AdminDashBord from "./components/pages/dashbord/admin/AdminDashBord";
import LogIn from "./components/auth/LogIn";
import DonationPage from "./components/pages/DonationPage";
import VolunteerRegistrationForm from "./components/pages/VolunteerRegistrationForm";
import PrivateRoute from "./components/auth/PrivateRoute";
import EventCreatePage from "./components/pages/dashbord/admin/EventCreatePage";
import EventTasks from "./components/pages/dashbord/user/EventTasks";

export const UserContext = createContext();

const  App = () => {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [volunteer, setVolunteer] = useState({});

  return (
    <div className="App">
      
      <UserContext.Provider value={[loggedInUser,setLoggedInUser, volunteer, setVolunteer]}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/donation' component={DonationPage} />
          <Route  path='/login' component={LogIn} />
          <Route exact path='/admin' component={LogIn} />
          
          <PrivateRoute  path='/register/:eventTitle'>
            <VolunteerRegistrationForm />
          </PrivateRoute>
          
          <Route  path='/admin/createEvent'>
            <EventCreatePage />
          </Route>

          <Route  path='/admin/dashbord'>
            <AdminDashBord />
          </Route>

          <PrivateRoute path="/eventTasks">
            <EventTasks />
          </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
