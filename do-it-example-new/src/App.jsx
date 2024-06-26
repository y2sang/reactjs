import {useState} from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropTypes from "prop-types";
import {Button} from "./Button.jsx";
import ProjectsPage from "./projects/ProjectsPage.jsx";
import Clock from "./Clock.jsx";
import UseStateTest from "./UseStateTest.jsx";
import Parent from "./Parent.jsx";
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './home/HomePage';
import ProjectPage from "./projects/ProjectPage.jsx";

function Greeter(props) {
    return <h1>Hello, {props.name}</h1>;
}

Greeter.propTypes = {
    name: PropTypes.string.isRequired,
}

// const clickHandle = () => console.log("clicked");

const data = [
    {id: 1, name: 'apple'},
    {id: 2, name: 'orange'},
    {id: 3, name: 'blueberry'},
    {id: 4, name: 'banana'},
    {id: 5, name: 'kiwi'},
];

const FruitListItem = (props) => {
    return <li>{props.data.name}</li>;
}

const FruitList = (props) => {
    const items = props.fruits.map(item =>
        <FruitListItem key={item.id} data={item}/>
    );
    return <ul>{items}{' '}</ul>;
}

FruitList.propTypes = {
    fruits: PropTypes.array.isRequired,
}

FruitListItem.propTypes = {
    data: PropTypes.any,
}


function AppSample() {
    const [count, setCount] = useState(0)

    // return (
    //     <>
    //         <div>
    //             <a href="https://vitejs.dev" target="_blank">
    //                 <img src={viteLogo} className="logo" alt="Vite logo"/>
    //             </a>
    //             <a href="https://react.dev" target="_blank">
    //                 <img src={reactLogo} className="logo react" alt="React logo"/>
    //             </a>
    //         </div>
    //         <h1>Vite + React</h1>
    //         <div className="card">
    //             <button onClick={() => setCount((count) => count + 1)}>
    //                 count is {count}
    //             </button>
    //             <p>
    //                 Edit <code>src/App.jsx</code> and save to test HMR
    //             </p>
    //         </div>
    //         <p className="read-the-docs">
    //             Click on the Vite and React logos to learn more
    //         </p>
    //         <Greeter name='Siri'/>
    //         <Button/>
    //         <FruitList fruits={data}/>
    //     </>
    // )


    return (
        <div className="container">
            <ProjectsPage/>
            <Clock/>
            <UseStateTest/>
            <Parent/>
        </div>
    )
}

function App() {
    return (
        <Router>
            <header className="sticky">
                  <span className="logo">
        <img src="/assets/logo-3.svg" alt="logo" width="49" height="99"/>
      </span>
                <NavLink to="/" className="button rounded">
                    <span className="icon-home"></span>
                    Home
                </NavLink>
                <NavLink to="/projects" className="button rounded">
                    Projects
                </NavLink>
            </header>
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/projects/:id" element={<ProjectPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
