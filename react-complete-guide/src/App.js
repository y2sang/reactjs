import React, {useState} from 'react';

// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {id: 1, title: 'Car Insurance', amount: 222.11, date: new Date(2021, 0, 1)},
    {id: 2, title: 'Toilet Paper', amount: 33.11, date: new Date(2021, 3, 1)},
    {id: 3, title: 'CA', amount: 44.11, date: new Date(2021, 0, 1)},
    {id: 4, title: 'DA', amount: 55.22, date: new Date(2021, 0, 1)},
];

const App = () => {


    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    // return React.createElement('div', {},
    //     React.createElement('h2', {}, "Let's get started!"),
    //     React.createElement(Expenses, {items: expenses})
    // )
    const addExpenseHandler = (expense) => {
        setExpenses(prevArray => {
            return [expense, ...prevArray];
        });
        // expenses.push(expense);

    };
    return (
        <div>
            <h2>Let's get started!</h2>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;