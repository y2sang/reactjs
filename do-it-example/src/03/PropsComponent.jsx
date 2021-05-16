import React, { Component } from "react";
import ProTypes from "prop-types";

class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

PropsComponent.proTypes = {
  name: ProTypes.string,
};
export default PropsComponent;
