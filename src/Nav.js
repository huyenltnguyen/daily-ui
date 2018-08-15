import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/001-sign-up'>Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
