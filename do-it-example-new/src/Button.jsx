// const Button = () => <button onClick={clickHandle}>Click me!</button>
import React from "react";

export class Button extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleClick = () => {
        console.log(this);
    }

    render() {
        return <button onClick={this.handleClick}>Click Me!</button>;
    }


}