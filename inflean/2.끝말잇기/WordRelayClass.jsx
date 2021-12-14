const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "제로조",
    value: "",
    result: "",
  };

  onChangeHandler = (e) => {
    this.setState({ value: e.currentTarget.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({ result: "딩동댕", value: "", word: this.state.value });
      this.input.focus();
    } else {
      this.setState({ result: "땡", value: "" });
      this.input.focus();
    }
  };

  input;
  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            ref={this.onRefInput}
            type="text"
            value={this.state.value}
            onChange={this.onChangeHandler}
          />
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
