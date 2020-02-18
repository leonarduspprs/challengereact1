import React from "react";

const Greetings = props => (
  <div>
    <h3>Nama: {props.name}</h3>
    <h3>Umur: {props.age}</h3>
    <h3>JK: {props.gender}</h3>
  </div>
);



export default Greetings;
