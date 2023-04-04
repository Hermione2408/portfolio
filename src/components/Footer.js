import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from '../assets/imgs/nav-icon1 (1).svg'
import navIcon2 from '../assets/imgs/github-svgrepo-com.svg'
import navIcon3 from '../assets/imgs/icons8-twitter.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="d-flex align-items-end">
        <Row >
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href='https://www.linkedin.com/in/hermione-dadheech/' target="_blank"><img src={navIcon1} alt=""/></a>
                                <a href='https://github.com/Hermione2408' target="_blank"><img src={navIcon2} alt=""/></a>
                <a href='https://twitter.com/HermioneDadhee1' target="_blank"><img src={navIcon3} alt=""/></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}