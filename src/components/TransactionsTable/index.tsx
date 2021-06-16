import { useEffect } from 'react';
import { Container } from './styles';

import { api } from '../../services/api';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])

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
            <td>Website development</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Development</td>
            <td>20/10/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- R$ 1.000,00</td>
            <td>Casa</td>
            <td>20/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}