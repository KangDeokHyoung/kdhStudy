import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작하세요.",
    result: [],
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state, resut, message } = this.state;
    if (state === "waiting") {
      this.setState({
        state: "ready",
        message: "초록색이 되면 클릭하세요",
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: "now",
          message: "지금 클릭",
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); //2초 ~3초 랜덤
    } else if (state === "ready") {
      //성급하게 클릭
      clearTimeout(this.timeout);
      this.setState({
        state: "waiting",
        message: "이런 성급하셨균요?! 초록색이 되면 다시 클릭하세요!",
      });
    } else if (state === "now") {
      //반응속도 체크
      this.endTime = new Date();

      this.setState((prevState) => {
        return {
          state: "waiting",
          message: "클릭해서 시작하세요",
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    });
  };

  renderAverage = () => {
    console.log(this.state.result);
    const { result } = this.state;
    return result.length === 0 ? null : (
      <>
        <div>
          평균 시간 :{result.reduce((a, c) => a + c) / result.length}
          ms
        </div>
        <button onClick={this.onReset}>리셋버튼</button>
      </>
    );
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;
