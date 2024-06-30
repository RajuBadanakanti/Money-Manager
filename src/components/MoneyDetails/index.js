// Write your code here
// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="ammounts-container">
      <div className="your-blc-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="balance-img"
          alt="balance"
        />

        <div className="text-div">
          <p className="ammount-type-text">Your Balance</p>
          <p className="ammount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>

      <div className="your-income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="balance-img"
          alt="income"
        />

        <div className="text-div">
          <p className="ammount-type-text">Your Income</p>
          <p className="ammount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>

      <div className="your-expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="balance-img"
          alt="expenses"
        />

        <div className="text-div">
          <p className="ammount-type-text">Your Expenses</p>
          <p className="ammount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
