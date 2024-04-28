import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/imgs/Profile.png";
import "./banner.css";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0); //index to display
  const [isDeleting, setIsDeleting] = useState(false); //leading State
  const toRotate = ["Frontend Innovator","Open Source Contributor", "Learner", "Tech Enthusiast"];
  const [text, setText] = useState(""); //portion that is displayed;
  const [delta, setDelta] = useState(100 - Math.random() * 100);
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
      setDelta(100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
       
        <Row className="align-items-center ">
        {/* <div className="stars "></div> */}
        {/* <div className="twinkling"></div> */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn flex flex-col items-center" : ""
                  }
                >
                  {/* <span className="tagline">Welcome to my portfolio</span> */}
                  <h1 className="text-5.5xl font-serif font-extrabold  mb-4 ">{`Hi I'm  `}
                  <span className="text-5.5xl font-serif font-extrabold mb-4 bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent"> Hermione </span>
                  </h1>
                  <div style={{height: '5vh'}}>
                  <h3 className="wrap text-2xl p-2 font-sans font-semibold ">{text} </h3>
                  </div>
                  {/* <div className="text-center"> */}
                  {/* <p className="text-gray-600 mt-6 p-6 text-2xl font-sans ">
                    I enjoy solving complex problems and creating efficient,
                    scalable code that delivers a great user experience. Whether
                    you need a dynamic web application, a responsive website, or
                    a robust API, I can help bring your vision to life.
                  </p> */}
                  {/* </div> */}
                  <p className="text-gray-600 pt-4 text-xl font-sans btn-shine">Crafting digital spells to enchant user experiences</p>
                  {/* <div class="glow-btn">Shine</div> */}
                  <button
                  className="glow-btn mt-14 text-xl font-sans"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1dQQ2AY8n0Vz15oCY8V5jiXl04eYI8hbw/view?usp=sharing"
                      )
                    }
                  >
                    Checkout My Resume 
                  </button>{" "}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col className="img-container" md={6} xl={5}>
          <div class="ring">
   <i style={{ '--clr': '#00aeff' }}></i>
    <i style={{ '--clr': '#c4e4ff' }}></i>
    <i style={{ '--clr': '#fffd44' }}></i>
    <img
              src={headerImg}
              style={{ width: "20vw", height: "40vh" }}
              alt="Header Img"
            />
              </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};
