import React, { useState } from "react";
import axios from "axios";
function PostUsingHook() {
  const [form, setValues] = useState({
    author: "",
    title: "",
    publish_date: "",
    pages: "",
    language: "",
    publisher_id: ""
  });
  const printValues = e => {
    e.preventDefault();
    console.log(form);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3000/books", {
        author: form.author,
        title: form.title,
        publish_date: form.publish_date,
        pages: form.pages,
        language: form.language,
        publisher_id: form.publisher_id
      });

      if (result.status === 201) {
        alert("Data inserted sucessfuly!");
      } else {
        throw new Error("Failed to insert data!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <label>Author:</label>
        <input
          className="form-control"
          value={form.author}
          name="author"
          onChange={updateField}
        />
        <br />
        <label>Title:</label>
        <input
          className="form-control"
          value={form.title}
          name="title"
          onChange={updateField}
        />

        <label>publish_date:</label>
        <input
          type="date"
          className="form-control"
          value={form.publish_date}
          name="publish_date"
          onChange={updateField}
        />

        <label>pages:</label>
        <input
          className="form-control"
          value={form.pages}
          name="pages"
          onChange={updateField}
        />
        <label>language :</label>
        <input
          className="form-control"
          value={form.language}
          name="language"
          onChange={updateField}
        />
        <label>publisher_id:</label>
        <input
          className="form-control"
          value={form.publisher_id}
          name="publisher_id"
          onChange={updateField}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default PostUsingHook;
