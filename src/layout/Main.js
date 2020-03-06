import React from "react";
import Navigation from "../components/Navigation";
const Main = props => {
  return (
    <>
      <div id="wrapper">
        <div className="jumbotron">

  <h1 className="display-4">Welcome to Blognesia!</h1>
  <p className="lead">Expresikan Dirimu Disini.</p>

        </div>
        
        <Navigation />
        <div className="container mt-5 mb-5">{props.children}</div>
      </div>
    </>
  );
};
export default Main;
