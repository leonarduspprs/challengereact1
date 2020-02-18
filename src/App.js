import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./components/Greetings";
import UserProfile from "./components/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <container>
      <div className="text-center">
        <UserProfile />
      </div>
    </container>
  );
}

export default App;
