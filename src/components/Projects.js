import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { projects } from '../components/ProjectCard'

export const Projects = () => {
  
  // Function to split projects into chunks of 3
  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  const projectChunks = chunkArray(projects, 3);

  return (
    <section className="projects">
      <Container>
        <div className="projects-section">
            <h2>Projects</h2>
            <p>
            Explore a collection of projects that demonstrate expertise in full-stack development and user-centric web applications. 
            Each project reflects a commitment to creating innovative, scalable, and efficient solutions tailored to real-world applications.
            </p>
        </div>
        

        <Tab.Container id="project-tabs" defaultActiveKey="tab-0">
          <Nav variant="pills" className="mb-3">
            {projectChunks.map((_, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={`tab-${index}`}>{index + 1}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Tab.Content>
            {projectChunks.map((chunk, index) => (
              <Tab.Pane eventKey={`tab-${index}`} key={index}>
                <Row>
                  {chunk.map((project, i) => (
                    <Col md={12} key={i} className="mb-4">
                      <Row className="align-items-center">
                        <Col md={4}>
                          <img
                            src={project.imgUrl}
                            alt={project.title}
                            className="img-fluid"
                          />
                        </Col>
                        <Col md={8}>
                        <div className="project-card">
                            <h5>Title: <span>{project.title}</span></h5>
                            <h5>
                                Deployment:{" "}
                                {project.deployment ? (
                                  <a href={project.deployment} target="_blank" rel="noopener noreferrer">
                                    <span>{project.deployment} ↗️</span>
                                  </a>
                                ) : (
                                  <span>No deployment available</span>
                                )}
                              </h5>
                            <h5>Description: <span>{project.description}</span></h5>
                        </div>
                        </Col>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};
