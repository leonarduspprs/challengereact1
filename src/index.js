import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Notfound from "./components/Notfound";
// // import Valhookform from "./validations/Valhookform";
// import HookFormTest from "./validations/HookFormTest";
import Profile from "./components/Profile";
// import SingleForm from "./components/SingleForm";
// import NameForm from "./components/NameForm";
// import DataBuku from "./databuku/GetBuku";
// import PostBuku from "./databuku/PostBuku";
// import DeleteBuku from "./databuku/HapusBuku";
// import EditBuku from "./databuku/EditBuku";

import PerpusRegister from "./perpustakaan/Register";
import PerpusLogin from "./perpustakaan/Login";
import PerpusHome from "./perpustakaan/PerpusHome";

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
            <NavLink href="/perpusHOme">Perpus Home</NavLink>
          </NavItem>

          {/* <NavItem>
            <NavLink href="/SingleForm">SingleForm</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/nameForm">MultiForm</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/HookForm">Hook Form</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              DataBuku
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="/DataBuku">Lihat Data Buku</DropdownItem>
              <DropdownItem href="/addBuku">Tambah Data Buku</DropdownItem>
              <DropdownItem divider />
            </DropdownMenu>
          </UncontrolledDropdown> */}

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Perpustakaan
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="/perpusregister">Register</DropdownItem>
              <DropdownItem href="/perpuslogin">Login</DropdownItem>
              <DropdownItem divider />
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
      {/* <Route path="/singleform" component={SingleForm} />
      <Route path="/nameform" component={NameForm} />
      <Route path="/hookform" component={HookFormTest} />
      <Route path="/DataBuku" component={DataBuku} />
      <Route path="/EditBuku/:id" component={EditBuku} />
      <Route path="/deleteBuku/:number" component={DeleteBuku} />

      <Route path="/addBuku" component={PostBuku} /> */}

      <Route path="/perpusregister" component={PerpusRegister} />
      <Route path="/perpuslogin" component={PerpusLogin} />
      <Route path="/perpusHome" component={PerpusHome} />
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
