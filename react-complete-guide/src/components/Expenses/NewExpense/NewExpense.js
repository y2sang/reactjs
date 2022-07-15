import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    };
    const [visibleForm, setVisibleForm] = useState(false);
    const handlingForm = () => {
        setVisibleForm(!visibleForm);
    }

    return (
        <div className="new-expense">
            {!visibleForm ? <button onClick={handlingForm}>Add New Expense</button> : undefined}
            {visibleForm ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} visibleFormHandler={handlingForm}/> : undefined}
        </div>
    );
};

export default NewExpense;