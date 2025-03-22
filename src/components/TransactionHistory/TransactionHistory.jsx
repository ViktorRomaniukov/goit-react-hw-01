import React from 'react'
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
  return (
    <div>
      <table className={styles.transactionTable}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => (
      <tr key={id}>
        <td className={styles.type}>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  )
}

export default TransactionHistory
