import React, { useContext, useState } from "react";

import "./transaction.scss";
import { GlobalContext } from "../../context/GlobalState";

const Transaction = ({ data, index }) => {
  const { dispatch } = useContext(GlobalContext);
  const [toggleButton, setToggleButton] = useState(false);
  return (
    <>
      <div className={`card `} onClick={() => setToggleButton(!toggleButton)}>
        <span className="index">
          {index + 1}.<span className="title">{data.title}</span>
        </span>
        <span className="amount">
          {data.transaction_type === "expense" ? "-" : "+"}${data.amount}
        </span>
        <span></span>
      </div>
      <div
        className={`
        button_container
   ${toggleButton ? " reveal_button" : ""}
        `}
      >
        <button
          className="edit_button"
          title="Edit item"
          onClick={() =>
            dispatch({ type: "EDIT_TRANSACTION", payload: data.id })
          }
        >
          Edit
        </button>
        <button
          className="remove_button"
          title="Remove item"
          onClick={() =>
            dispatch({ type: "REMOVE_TRANSACTION", payload: data.id })
          }
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default Transaction;
