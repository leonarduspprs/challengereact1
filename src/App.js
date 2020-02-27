import React from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./layout/Main";
import LoginPerpus from "./perpustakaan/Login";
import RegisterPerpus from "./perpustakaan/Register";
import Notfound from "./components/Notfound";
import GetUser from "./perpustakaan/GetUser";
import GetBookPerpus from "./perpustakaan/GetBooks";
import DeleteBookPerpus from "./perpustakaan/DeleteBooks";

function App() {
  return (
    <Router>
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/loginperpus" component={LoginPerpus} />
          <Route path="/registerperpus" component={RegisterPerpus} />
          <Route path="/getuser" component={GetUser} />
          <Route path="/getbooksperpus" component={GetBookPerpus} />
          <Route path="/getbooksperpus/:id" component={GetBookPerpus} />
          <Route component={Notfound} />
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
