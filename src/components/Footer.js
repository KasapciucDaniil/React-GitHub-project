import React from 'react'
import { Navbar, NavbarBrand } from 'react-bootstrap';

export const Footer = () => {
    return(
        <Navbar bg="dark" variant="dark"> 
          <NavbarBrand>
          <div className="footerLogo">
          <h1 className="text-logo display-4">React js</h1>
            <img 
                src="../images/logo.png" 
                width="80"
                height="120"
                className="d-inline-block align-top footer"
                alt=""
            />   
          </div>    
          </NavbarBrand>
        </Navbar>
    )
}