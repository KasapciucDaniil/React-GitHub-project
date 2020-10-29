import React from 'react'
import { Navbar, NavbarBrand } from 'react-bootstrap';
import logo from '../logo.svg'

export const Footer = () => {
    return(
        <Navbar bg="dark" variant="dark"> 
          <NavbarBrand>
          <div className="footerLogo">
          <h1 className="text-logo display-4"><strong>React js</strong></h1>
            <img 
                src={logo}
                className="d-inline-block align-top footer App-logo"
                alt="logo"
            />   
          </div>    
          </NavbarBrand>
        </Navbar>
    )
}