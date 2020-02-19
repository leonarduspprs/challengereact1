import React from "react";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      nama: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    alert(
      "Is going: " +
        this.state.isGoing +
        ` \nNumber of guest ${this.state.numberOfGuests} \nNama ${this.state.nama}`
    );

    event.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="container mt-4">
          <form onSubmit={this.handleSubmit}>
            <label>Is going:</label>
            <input
              className="form-control"
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />

            <label>Number of guests:</label>
            <input
              className="form-control"
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
            <br />

            <div className="form-group">
            <label>Nama:</label>
            <input
              className="form-control"
              name="nama"
              type="text"
              value={this.state.nama}
              onChange={this.handleInputChange}
            />
            </div>
            <input className="btn btn-info btn-lg" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default NameForm;
