
import React, { useState, useMemo } from "react";
import axios from "axios";
import GetBuku from "./GetBuku";

function HapusBuku(props) {
  const [data, setData] = useState({ Data: [] });
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios.delete(
        `http://localhost:3000/books/${props.match.params.number}`
      );
      setData(result.data);
      alert("Data deleted sucessfuly!");
    };
    try {
      fetchData();
    } 
    catch (err) {
      alert(err);
    }
  }, []);

  console.log(data);
  return <div><GetBuku/></div>;
  
}
export default HapusBuku;
