import React from "react";
class SingleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        {/* <h2 className="text-center font-italic mt-4">belajar</h2> */}
        <form onSubmit={this.handleSubmit}>
          <div className="container mt-5">
            <div className="form-group">
              <label>Name:</label>
              <input
                className="form-control"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default SingleForm;
