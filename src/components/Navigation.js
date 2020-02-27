import React, { useState } from "react";
import { NavLink as RRNavLink, useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const role = window.sessionStorage.getItem("roles");

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const history = useHistory();
  const logout = () => {
    let confirm = window.confirm("Anda yakin?");
    if (confirm) {
      window.sessionStorage.clear();
      history.push("/loginperpus");
    }
  };

  if (window.sessionStorage.getItem("token") && role === "ADMIN") {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href={"/"}>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/home" tag={RRNavLink}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile" tag={RRNavLink}>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={RRNavLink}>
                About
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Perpustakaan
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem to="/getbooksperpus" tag={RRNavLink}>
                  Data Buku
                </DropdownItem>
                <DropdownItem to="/getuser" tag={RRNavLink}>
                  Data User
                </DropdownItem>
                <DropdownItem to="/dataorder" tag={RRNavLink}>
                  Data Order
                </DropdownItem>
                <DropdownItem divider />
              <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavLink onClick={logout}>Logout</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    );
  } else if(window.sessionStorage.getItem("token") && role === "USER") {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href={"/"}>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/home" tag={RRNavLink}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile" tag={RRNavLink}>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={RRNavLink}>
                About
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Perpustakaan
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem to="/databuku" tag={RRNavLink}>
                  Data Buku
                </DropdownItem>
                <DropdownItem to="/dataorder" tag={RRNavLink}>
                  Data Order
                </DropdownItem>
                <DropdownItem divider />
              <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavLink onClick={logout}>Logout</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href={"/"}>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/home" tag={RRNavLink}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile" tag={RRNavLink}>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={RRNavLink}>
                About
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Perpustakaan
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem to="/loginperpus" tag={RRNavLink}>
                  Login
                </DropdownItem>
                <DropdownItem to="/registerperpus" tag={RRNavLink}>
                  Register
                </DropdownItem>
                {/* <DropdownItem divider />
              <DropdownItem>Logout</DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
};
export default Navigation;
