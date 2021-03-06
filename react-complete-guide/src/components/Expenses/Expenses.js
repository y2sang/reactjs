import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./NewExpense/ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredData = selectedYear => props.items.filter(expense => expense.date.getFullYear().toString() === selectedYear);

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedYear={filteredYear} onExpenseFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredData(filteredYear)}/>
                <ExpensesList expensesList={filteredData(filteredYear)}/>
            </Card>
        </div>

    );
}

export default Expenses;