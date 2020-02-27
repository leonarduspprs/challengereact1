import React from "react";
import axios from "axios";

class EditBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      language: "",
      pages: "",
      publisher_date: "",
      publisher_id: ""
    };
  }

  componentDidMount = async () => {
    let id = this.props.match.params.id;
    const result = await axios.get("http://localhost:8080/books/" + id, {
      headers: {
        Authorization: window.sessionStorage.getItem("token")
      }
    });
    this.setState(result.data.book);

    console.log(result);
  };

  handleSubmit = async e => {
    e.preventDefault();
    let id = this.props.match.params.id;
    const result = await axios.put(
      "http://localhost:8080/books/" + id,
      this.state,
      {
        headers: {
          Authorization: window.sessionStorage.getItem("token")
        }
      }
    );
    console.log(result);
    result.status === 200 ? 
    window.location.replace("/getbooksperpus")  : alert("Failed!");
  };

  updateField = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (window.sessionStorage.getItem("roles") !== "ADMIN")
      return <h1>Requided admin previllege</h1>;

    return (
      <div>
        <h1>Edit a book</h1>

        <form onSubmit={this.handleSubmit}>
          <label for="title">Title :</label>
          <input
            id="title"
            value={this.state.title}
            className="form-control"
            type="text"
            name="title"
            onChange={this.updateField}
          />

          <label for="author">Author :</label>
          <input
            id="author"
            value={this.state.author}
            className="form-control"
            type="text"
            name="author"
            onChange={this.updateField}
          />

          <label for="language">Language :</label>
          <input
            id="language"
            value={this.state.language}
            className="form-control"
            type="text"
            name="language"
            onChange={this.updateField}
          />

          <label for="pages">Pages :</label>
          <input
            id="pages"
            value={this.state.pages}
            className="form-control"
            type="number"
            name="pages"
            onChange={this.updateField}
          />

          <label for="publisher_date">Publisher Date :</label>
          <input
            id="publisher_date"
            value={this.state.publisher_date}
            className="form-control"
            type="type"
            name="publisher_date"
            onChange={this.updateField}
          />

          <label for="publisher_id">Publisher Id :</label>
          <input
            id="publisher_id"
            value={this.state.publisher_id}
            className="form-control"
            type="text"
            name="publisher_id"
            onChange={this.updateField}
          />

          <input type="submit" className="btn btn-primary mt-3" />
        </form>
      </div>
    );
  }
}

export default EditBooks;
