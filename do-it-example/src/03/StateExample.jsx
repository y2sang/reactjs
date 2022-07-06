import React, {Component} from 'react';

class StateExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            formData: 'no data',
            count: 0,

        }
        this.handleData = this.handleData.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
    }

    increaseCount() {
        this.setState(
            prevState => ({
                count: prevState.count + 1,
            })
        )
    }


    componentDidMount() {
        setTimeout(() => this.handleData('new data '), 4000);
    }

    handleData(data) {
        // const data = 'new data ';
        //const {formData} = this.state;

        this.setState(prevState => ({
            loading: false,
            formData: data + prevState.formData
        }));

        console.log('loading value ', this.state.loading);
    }

    render() {
        return (
            <div>
                {/* state 데이터는 this.state 로 접근 가능합니다. */}
                <span>로딩중: {String(this.state.loading)}</span>
                <span>결과: {this.state.formData}</span>
                <div>카운트: {this.state.count}</div>
                <button onClick={this.increaseCount}>클릭클릭</button>
            </div>
        );
    }
}

export default StateExample;