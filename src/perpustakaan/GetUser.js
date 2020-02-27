import React, { useState, useMemo } from "react";
import axios from "axios";

function User() {
  const [data, setData] = useState([]);

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/api/users", {
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
      <table className="table" id="book" className="table table-bordered">
        <thead>
          <tr>
            <td>No.</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={id}>
              <td>{no++}</td>
              <td>
                <a>{item.name}</a>
              </td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default User;