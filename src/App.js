import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./layout/Main";
import Notfound from "./components/Notfound";

import Login from "./blog/Login";
import Dashboard from "./blog/Dashboard";
import GetBlogUser from "./blog/DataUser";
import GetBlogUserById from "./blog/DataUserById";
import UpdateStatus from "./blog/UpdateStatus";

import GetArtikel from "./blog/GetArtikel";

import DashboardUser from "./blog/DashboardUser";
import PostArticle from "./blog/TambahArtikel";
import MyArtikel from "./blog/MyArtikel";
import AllArtikel from "./blog/AllArticle";


function App() {
  return (
    <Router>
      <Main>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* Endpoint Admin */}
          {/* Manager  User */}
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/getbloguser" component={GetBlogUser} />
          <Route path="/getbloguserbyid/:id" component={GetBlogUserById} />
          <Route path="/updatestatus/:id" component={UpdateStatus} />

          {/* Manage Artikel */}
          <Route path="/getartikel" component={GetArtikel} />

          {/* Endpoint User */}
          <Route path="/dashboarduser" component={DashboardUser} />
          <Route path="/tambahartikel" component={PostArticle} />
          <Route path="/getmyartikel" component={MyArtikel} />
          <Route path="/getallartikel" component={AllArtikel} />

          <Route component={Notfound} />
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
