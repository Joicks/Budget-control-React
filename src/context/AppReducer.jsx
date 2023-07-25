export default (state, action) => {
  switch(action.type){
    case "ADD_TRANSACTION":
        return {
          ...state,
          transactions: [...state.transactions, action.payload]
        };
        case "DELETED_TRANSACTION":
          return {
            ...state,
            transactions: state.transactions.filter(
              (transaction) => transaction.id !== action.payload
            ),
          };
        case "EGRESO":
          return {
            ...state,
            transactions: [...state.transactions, action.payload]
          }
      default:
        return state
  }
}