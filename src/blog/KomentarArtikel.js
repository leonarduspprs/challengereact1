import React, { useState, useMemo } from "react";
import axios from "axios";

function KomentarArtikel(props) {
  const [data, setData] = useState([]);
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:8080/komentar/" + props.prmtr,
        {
          headers: {
            Authorization: window.sessionStorage.getItem("token")
          }
        }
      );

      setData(result.data.user);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);

  const [form, setValues] = useState({
    isikomentar: "",
    status: ""
  });
  console.log("bruh");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:8080/komentar/" + props.prmtr,
        {
          isikomentar: form.isikomentar,
          status: "hide"
        },
        {
          headers: {
            Authorization: window.sessionStorage.getItem("token")
          }
        }
      );

      if (result.status === 201) {
        alert("Komentar Berhasil Ditambahkan!");
        window.location.assign(window.location.href);
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
    <React.Fragment>
      <div className="container mt-5">
        <br />
        <h4>Tambah Komentar : </h4>
        <form onSubmit={handleSubmit}>
          <textarea
            className="form-control"
            value={form.isikomentar}
            placeholed="Masukkan Komentar"
            name="isikomentar"
            onChange={updateField}
          /> <br/>
          <button className="btn btn-success float-right" align="right">Tambah Komentar</button>
        </form>
      </div>

      <div className="comtainer mt-5">
      <h4>Komentar Terdahulu </h4>
      <br />
      <div className="container mt 5">
        {data.map((item, id) => (
          <div key={id}>
            <div className="card" style={{ width: "55rem" }}>
              <h5>{item.user.nama} berkomentar..  </h5>
              <h4>{item.isikomentar}</h4>
            </div>
            <br />
          </div>
        ))}
      </div>
      </div>
    </React.Fragment>
  );
}

export default KomentarArtikel;
