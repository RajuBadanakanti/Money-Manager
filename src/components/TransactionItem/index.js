// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteBtn} = props
  const {id, titleValue, ammountValue, type} = transactionDetails

  const onClickDeleteBtn = () => {
    onDeleteBtn(id)
  }

  return (
    <li className="list-container">
      <p className="added-trans-text">{titleValue}</p>
      <p className="added-trans-text">{ammountValue}</p>
      <p className="added-trans-text">{type}</p>
      <button
        type="button"
        className="del-btn"
        onClick={onClickDeleteBtn}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default TransactionItem
