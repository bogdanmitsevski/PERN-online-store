import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import {Button} from 'react-bootstrap';
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (

      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink style={{color:'white'}} to = {SHOP_ROUTE}>BestShop</NavLink>
          {user.isAuth ?
          <Nav className="ml-auto" style={{color:'white'}}>
            <Button variant = {"outline-light"}>Admin Panel</Button>
            <Button variant = {"outline-light"}className="ms-2">Authorization</Button>
          </Nav>
          :
          <Nav className="ms-auto" style={{color:'white'}}>
            <Button variant = {"outline-light"} onClick = {() => user.setIsAuth(true)}>Authorization</Button>
          </Nav> 
          }
        </Container>
      </Navbar>
    );
});

export default NavBar;