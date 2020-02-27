import React, { useState, useMemo } from "react";
import axios from "axios";
import GetBuku from "./GetBooks";

function DeleteBooks(props) {
  const [data, setData] = useState({ Data: [] });
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios.delete(
        `http://localhost:3000/books/${props.match.params.number}`, {
            headers: {
              Authorization: window.sessionStorage.getItem("token")
            }
          }
      );
      setData(result.data);
      alert("Data deleted sucessfuly!");
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);

  console.log(data);
  return (
    <div>
      <GetBuku />
    </div>
  );
}
export default DeleteBooks;
