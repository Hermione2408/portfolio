import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../../assets/imgs/nav-icon1 (1).svg";
import navIcon2 from "../../assets/imgs/github-svgrepo-com.svg";
import navIcon3 from "../../assets/imgs/icons8-twitter.svg";
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="d-flex justify-content-end align-items-center">
        <div>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon d-flex mt-5">
              <a
                href="https://www.linkedin.com/in/hermione-dadheech/"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Hermione2408" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://twitter.com/HermioneDadhee1" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </div>
      </Container>
    </footer>
  );
};
