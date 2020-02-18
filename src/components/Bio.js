import React from "react";
import Greetings from "./Greetings";

import "bootstrap/dist/css/bootstrap.min.css";

function Bio(props) {
  return (
    <div>
    <span class="border border-warning">
      <h2>Biodata: </h2>
      <h4 style={{fontFamily: "Arial"}}>
        <Greetings name="leonardus" age="15" gender="Pure Male" />
      </h4>
      </span>
    </div>
  );
}

export default Bio;
