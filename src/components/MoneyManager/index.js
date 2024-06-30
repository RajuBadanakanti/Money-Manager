// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionDetailsList: [],
    titleInput: '',
    ammountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmmountInput = event => {
    this.setState({ammountInput: event.target.value})
  }

  onChangeSelectOptionId = event => {
    this.setState({optionId: event.target.value})
    console.log(event.target.value)
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, ammountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption

    const newTransaction = {
      id: uuidv4(),
      titleValue: titleInput,
      ammountValue: parseInt(ammountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionDetailsList: [
        ...prevState.transactionDetailsList,
        newTransaction,
      ],
      titleInput: '',
      ammountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpenses = () => {
    const {transactionDetailsList} = this.state
    let expensesAmount = 0
    transactionDetailsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.ammountValue
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionDetailsList} = this.state
    let incomeAmount = 0
    transactionDetailsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.ammountValue
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionDetailsList} = this.state
    let balanceAmount = 0
    let expensesAmount = 0
    let incomeAmount = 0

    transactionDetailsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.ammountValue
      } else {
        expensesAmount += eachTransaction.ammountValue
      }
    })

    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  onDeleteBtn = id => {
    const {transactionDetailsList} = this.state
    const filteredTransData = transactionDetailsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    this.setState({transactionDetailsList: filteredTransData})
  }

  render() {
    const {transactionDetailsList} = this.state
    const {titleInput, ammountInput, optionId} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="app-bg-container">
        <div className="main-container">
          <div className="user-container">
            <h1 className="user-name">Hi, Richard</h1>
            <p className="description">
              Welcome back to your
              <span className="span-text"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />

          <div className="tables-container">
            <div className="add-transaction-container">
              <form className="form-container" onSubmit={this.onAddTransaction}>
                <h1 className="add-text">Add Transaction</h1>

                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  className="title-input"
                  onChange={this.onChangeTitleInput}
                  placeholder="TITLE"
                  value={titleInput}
                />

                <label htmlFor="amount" className="label">
                  AMOUNT
                </label>

                <input
                  type="text"
                  id="amount"
                  className="title-input"
                  onChange={this.onChangeAmmountInput}
                  placeholder="AMOUNT"
                  value={ammountInput}
                />

                <label htmlFor="select" className="label">
                  TYPE
                </label>

                <select
                  id="select"
                  className="select-input"
                  value={optionId}
                  onChange={this.onChangeSelectOptionId}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>

                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
            </div>

            <div className="transaction-history-container">
              <h1 className="add-text">History</h1>
              <div className="title-ammount-type-container">
                <ul className="ul-list-container">
                  <li className="li-list-container">
                    <p className="column1">Title</p>
                    <p className="column2">Amount</p>
                    <p className="column3">Type</p>
                  </li>

                  {transactionDetailsList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                      onDeleteBtn={this.onDeleteBtn}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
