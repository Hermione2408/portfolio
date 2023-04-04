import { Container, Row, Col } from "react-bootstrap";
import { Robot } from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/imgs/color-sharp.png";
import icon1 from "../assets/imgs/icons8-source-code-64.png";
import icon2 from "../assets/imgs/icons8-illustrator-50.png";
import icon3 from "../assets/imgs/icons8-test-50.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                As a pre-final year student with a keen interest in full-stack
                development and design, I have experience working with a range
                of technologies and tools. Here are some of my key skills:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <div className="circular-border">
                    <img
                      style={{ width: "72px", height: "72px" }}
                      src={icon1}
                      alt="Image"
                    />
                  </div>
                  <h5>Web Development</h5>
                  <p>
                    I have experience building responsive and user-friendly web
                    applications using HTML, CSS, JavaScript, and React.js.
                  </p>
                </div>
                <div className="item">
                  <div className="circular-border">
                    <img
                      style={{ width: "72px", height: "72px" }}
                      src={icon2}
                      alt="Image"
                    />
                  </div>
                  <h5>User Experience Design</h5>
                  <p>
                    I have completed the Foundation of User Experience Design
                    course by Google, where I learned how to create
                    user-centered designs and prototypes.
                  </p>
                </div>
                <div className="item">
                  <div className="circular-border">
                    <img
                      style={{ width: "72px", height: "72px" }}
                      src={icon3}
                      alt="Image"
                    />
                  </div>
                  <h5>Testing</h5>
                  <p>
                    I have experience with unit testing, end-to-end testing, and
                    performance testing using Cypress and JMeter to ensure that
                    my applications are reliable and performant.
                  </p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
