import React, {Component} from 'react';

class MyComponent extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("MyComponent 새로고침", this);
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

class MyPureComponent extends React.PureComponent {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("MyPureComponent 새로고침", this);
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

class TestApp extends Component {
    constructor(props) {
        super(props);
        this.listValue = [{name: 'Park'}, {name: 'Lee'}];
        this.state = {version: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        setTimeout(() => {
            this.listValue[0].name = 'Justin';
            this.setState({version: 1});
        }, 100);
        setTimeout(() => {
            this.listValue = [{name: 'Justin'}, {name: 'Lee'}];
            this.setState({version: 2});
        }, 200);
    }
    render() {
        return (
            <div>
                <MyComponent value={this.listValue}/>
                <MyPureComponent value={this.listValue}/>
                <button onClick={this.handleClick}>버튼</button>
            </div>
        );
    }
}

export default TestApp;
