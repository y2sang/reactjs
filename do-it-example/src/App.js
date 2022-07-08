import React, {Component} from "react";
import TodaysPlan from "./03/TodaysPlan";
import PropComponent from "./03/PropsComponent";
import ChildComponent from "./03/ChildComponent";
import BooleanComponent from "./03/BooleanComponent";
import ChildComponent2 from "./03/ChildComponent2";
import DefaultPropsComponent from "./03/DefaultPropsComponent";
import ChildProperty, {} from "./03/ChildProperty";
import StateExample from "./03/StateExample";
import Counter from "./03/Counter";
import NewCounter from "./03/NewCounter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 10};
        this.resetCount = this.resetCount.bind(this);
    }
    resetCount() {
        this.setState(({count}) => ({
            count: count + 10,
        }))
    }
    render() {
        return (
            <div className='body'>
                <TodaysPlan/>
                <PropComponent name="두잇 리액트"/>
                <img src='https://picsum.photos/200/300' alt='TEST'/>
                <ChildComponent
                    boolValue={true}
                    numValue={1}
                    arrayValue={[1, 2, 3,]}
                    objValue={{name: '제목', age: 30}}
                    nodeValue={<h1> NODE</h1>}
                    funcValue={() => {
                        console.log('Message');
                    }}
                />
                <div>지루할 때 : <BooleanComponent bored/></div>
                <div>즐거울 때 : <BooleanComponent/></div>
                <ChildComponent2 objValue={{age: 20, name: 'AAA'}} requiredStringValue="STR"/>
                <DefaultPropsComponent/>
                <ChildProperty>
                    <div>Child Node</div>
                </ChildProperty>
                <StateExample/>
                <div>
                    <Counter count={this.state.count} />
                </div>
                <div>
                    <NewCounter count={this.state.count} />
                </div>
                <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
            </div>

        );
    }
}

export default App;