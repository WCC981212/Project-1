import React from 'react';
import avatar from '../img/avatar.jpg';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const rootaddress = '/Project-1';
  return (
    <div className='NavBar'>
      <nav className='nav'>
        <div className='profile'>
          <img src={avatar} alt='' />
        </div>
        <ul className='nav-items'>
          <li className='nav-item'>
            <NavLink to={`${rootaddress}/`} exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={`${rootaddress}/about`} exact activeClassName='active'>
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={`${rootaddress}/portfolios`} exact activeClassName='active'>
              Portfolios
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={`${rootaddress}/blogs`} exact activeClassName='active'>
              Blogs
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to={`${rootaddress}/contact`} exact activeClassName='active'>
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className='footer'>
          <p>&copy; Copyright 2021 WCC</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
