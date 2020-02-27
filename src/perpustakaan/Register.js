import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const [form, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    roles: ["USER"]
  });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/api/auth/signup", {
        name: form.name,
        username: form.username,
        email: form.email,
        password: form.password,
        roles: form.roles
      });

      if (result.status === 201) {
        alert("Data inserted sucessfuly!");
        history.push("/loginperpus");
      } else {
        throw new Error("Failed to insert data!");
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
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          className="form-control"
          value={form.name}
          name="name"
          onChange={updateField}
        />
        <br />
        <label>Username</label>
        <input
          className="form-control"
          value={form.username}
          name="username"
          onChange={updateField}
        />

        <label>Email</label>
        <input
          type="text"
          className="form-control"
          value={form.email}
          name="email"
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
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
export default Register;
