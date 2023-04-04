import { useState } from "react";
import { Container, Placeholder, Col, Row } from "react-bootstrap";
import contactImg from "../../assets/imgs/contact-img.svg";
import "./contact.css";
export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const clickOnSend = () => {
    if (!isButtonDisabled) {
      window.open(
        `mailto:hermionedadheech@gmail.com?subject=Feedback from ${
          formDetails.firstName
        } ${formDetails.lastName}&body=${
          encodeURIComponent(formDetails.message) || ""
        }`
      );
    }
  };
  const isButtonDisabled =
    !formDetails.firstName ||
    !formDetails.lastName ||
    !formDetails.email ||
    !formDetails.phone ||
    !formDetails.message;
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="contact-image">
            <img src={contactImg} alt="Contact Us" width="100%" />
          </Col>
          <Col md={6} className="form-container">
            <h2>Get In Touch </h2>
            <form>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button
                    disabled={isButtonDisabled }
                    type="submit"
                    onClick={() => clickOnSend()}
                  >
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : " success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
