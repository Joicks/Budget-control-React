import { VictoryPie, VictoryLabel } from "victory";
import { UseGlobalState } from "../context/GlobalState";

function ExpenseChart() {

  const { transactions } = UseGlobalState();

  const totalIncome = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)

  const totalExpenses = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentage =  Math.round((totalExpenses / totalIncome) * 100);
  console.log(totalExpensesPercentage)

  const totalIncomePercentage = 100 - totalExpensesPercentage;
  console.log(totalIncomePercentage);

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Expenses", y: totalExpensesPercentage},
        { x: "Incomes", y: totalIncomePercentage },
      ]}
      animate={{
        duration: 200
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel
        angle={45}
        style={{
          fill: "white",
        }}
      />}
    />
  )
}

export default ExpenseChart