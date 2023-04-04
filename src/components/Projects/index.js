import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCards";
import colorSharp2 from "../../assets/imgs/color-sharp2.png";
import projImg1 from "../../assets/imgs/Fotor_AI.png";
import projImg2 from "../../assets/imgs/ground-water-map.png";
import projImg3 from "../../assets/imgs/istockphoto-1149099517-640x640.jpg";
import OSSimg from "../../assets/imgs/opensource.jpeg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./projects.css";
export const Projects = () => {
  const projects = [
    {
      title: "Open source",
      githubLink: "https://github.com/keploy/typescript-sdk/pulls/Hermione2408",
      description:
        "As an enthusiastic and committed beginner contributor to the Keploy open source community, I have actively participated in the development and improvement of Keploy projects.",
      imgUrl: OSSimg,
    },
    {
      title: "Kavach",
      githubLink: "https://github.com/Hermione2408/kavach",
      description: `Allows users to report accidents easily and without hassle.
      Offers a bounty program for reporting violations of law.
      Assistance to users by identifying nearby facilities such as hospitals, police stations, and tow trucks.
      Integrated with emergency services for quick and efficient response in case of an accident.`,
      // imgUrl: kavachImg,
      imgUrl: projImg1,
    },
    {
      title: "Aqua",
      githubLink: "https://github.com/Hermione2408/Aqua",
      description: `Developed a web app for hydrogeological aquifer mapping and characteristics of water using React.js, D3.js.
      Worked on the data collection, visualization and future prediction.
      Had a Role based access control (RBAC) mechanism in the app for the data collectors, supervisors, administrators and commutators.`,
      // imgUrl: aquaImg,
      imgUrl: projImg2,
    },
    {
      title: "E-Conductor Bus System",
      githubLink: "",
      description: `Made a hardware plus software based model for E-conductor and continuous tracking of buses.
      Admin panel for tracking and updating buses.`,
      // imgUrl: eConductorImg,
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have completed several projects as a Frontend Developer.
                    Some of my recent projects are:
                  </p>
                  <br />

                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
