import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-bar-title">
          <NavLink id="title" to="/">
            <span>Speak</span>
            <span>Ling&nbsp;</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li> */}
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/signout">Sign Out</NavLink>
        </li>
        <li>
          <NavLink to="/skill/fr/phrases/1">Phrases</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SignedOutLinks;
