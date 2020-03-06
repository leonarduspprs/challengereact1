import React, { useState, useMemo } from "react";
import axios from "axios";

function DataUserById(props) {
  const [data, setData] = useState([]);

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:8080/user/" + props.match.params.id,
        {
          headers: {
            Authorization: window.sessionStorage.getItem("token")
          }
        }
      );

      console.log(result);
      setData(result.data.user);
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
    <div className="Container mt-5">
      <h3>Nama: {data.nama}</h3>
      <h3>Username: {data.username}</h3>
      <h3>Email: {data.email}</h3>
      <h3>Status: {data.status}</h3>
    </div>
  );
}

export default DataUserById;
