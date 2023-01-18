import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  let activeStyle = classes.active;

  return (
    <header className={classes.header}>
      <div className={classes.logo}> ONLINE BOOKSTORE</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/onlinebookstore/home"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/onlinebookstore/about"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/onlinebookstore/comments&reviews"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Send your reviews & comments
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
