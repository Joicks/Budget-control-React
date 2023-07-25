import { UseGlobalState } from "../context/GlobalState";

function TransactionItem({transaction}) {
  const { deletedTransaction } = UseGlobalState()

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
    <p className="text-sm ">{transaction.description}</p>
   <div>
   <span> ${transaction.amount}</span>
    <button className="bg-red-700 text-white px-1 py-1 rounded-lg block mb-1 w-full "
    onClick={(id) => {
      deletedTransaction(transaction.id);
    }}
    >
      x
    </button>
   </div>
  </li>
  )
}

export default TransactionItem