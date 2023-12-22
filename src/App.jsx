import { useContext } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import { GlobalContext } from "./context/GlobalState";
import Form from "./components/form/Form";
import Transaction from "./components/transaction/Transaction";

function App() {
  const { transactions } = useContext(GlobalContext);

  const income = transactions.reduce((acc, curr) => {
    if (curr.transaction_type === "income") {
      return (acc += Number(curr.amount));
    }
    return acc;
  }, 0);

  const expense = transactions.reduce((acc, curr) => {
    if (curr.transaction_type === "expense") {
      return (acc += Number(curr.amount));
    }
    return acc;
  }, 0);
  return (
    <>
      <div className="app">
        <Header />
        <div className="balance_container">
          Your Balance <h2>${income - expense}</h2>
        </div>
        <div className="total_container">
          <div
            className="income_expense_container"
            style={{ backgroundColor: "green" }}
          >
            <span>${income}</span>
            Income
          </div>
          <div
            className="income_expense_container"
            style={{ backgroundColor: "red" }}
          >
            <span>${expense}</span>
            Expense
          </div>
        </div>
        <div className="transaction_container">
          {transactions?.map((transaction, index) => (
            <Transaction
              data={transaction}
              index={index}
              key={transaction.id}
            />
          ))}
        </div>
        <Form />
      </div>
    </>
  );
}

export default App;
