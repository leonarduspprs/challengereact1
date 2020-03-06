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
      history.push("/login");
    }
  };

  if (window.sessionStorage.getItem("token") && role === "ADMIN") {
    return (
      <Navbar color="faded" light expand="md">
        <NavbarBrand href={"/"}>Blognesia</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/dashboard" tag={RRNavLink}>
                Dashboard
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Data Blog
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem to="/getbloguser" tag={RRNavLink}>
                  Data User
                </DropdownItem>
                <DropdownItem to="/getartikel" tag={RRNavLink}>
                  Data Artikel
                </DropdownItem>

                <DropdownItem to="/tambahartikel" tag={RRNavLink}>
                  Tambah Artikel
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
  } else if (window.sessionStorage.getItem("token") && role === "USER") {
    return (
      <Navbar color="faded" light expand="md">
        <NavbarBrand href={"/"}>Blognesia</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/dashboard" tag={RRNavLink}>
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/getallartikel" tag={RRNavLink}>
                Read Article
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Artikel
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem to="/getmyartikel" tag={RRNavLink}>
                  Artikel Saya
                </DropdownItem>
                <DropdownItem to="/tambahartikel" tag={RRNavLink}>
                  Tambah Artikel
                </DropdownItem>
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
        <NavbarBrand href={"/"}>Blognesia</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/getallartikel" tag={RRNavLink}>
                Read Article
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Masuk
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem to="/login" tag={RRNavLink}>
                  Login
                </DropdownItem>
                <DropdownItem to="/register" tag={RRNavLink}>
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
