import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./layout/Main";
import Notfound from "./components/Notfound";

import Login from "./blog/Login";
import Register from "./blog/Register";
import Dashboard from "./blog/Dashboard";
import GetBlogUser from "./blog/DataUser";
import GetBlogUserById from "./blog/DataUserById";

import GetArtikel from "./blog/GetArtikel";
import GetArtikelById from "./blog/GetArtikelById";

import DashboardUser from "./blog/DashboardUser";
import PostArticle from "./blog/TambahArtikel";
import MyArtikel from "./blog/MyArtikel";
import AllArtikel from "./blog/AllArticle";

function App() {
  return (
    <Router>
      <Main>
        <Switch>
          {window.sessionStorage.getItem("roles") === "Admin" ? (
            <>
              <Route path="/getbloguser" component={GetBlogUser} />
              <Route path="/getbloguserbyid/:id" component={GetBlogUserById} />
            </>
          ) : (
            ""
          )}

          <Route path="/getartikel" component={GetArtikel} />

          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />

          <Route path="/getartikelbyid/:id" component={GetArtikelById} />
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
