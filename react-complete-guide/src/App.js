import React from 'react';

// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenses = [
        {title: 'Car Insurance', amount: 222.11, date: new Date(2021, 0, 1)},
        {title: 'Toilet Paper', amount: 33.11, date: new Date(2021, 3, 1)},
        {title: 'CA', amount: 44.11, date: new Date(2021, 0, 1)},
        {title: 'DA', amount: 55.22, date: new Date(2021, 0, 1)},
    ];
    // return React.createElement('div', {},
    //     React.createElement('h2', {}, "Let's get started!"),
    //     React.createElement(Expenses, {items: expenses})
    // )
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;