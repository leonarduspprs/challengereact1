import React, { useState, useMemo } from "react";
import axios from "axios";

function UbahStatus(props) {
  const [data, setData] = useState([]);

  
  const UpdateStatus = async id => {
    let result = await axios.put("http://localhost:8080/user/" + id,{status : "Blocked"}, {
      headers: {
        Authorization: window.sessionStorage.getItem("token")
      }
    });

    
    if (result.status === 200) {
      alert("User dinonaktifkan!");
      window.location.replace("/getbloguser")
    }
  };



  
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/user/" + props.prmtr, {
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

  if (data.admin === "ADMIN")
    return (
      <div>
        <a className="btn btn-info" disabled>
          Admin
        </a>
      </div>
    );
  if (data.status === "Active")
    return (
      <div>
        <a>
          <button className="btn btn-danger" onClick={() => UpdateStatus(props.prmtr)}>
            Nonaktifkan User
          </button>
        </a>
      </div>
    );
  return (
    <div>
      <a className="btn btn-warning" href={"/updatestatus/" + props.prmtr}>
        Aktifkan User
      </a>
    </div>
  );
}

export default UbahStatus;
