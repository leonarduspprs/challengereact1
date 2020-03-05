import React, { useState, useMemo } from "react";
import axios from "axios";

function UbahStatusArtikel(props) {
  const [data, setData] = useState([]);

  
  const UpdateStatus = async (id, statususer) => { 
    let result = await axios.put("http://localhost:8080/artikel/" + id,{status : statususer}, {
      headers: {
        Authorization: window.sessionStorage.getItem("token")
      }
    });

    
    if (result.status === 200) {
      alert("Data Diubah!");
      window.location.replace("/getartikel")
    }
  };



  
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/artikelbyid/" + props.prmtr, {
        headers: {
          Authorization: window.sessionStorage.getItem("token")
        }
      });
      setData(result.data.user[0]);
      console.log(result.data.user[0].status);

      
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);
  
  if (data.status === "Nonaktif")
    return (
      <div>
        <a>
          <button className="btn btn-warning" onClick={() => UpdateStatus(props.prmtr,"Aktif")}>
            Tampilkan Artikel
          </button>
        </a>
      </div>
    );
  return (
    <div>
        <a>
          <button className="btn btn-danger" onClick={() => UpdateStatus(props.prmtr,"Nonaktif")}>
          Hide Artikel
          </button>
        </a>
      </div>
  );
}

export default UbahStatusArtikel;
