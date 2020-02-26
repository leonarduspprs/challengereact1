import React, { useState, useEffect } from "react";
import axios from "axios";

export function App() {
  const url = "http://localhost:3000/books";
  const [data, setData] = useState({ data: [] });
  useEffect(() => {
    axios.get(url).then(json => setData(json.book));
  }, []);
  const renderTable = () => {
    return data.data.map(book => {
      return (
        <tr>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.publish_date}</td>
          <td>{book.pages}</td>
          <td>{book.language}</td>
          <td>{book.publisher_id}</td>
          <td>
            <td>
              <a href={"/deleteBuku/" + book.id}>
                {" "}
                <button className="btn btn-danger">Delete</button>
              </a>
              <a href={"/editBuku/" + book.id}>
                <button className="btn btn-success">Edit</button>
              </a>
            </td>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">Data Buku</h1>
        <table id="book" className="table table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>author</th>
              <th>publish_date</th>
              <th>pages</th>
              <th>language</th>
              <th>publisher id</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
