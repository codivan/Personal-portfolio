import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />

          <Col size={12} sm={6} className="text-center ">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ivan-campos-sosa/"  target="_blank"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/codivan" target="_blank"><img src={navIcon2} alt="facebook" /></a>

            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
