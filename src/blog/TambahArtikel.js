import React, { useState } from "react";
import axios from "axios";
function TambahArtikel() {
  const [form, setValues] = useState({
    judul: "",
    isi: "",
    status: ""
  });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:8080/artikel",
        {
          judul: form.judul,
          isi: form.isi,
          status: "hide"
        },
        {
          headers: {
            Authorization: window.sessionStorage.getItem("token")
          }
        }
      );

      if (result.status === 201) {
        
        alert("Data inserted sucessfuly!");
        if (window.sessionStorage.getItem("roles") === "ADMIN") {
          window.location.replace("/getartikel");
        } else {
          window.location.replace("/getmyartikel");
        }
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
        <label>Judul:</label>
        <input
          className="form-control"
          value={form.judul}
          name="judul"
          onChange={updateField}
        />
        <br />
        <label>Isi:</label>
        <textarea
          className="form-control"
          value={form.isi}
          name="isi"
          onChange={updateField}
        />

        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default TambahArtikel;
