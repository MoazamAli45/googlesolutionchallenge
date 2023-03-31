import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import authContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
const MainNavigation = () => {
  const authCtx = useContext(authContext);
  const history = useNavigate();
  const logouthandler = () => {
    authCtx.logout();
    history("/");
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link to="/auth">
          <div className={classes.logo}>
            HELPING
            <span>
              <VolunteerActivismIcon />
            </span>
          </div>
        </Link>

        <ul>
          {!authCtx.isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <Link to="/profile">Change Password</Link>
            </li>
          )}

          {authCtx.isLoggedIn && (
            <li>
              <button onClick={logouthandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
