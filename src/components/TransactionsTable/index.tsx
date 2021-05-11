import React from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';

import closeImg from '../../assets/close.svg';

export function TransactionsTable(): JSX.Element {
  const { transactions, removeTransaction } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('en-GB', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('en-GB').format(
                  new Date(transaction.createdAt),
                )}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeTransaction(transaction)}
                >
                  <img src={closeImg} alt="Remove transaction" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
