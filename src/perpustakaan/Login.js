import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  const [form, setValues] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/api/auth/signin", {
        username: form.username,
        password: form.password
      });

      window.sessionStorage.setItem("roles", result.data.roles.roles[0].name);
      window.sessionStorage.setItem("name", result.data.roles.name);
      window.sessionStorage.setItem("token", result.data.accessToken);

      if (result.status === 200) {
        if (window.sessionStorage.getItem("roles") === "ADMIN") {
          alert("Login succes");
          history.push("/Profile");
          console.log(result);
        } else {
          history.push("/About");
        }
      } else {
        throw new Error("Gagal Login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  function handleClick() {
    history.push("/home");
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <br />
        <label>Username</label>
        <input
          className="form-control"
          value={form.username}
          name="username"
          onChange={updateField}
        />

        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={form.password}
          name="password"
          onChange={updateField}
        />
        {/* <input type="hidden" value="User" name="roles" onChange={updateField} /> */}
        <br />
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
