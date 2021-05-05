import React from 'react';
import { Container } from './styles';

export function TransactionsTable(): JSX.Element {
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
          <tr>
            <td>Freelancer website</td>
            <td className="withdraw">- R$12.000</td>
            <td>Freelancer</td>
            <td>05/05/2021</td>
          </tr>
          <tr>
            <td>Freelancer website</td>
            <td className="deposit">R$12.000</td>
            <td>Freelancer</td>
            <td>05/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
