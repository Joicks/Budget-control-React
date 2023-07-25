import { UseGlobalState } from '../../context/GlobalState'
import TransactionItem from '../TransactionItem'

export default function TransactionList() {

  const { transactions } = UseGlobalState()

  return (
    <>
      <h3 className='text-slate-300 text-xl font-bold block w-full'>History</h3>
      <ul >
      {transactions.map(transaction => (
        <TransactionItem transaction={transaction} key={transaction.id} />
      ))}
      </ul>
    </>
  )
}
