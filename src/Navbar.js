import React from 'react'
import { NavLink, useHistory } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from "reactstrap";
  
const Navigation = () => {
    
}

function Navbar() {
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React Excercise</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile" tag={NavLink}>Profile</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Perpustakaan
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/perpusHome">Lihat Data Buku</DropdownItem>
                {/* <DropdownItem href="/perpusregister">Register</DropdownItem>
                <DropdownItem href="/perpuslogin">Login</DropdownItem> */}
                <DropdownItem href="/perpuslogout">Logout</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Leonardus Sagala</NavbarText>
        </Navbar>
      
        </div>
    )
}
