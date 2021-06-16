import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary () {
  return (
    <Container>
      <div>
        <header>
          <title>Incomes</title>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
      <div>
        <header>
          <title>Outcomes</title>
          <img src={outcomeImg} alt="Outcomes" />
        </header>
        <strong>-R$ 400,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <title>Total</title>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 100,00</strong>
      </div>
    </Container>
  )
}