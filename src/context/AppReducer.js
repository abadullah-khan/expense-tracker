export default (state, action) => {
  switch (action.type) {
    case "SET_FORM_DATA":
      const { name, value } = action.payload;
      return {
        ...state,
        formData: { ...state.formData, [name]: value },
      };
    case "ADD_TRANSACTION":
      const {
        toggleAddTransaction,
        transactions,
        formData,
        editTransactionId,
      } = state;
      if (toggleAddTransaction) {
        return {
          ...state,
          transactions: [
            ...transactions,
            { ...formData, id: Math.random() * 10000 },
          ],
          formData: {},
        };
      } else {
        return {
          ...state,
          transactions: transactions.map((transaction) => {
            if (transaction.id === editTransactionId) {
              return {
                ...transaction,
                transaction_type: formData.transaction_type,
                title: formData.title,
                amount: formData.amount,
              };
            }
            return transaction;
          }),
          formData: {},
          toggleAddTransaction: true,
        };
      }
    case "REMOVE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "EDIT_TRANSACTION":
      const editItem = state.transactions.find(
        (transaction) => transaction.id === action.payload
      );
      const { transaction_type, title, amount } = editItem;
      return {
        ...state,
        toggleAddTransaction: false,
        editTransactionId: action.payload,
        formData: {
          transaction_type,
          title,
          amount,
        },
      };
    default:
      return state;
  }
};
