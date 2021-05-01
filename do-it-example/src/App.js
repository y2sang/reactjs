import React, { Component } from "react";
import TodaysPlan from "./03/TodaysPlan";
import PropComponent from "./03/PropsComponent";
class App extends Component {
  render() {
    return (
      <div className="body">
        <TodaysPlan />
        <PropComponent name="두잇 리액트" />
        <img src='https://picsum.photos/200/300' />
      </div>
    );
  }
}

export default App;