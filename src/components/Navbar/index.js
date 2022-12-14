import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './Elements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/a'>
            A
          </NavLink>
          <NavLink to='/b'>
            B
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;