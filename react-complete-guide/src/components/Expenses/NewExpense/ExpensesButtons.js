import React from 'react';

function ExpensesButtons(props) {
    // const [visibleForm, setVisibleForm] = useState("hidden");
    const onClickCancel = (e) => {
        e.preventDefault();
        props.visibleFormHandler(false);
        console.log(props);
    }
    return (
        <div className="new-expense__actions">
            <button type="button" onClick={onClickCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    );
}

export default ExpensesButtons;