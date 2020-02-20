import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Notfound from "./components/Notfound";
// import Valhookform from "./validations/Valhookform";
import HookFormTest from "./validations/HookFormTest";

import Profile from "./components/Profile";

import SingleForm from "./components/SingleForm";
import NameForm from "./components/NameForm";
import * as serviceWorker from "./serviceWorker";
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
  DropdownItem,
  NavbarText
} from "reactstrap";

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
            <NavLink href="/About">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/SingleForm">SingleForm</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/nameForm">MultiForm</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="/Valhookform">Hook Form Validations</NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink href="/HookForm">Hook Form</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Others
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="https://reactstrap.github.io/components/alerts/">
                Learn Reactstrap components
              </DropdownItem>
              <DropdownItem href="https://instagram.com/leonarduspprs">
                Instagram
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Leonardus Sagala</NavbarText>
      </Navbar>
    </div>

    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about/" component={About} />
      <Route path="/about/:number" component={About} />
      <Route path="/profile" component={Profile} />
      <Route path="/singleform" component={SingleForm} />
      <Route path="/nameform" component={NameForm} />
      {/* <Route path="/valhookform" component={Valhookform} /> */}
      <Route path="/hookform" component={HookFormTest} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
