import React, {useState} from 'react';
import './ExpenseForm.css';
import ExpensesButtons from "./ExpensesButtons";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // console.log(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // });
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // });
        // setUserInput((prevState) => {
        //    return { ...prevState, enteredTitle: e.target.value};
        // });
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredDate('');
        setEnteredTitle('');
        setEnteredAmount('');
    }

    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min={"0.01"} step={"0.01"} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min={"2019-01-01"} max={"2029-12-31"} onChange={dateChangeHandler}/>
                </div>

            </div>

            <ExpensesButtons visibleFormHandler={props.visibleFormHandler}/>
        </form>
    );
};

export default ExpenseForm;