import { useState } from "react";
import "./App.css";
import Addexpense from "./components/js/AddExpense";
import ExpenseDetail from "./components/js/expenseDetail";
import ExpenseFilter from "./components/js/expenseFilter";
import Alert from "@mui/material/Alert";
import ExpenseChart from "./components/js/expenseChart";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const [Year, setYear] = useState("All");

  const addExpenseHandle = (expense) => {
    // return setExpenses([expense, ...expenses])
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const filterYear = (year) => {
    setYear(year);
    console.log(Year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    // return expense.date.getFullYear() === parseInt(Year);
    if (Year === "All") {
      return expense;
    } else {
      return expense.date.getFullYear() === parseInt(Year);
    }
  });

  let expenseContent = (
    <Alert
      sx={{ width: "50%", justifyContent: "center", m: 1, mx: "auto" }}
      variant="outlined"
      severity="info"
    >
      No Expense Found — check it out!
    </Alert>
  );
  let expChart = null;

  if (filteredExpenses.length > 0) {
    expChart = <ExpenseChart expenses={filteredExpenses} />;
  }
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((item) => (
      <div key={item.id}>
        <ExpenseDetail
          Title={item.title}
          Amount={item.amount}
          Date={item.date}
        />
      </div>
    ));
  }

  return (
    <div>
      <Addexpense onAddExpense={addExpenseHandle} />
      <ExpenseFilter onSelectYear={filterYear} year={Year} />
      {expChart}

      {/* <ExpenseChart expenses={filteredExpenses} /> */}

      {expenseContent}
    </div>
  );
}

export default App;
