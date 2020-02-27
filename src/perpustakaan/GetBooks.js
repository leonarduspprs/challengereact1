import React, { useState, useMemo } from "react";
import axios from "axios";

function Books() {
  const [data, setData] = useState([]);

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/books", {
        headers: {
          Authorization: window.sessionStorage.getItem("token")
        }
      });
      setData(result.data.book);

      console.log(result);
      console.log("result");
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
        <h1>Data Buku</h1>
      <table className="table" id="book" className="table table-bordered">
        <thead>
          <tr>
            <td>No.</td>
            <td>Title</td>
            <td>Author</td>
            <td>Publish Date</td>
            <td>Pages</td>
            <td>Language</td>
            <td>Publisher ID</td>
            <td>Aksi</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr key={id}>
              <td>{no++}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.publisher_date}</td>
              <td>{item.pages}</td>
              <td>{item.language}</td>
              <td>{item.publisher_id}</td>
              <td>
              <a href={"/deleteBuku/" + item.id}>
                {" "}
                <button className="btn btn-danger">Delete</button>
              </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Books;
