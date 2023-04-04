import { Col } from "react-bootstrap";
import "./projectCard.css";
import TechStack from "../TechStack";
export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubLink,
  techStack,
}) => {
  return (
    <Col sm={6} md={4}>
      <a href={githubLink} target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} style={{ width: 519, height: 380 }} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <TechStack data={techStack} />
          </div>
        </div>
      </a>
    </Col>
  );
};
