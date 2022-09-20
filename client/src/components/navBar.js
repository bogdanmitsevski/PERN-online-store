import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import {Button} from 'react-bootstrap';

const NavBar = () => {
    const {user} = useContext(Context);
    return (

      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink style={{color:'white'}} to = {SHOP_ROUTE}>BestShop</NavLink>
          <Nav className="ml-auto" style={{color:'white'}}>
          <Button variant = {"outline-light"}>Admin Panel</Button>
          <Button variant = {"outline-light"}>Authorization</Button>
          </Nav>
        </Container>
      </Navbar>

    );
};

export default NavBar;