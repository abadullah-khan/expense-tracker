import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import "./form.scss";

const Form = () => {
  const { formData, setFormData, dispatch } = useContext(GlobalContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TRANSACTION",
      payload: { ...formData, id: Math.random() * 10000 },
    });
    setFormData({});
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
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
