import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink to="/" className="navbar-brand">Framgia</NavLink>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
