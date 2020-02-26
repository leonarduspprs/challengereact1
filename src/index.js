import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory
} from "react-router-dom";
import App from "./App";
import Notfound from "./components/Notfound";
import Profile from "./components/Profile";
import PerpusRegister from "./perpustakaan/Register";   
import PerpusLogin from "./perpustakaan/Login";
import PerpusHome from "./perpustakaan/PerpusHome";
import PerpusLogout from "./perpustakaan/Logout";

import * as serviceWorker from "./serviceWorker";
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

if (window.sessionStorage.getItem("roles") === "ADMIN") {
  const routing = (
    <Router>
      <div> <Navbar color="light" light expand="md">
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

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/profile" component={Profile} />
        <Route path="/perpusregister" component={PerpusRegister} />
        <Route path="/perpuslogin" component={PerpusLogin} />
        <Route path="/perpusHome" component={PerpusHome} />
        <Route path="/perpuslogout" component={PerpusLogout} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );

  ReactDOM.render(routing, document.getElementById("root"));
} else {
  const routing = (
    <Router>
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
                <DropdownItem href="/perpusregister">Register</DropdownItem>
                <DropdownItem href="/perpuslogin">Login</DropdownItem>
                {/* <DropdownItem href="/perpuslogout">Logout</DropdownItem> */}
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Leonardus Sagala</NavbarText>
        </Navbar>
      </div>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/profile" component={Profile} />
        <Route path="/perpusregister" component={PerpusRegister} />
        <Route path="/perpuslogin" component={PerpusLogin} />
        <Route path="/perpusHome" component={PerpusHome} />
        <Route path="/perpuslogout" component={PerpusLogout} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );

  ReactDOM.render(routing, document.getElementById("root"));
}

serviceWorker.unregister();
