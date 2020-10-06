import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./NavBar.css";
import Logo from "../../assets/logos/logo.png";
import { UserContext } from "../../App";
import { colors } from "@material-ui/core";

const NavBar = () => {
  const [loggedInUser] = useContext(UserContext);

  return (
    <nav className="nav">
      <Link className="logo-sec" to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>
     
        <ul className="link_items">
          <li>
            <Link to="/" className="nav_links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/donation" className="nav_links">
              Donation
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav_links">
              Register
            </Link>
          </li>
          {loggedInUser.email ? (
            <li>
              <Link to="/eventTasks" className="nav_links">
                {loggedInUser.name}
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login" className="nav_links">
                Login
              </Link>
            </li>
          )}
          <li>
            <Link to="/admin/dashbord" className="nav_links">
              Admin
            </Link>
          </li>
        </ul>
    </nav>
  );
};

export default NavBar;
