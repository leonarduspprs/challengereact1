import React from "react";

import Avatar from "./Avatar";
import Username from "./Username";
import Bio from "./Bio";

function UserProfile() {
  return (
    <container>
      <Avatar/>
      <Username/>
      <br/>
      <Bio/>
    </container>
  );
}

export default UserProfile;
