import { Container } from './styles';

export function TransactionsTable () {
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
           <td>Desenvolvimento de website</td>
           <td className="deposit">R$ 12.000,00</td>
           <td>Desenvolvimento</td>
           <td>20/10/2021</td>
         </tr>
         <tr>
           <td>Aluguel</td>
           <td className="withdraw">- R$ 1.000,00</td>
           <td>Casa</td>
           <td>20/10/2021</td>
         </tr>
       </tbody>
      </table>
    </Container>
  )
}