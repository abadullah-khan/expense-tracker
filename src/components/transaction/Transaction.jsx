import React from "react";

import "./transaction.scss";

const Transaction = ({ data, index }) => {
  return (
    <div className="card">
      <span className="index">
        {index + 1}.<span className="title">{data.title}</span>
      </span>
      <span className="amount">
        {data.transaction_type === "expense" ? "-" : "+"}${data.amount}
      </span>
    </div>
  );
};

export default Transaction;
