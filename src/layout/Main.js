import React from "react";
import { Container, Col } from "reactstrap";
import Navigation from "../components/Navigation";
const Main = props => {
  return (
    <>
      <div id="wrapper">
        <Navigation />
        <div className="container mt-5 mb-5">{props.children}</div>
      </div>
    </>
  );
};
export default Main;
