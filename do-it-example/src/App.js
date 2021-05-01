import React, { Component } from "react";
import TodaysPlan from "./03/TodaysPlan";
import PropComponent from "./03/PropsComponent";
import ChildComponent from "./03/ChildComponent";

class App extends Component {
  render() {
    return (
      <div className="body">
        <TodaysPlan />
        <PropComponent name="두잇 리액트" />
        <img src='https://picsum.photos/200/300' alt='TEST' />
        <ChildComponent
          boolValue={true}
          numValue={1}
          arrayValue={[1, 2, 3,]}
          objValue={{ name: '제목', age: 30 }}
          nodeValue={<h1> NODE</h1>}
          funcValue={() => { console.log('Message'); }}
        />
      </div>

    );
  }
}

export default App;