import { useState, useEffect } from "react";
import "animate.css";
import { Contact } from "./Contact";
import TrackVisibility from "react-on-screen";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/imgs/the_starry_night-wallpaper-1920x1080-modified.png";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0); //index to display
  const [isDeleting, setIsDeleting] = useState(false); //leading State
  const toRotate = ["Web Developer", "Learner", "UI/UX Designer"];
  const [text, setText] = useState(""); //portion that is displayed;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000; //time period after each word
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1>{`Hi I'm Hermione `}</h1>
                  <h3 className="wrap">{text} </h3>
                  <p>
                    I enjoy solving complex problems and creating efficient,
                    scalable code that delivers a great user experience. Whether
                    you need a dynamic web application, a responsive website, or
                    a robust API, I can help bring your vision to life. Let's
                    build something amazing together!
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1VfYEa8FDFMZOavIxSuykv0NMDIZ7OoGP/view?usp=sharing"
                      )
                    }
                  >
                    My Resume <ArrowRightCircle size={25} />
                  </button>{" "}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col className="img-container" md={6} xl={5}>
            <img
              src={headerImg}
              style={{ width: "35vw", height: "70vh" }}
              alt="Header Img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
