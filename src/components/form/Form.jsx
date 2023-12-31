import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import "./form.scss";

const Form = () => {
  const {
    state: { formData, toggleAddTransaction },
    dispatch,
  } = useContext(GlobalContext);
  const handleInputChange = (event) => {
    dispatch({ type: "SET_FORM_DATA", payload: event.target });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TRANSACTION",
    });
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <span>Add new transaction</span>
      <div className="input_type_container">
        <span>
          <input
            type="radio"
            name="transaction_type"
            id="income"
            required
            value={"income"}
            checked={formData.transaction_type === "income"}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="income">Income</label>
        </span>
        <span>
          <input
            type="radio"
            name="transaction_type"
            id="expense"
            required
            value={"expense"}
            checked={formData.transaction_type === "expense"}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="expense">Expense</label>
        </span>
      </div>
      <div className="input_container">
        <input
          type="text"
          placeholder="Text"
          name="title"
          required
          value={formData.title || ""}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          required
          value={formData.amount || ""}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      {toggleAddTransaction ? (
        <button type="submit">Add</button>
      ) : (
        <button type="submit" className="save_button">
          Save
        </button>
      )}
    </form>
  );
};

export default Form;
