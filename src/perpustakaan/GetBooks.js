import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Books() {
  const [data, setData] = useState([]);

  const DeleteBook = async id => {
    let result = await axios.delete("http://localhost:8080/books/" + id, {
      headers: {
        Authorization: window.sessionStorage.getItem("token")
      }
    });
    if (result.status === 200) {
      alert("Book has been deleted!");
      window.location.replace("/getbooksperpus");
    }
  };

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
    return (
      <h1>
        admin previllege required <br />)
      </h1>
    );
  return (
    <React.Fragment>
      <h1>Data Buku</h1>

      <table id="book" className="table table-bordered">
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
                <a
                  className="btn btn-success"
                  href={"/editbooksperpus/" + item.id}
                >
                  Ubah
                </a>
                <a>
                  <button
                    onClick={() => DeleteBook(item.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </a>
                <a></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Books;
