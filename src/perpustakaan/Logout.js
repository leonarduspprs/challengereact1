import React from "react";

import App from "../App";

export default function Logout() {

  sessionStorage.clear();
  
  return (
    

    <div className="container mt-5">
      <nav>
        <App />
      </nav>
    </div>
  );
}
