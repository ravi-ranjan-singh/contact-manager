import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper ">
        <Link
          to="/"
          className="brand-logo "
          style={{ marginLeft: 10, marginTop: -2 }}
        >
          Contact Manager
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">All Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
