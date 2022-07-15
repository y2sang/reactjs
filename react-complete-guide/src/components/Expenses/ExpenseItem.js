import React from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
    const [title, setTitle] = React.useState(props.title);

    const expenseItem = title;
    const expenseAmount = props.amount;
    const clickHandler = () => {
        setTitle('Updated');
        console.log("Clicked!!");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{expenseItem}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;