import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export const About = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Hi, I'm Hermione Dadheech, a pre-final year student at Government Engineering College, Ajmer. I have a keen interest in full-stack development and design, and I'm always learning from the things coming my way. I'm passionate about creating user-friendly and efficient software solutions that solve real-world problems.
              </Card.Text>
              <Card.Text>
                In my free time, I enjoy listening to music, dancing, and exploring my creative side through arts and painting.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>
                <strong>Bachelor in Technology</strong> - Government Engineering College, Ajmer
                <br />
                <em>08/2020 - Present</em>
                <br />
                <em>8.9/10</em>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Skills</Card.Title>
              <ListGroup>
                <ListGroupItem>Javascript</ListGroupItem>
                <ListGroupItem>React.js</ListGroupItem>
                <ListGroupItem>HTML</ListGroupItem>
                <ListGroupItem>CSS</ListGroupItem>
                <ListGroupItem>Bootstrap</ListGroupItem>
                <ListGroupItem>Typescript</ListGroupItem>
                <ListGroupItem>MongoDB</ListGroupItem>
                <ListGroupItem>Cypress</ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

