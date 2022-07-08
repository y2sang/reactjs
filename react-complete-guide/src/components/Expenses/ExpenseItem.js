import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {

    const expenseItem = props.title;
    const expenseAmount = props.amount;

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{expenseItem}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;