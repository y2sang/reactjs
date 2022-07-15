import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./NewExpense/ExpenseFilter";
import {useState} from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedYear={filteredYear} onExpenseFilter={filterChangeHandler}/>
                {props.items.map(expense => { return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> })}

            </Card>
        </div>

    );
}

export default Expenses;