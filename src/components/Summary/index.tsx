import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions()

  // const totalDeposits = transactions.reduce((accumulator, transaction) => {
  //   if( transaction.type === 'deposit') {
  //     return accumulator + transaction.amount;
  //   }
  //   return accumulator;
  // }, 0);

  const summary = transactions.reduce((acc, transaction) => {
    switch (transaction.type) {
      case 'deposit':
        acc.deposits += transaction.amount;
        break;
      case 'withdraw':
        acc.withdraws += transaction.amount;
    }

    acc.total = acc.deposits - acc.withdraws;

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>

      {/* <TransactionContext.Consumer>
          {(data) => {
            console.log(data)

            return <p>ok</p>
          }}
        </TransactionContext.Consumer> */}

      <div>
        <header>
          <title>Incomes</title>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.deposits)
          }
        </strong>
      </div>
      <div>
        <header>
          <title>Outcomes</title>
          <img src={outcomeImg} alt="Outcomes" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraws)
          }
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <title>Total</title>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.total)
          }
        </strong>
      </div>
    </Container>
  )
}