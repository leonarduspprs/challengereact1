import React, { useState, useMemo } from "react";
import axios from "axios";
import { Card } from "reactstrap";

function DataArtikel() {
  const [data, setData] = useState([]);

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/artikell", {
        headers: {
          Authorization: window.sessionStorage.getItem("token")
        }
      });
      setData(result.data.user);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);

  let no = 1;
  return (
    <React.Fragment>
      <h1>Artikelku</h1>
      <br />
      <div className="container mt 5">
        {data.map((item, id) => (
          <div key={id}>
            <div className="card" style={{ width: "55rem" }}>
              <h1 className="card-title text-center">{item.judul}</h1>
              <p className="card-body">{item.isi}</p>
              <h5 className="card-body text-right">Status : {item.status}</h5>
            </div>
            <br />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default DataArtikel;
