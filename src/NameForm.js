import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Homer Simpsons" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name :</label>
        <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
      </form>
    );
  }
}

export default NameForm;