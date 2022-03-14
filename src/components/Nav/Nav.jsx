import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <NavLink to="/" className="navigation nav_main">
            <i className="fas fa-home"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="navigation nav_profile">
            <i className="fas fa-user"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/friends" className="navigation nav_friends">
            <i className="fas fa-users"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" className="navigation nav_messages">
            <i className="fas fa-comments"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className="navigation nav_settings">
            <i className="fas fa-cog"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
