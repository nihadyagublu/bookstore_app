import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";

const MainNavigation = (props) => {
  let activeStyle = classes.active;

  return (
    <header className={classes.header}>
      <div className={classes.logo}> ONLINE BOOKSTORE</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comments&reviews"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Send your reviews & comments
            </NavLink>
          </li>
          <li>
            <Toggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
