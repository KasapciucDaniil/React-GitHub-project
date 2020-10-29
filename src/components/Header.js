import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'

export const Header = () => (
  <Navbar bg="dark" variant="dark">
     <Navbar.Brand href="/">
         <img 
           src={logo}
           height="70"
           weight="70"
           className="d-inline-block align-top App-logo"
           alt="Logo"
         />
       </Navbar.Brand>
       <Nav className="mr-auto">
          <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink 
                   className="nav-link" 
                   to="/"
                   exact
                  >
                     Главная
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                   className="nav-link" 
                   to="/about"
                  >
                     Информация
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                   className="nav-link" 
                   to="/creator"
                  >
                     Создать заметку
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                   className="nav-link" 
                   to="/notes"
                  >
                     Заметки
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                   className="nav-link" 
                   to="/favorites"
                  >
                     Избранное
                </NavLink>
              </li>
          </ul>
       </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
    <Button variant="outline-info">Search</Button>
  </Form>
</Navbar>
)