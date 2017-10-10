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
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <NavLink to="/" className="navbar-brand">
              Framgia
            </NavLink>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to="/login" activeClassName="active">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/posts" activeClassName="active">
                  Posts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
