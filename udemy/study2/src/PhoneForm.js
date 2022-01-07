import React, { Component } from "react";

class PhoneForm extends Component {
  state = { name: "", phone: "" };
  handleChange = (e) => {
    this.setState = { [e.target.name]: e.target.velue };
  };

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.onCreate(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="이름"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            placeholder="전화번호"
            onChange={(e) => this.setState({ phone: e.target.value })}
          />
          <button type="submit" >등록</button>
          {this.state.name}
          {this.state.phone}
        </form>
      </div>
    );
  }
}

// onclick
// onkeypress
// onchange

export default PhoneForm;
