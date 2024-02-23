import s from './Footer.module.css'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className={s.footer}>
      <Container className={s.container}>
        <div>блок 1</div>
        <div>блок 2</div>
      </Container>
    </div>
  )
}

export default Footer