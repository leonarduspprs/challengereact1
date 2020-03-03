import React, { useState, useMemo } from "react";
import axios from "axios";
import UbahStatus from "./UbahStatus";

function DataUser() {
  const [data, setData] = useState([]);
  
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/user", {
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
            <td>No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={id}>
              <td>{no++}</td>
              <td><a href={"/getbloguserbyid/" + item.id}>{item.nama}</a></td>
              <td>{item.email}</td>
              <td>{item.admin}</td>
              <td>{item.status}</td>
              <td>
                <UbahStatus prmtr={item.id} />
                {/* <a
                  className="btn btn-info btn-xs"
                  href={"/getbloguserbyid/" + item.id}
                >
                  Lihat Detail
                </a> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default DataUser;
