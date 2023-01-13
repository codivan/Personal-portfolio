import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/WeatherApp.png";
import projImg2 from "../assets/img/RickandMortyApp.jpeg";
import projImg3 from "../assets/img/pokedexApi.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather App",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Rick and Morty App",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Pokedex App",
      description: "Design & Development",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
               <p>Practicing web development projects with code bridges the gap between theoretical knowledge and practical application, and the best way to grasp web development concepts is by working on real-world projects. Web development projects for final year students or fresh graduates and API project ideas for beginners help them test their theoretical knowledge and enhance their practical skills.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>If you are also interested in web development, the best way to upskill in this field is to work on web development projects. The more you practice and experiment with challenging web development projects, the better will be your real-world development skills. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>If you are also interested in web development, the best way to upskill in this field is to work on web development projects. The more you practice and experiment with challenging web development projects, the better will be your real-world development skills. </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
