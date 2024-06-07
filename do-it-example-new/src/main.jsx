import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

function ExampleForm() {
    const [userName, setUserName] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userName, userPassword);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value);
        console.log({[name]: value});
        switch (event.target.name) {
            case 'userName':
                setUserName(event.target.value);
                break;
            case 'userPassword':
                setUserPassword(event.target.value);
                break;
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <input name="userName" placeholder="Enter name" value={userName}
                   onChange={handleChange}/>
            <input name="userPassword" placeholder="Enter user password"
                   type={"password"} value={userPassword}
                   onChange={handleChange}/>
            <button type="submit">Sign In</button>
        </form>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ExampleForm/>);