import React, { useState, useMemo } from "react";
import axios from "axios";

function DataArtikel() {
  const [data, setData] = useState([]);
  
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/artikel", {
        headers: {
          Authorization: window.sessionStorage.getItem("token")
        }
      });
      setData(result.data.user);

      console.log(result);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);

  let no = 1;
  if (window.sessionStorage.getItem("roles") !== "ADMIN")
    return <h1>Requided admin previllege</h1>;
  return (
    <React.Fragment>
      <h1>Data User</h1>
      <table id="penggunablog" className="table table-bordered container mt-5">
        <thead>
          <tr>
            <td>No</td>
            <td>Judul</td>
            <td>Penulis</td>
            <td>Aksi</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={id}>
              <td>{no++}</td>
              <td>{item.judul}</td>
              <td>{item.user.nama}</td>
              <td><a
                  className="btn btn-info btn-xs"
                  href={"/getartikelbyid/" + item.id}
                >
                  Lihat Detail
                </a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default DataArtikel;
