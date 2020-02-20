import React from "react";
import Greetings from "./Greetings";
import Avatar from "./Avatar";
import Bio from "./Bio";

import "bootstrap/dist/css/bootstrap.min.css";

function Profile(props) {
  return (
    <div>
      <container>
        <div className="container mt5">
          <div className=" alert alert-dark">
            <div className="text-center">
              <Avatar />

              <Bio />
            </div>
          </div>
        </div>
      </container>
    </div>
  );
}

export default Profile;
