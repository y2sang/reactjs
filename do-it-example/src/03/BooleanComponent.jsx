import React, { Component } from "react";

class BooleanComponent extends Component {
  render() {
    const message = this.props.bored
      ? "놀러 가자"
      : "하던 일 열심히 마무리 하기";
    return <span className="message-container">{message}</span>;
  }
}

export default BooleanComponent;
