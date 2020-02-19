import React from "react";


class Valhookform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfGuests: 2,
      nama : '',
      email : '',
      password : '',
      confirmpassword : ''
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
        ` \nNumber of guest ${this.state.numberOfGuests} \nNama ${this.state.nama} \nEmail ${this.state.email}`
    );

    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>

        <label>
          Nama:
          <input
            name="nama"
            type="text"
            value={this.state.nama}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          Email:
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Valhookform;
