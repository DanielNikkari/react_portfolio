import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import bgImg2 from "../assets/img/background/bg-color2.png"
import bachelorsThesisIcon from "../assets/img/projects/bachelors-thesis-icon3.png"
import planeWarfareIcon from "../assets/img/projects/plane-warfare-icon4.png"
import platformerIcon from "../assets/img/projects/y2-icon3.png"
import towerDefenseIcon from "../assets/img/projects/tower-defense-icon3.png"
import quizzerIcon from "../assets/img/projects/quizzer-icon3.png"
import portfolioIcon from "../assets/img/projects/portfolio-project2.png"
import urlShortenerIcon from "../assets/img/projects/url-shortener-icon.png"
import treeHuggerIcon from "../assets/img/projects/treehugger3.png"
import mobileplayreplica from "../assets/img/projects/MobilePay-Replica.png"
import "animate.css"

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio, React",
      description:
        "This portfolio was created utilizing React",
      imgUrl: portfolioIcon,
      url: "https://github.com/DanielNikkari/react_portfolio",
    },
    {
      title: "TreeHugger, React, Node.js Express, and MongoDB",
      description: "Web application for manual data entry created as part of the course User Interface Construction. Front-end created on React and back-end on Node.js Express, and utilizing MongoDB as database.",
      imgUrl: treeHuggerIcon,
      url: "https://github.com/DanielNikkari/tree_app_group_12",
    },
    {
      title: "Qu?zzer, JavaScript Deno Oak",
      description:
        "Quiz web application created on the course Web Software Development. The application uses Deno and Oak and has a three-tier architecture: client, server and database. In addition, The application has four layers: views, controllers, services, database.",
      imgUrl: quizzerIcon,
      url: "https://github.com/DanielNikkari/WSD_Project2",
    },
    {
      title: "Url shortener: Deno Oak, Node Express.js, Python Flask",
      description:
        "Three clones of bit.ly url shortener made in three different frameworks: JavaScript Deno Oak, JavaScript Node Express.js, and Python Flask. Composed using Docker-compose. All applications use Postgres as the database. Both JavaScript applications use Eta templates and Python uses Jinja template for the rendering.",
      imgUrl: urlShortenerIcon,
      url: "https://github.com/DanielNikkari/bitly_clones",
    },
    {
      title: "Tower Defense, C++",
      description:
        "Tower Defense game made on C++. The game was made in 4 member team on the course Object oriented programming with C++.",
      imgUrl: towerDefenseIcon,
      url: "https://github.com/DanielNikkari/Tower-Defense",
    },
    {
      title: "Platformer, Python",
      description:
        "A small platformer game made part of the course Basic course in programmin Y2 to practice Object oriented coding and graphical UI.",
      imgUrl: platformerIcon,
      url: "https://github.com/DanielNikkari/Platformer_Y2-Daniel_Nikkari",
    },
    {
      title: "Plane Warfare, Swift",
      description:
        "A small iPhone space invaders type of a game made as a personal project.",
      imgUrl: planeWarfareIcon,
      url: "",
    },
  ]

  const thesises = [
    {
      title: "Bachelor's Thesis",
      description: "My Bachelor's Thesis with grade 5/5.",
      imgUrl: bachelorsThesisIcon,
      url: "https://drive.google.com/file/d/1sqpjIxKOax0htHNx2HcZTVqaIFcFQSnI/view?usp=sharing",
    },
  ]

  const other = [
    {
      title: "Figma replica of MobilePay",
      description: "The replica has log in, sending money, and requesting money features implemented",
      imgUrl: mobileplayreplica,
      url: "https://www.figma.com/proto/vwUeBe4O78J1ZZdnoYE73j/A5-MobilePay-Replica?page-id=0%3A1&node-id=1%3A2&viewport=216%2C338%2C0.19&scaling=scale-down&starting-point-node-id=94%3A435"
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Here are some of my projects I have done throughout my studies
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Coding projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Thesis</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Other</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          url={project.url}
                        />
                      )
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {thesises.map((thesis, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={thesis.title}
                          description={thesis.description}
                          imgUrl={thesis.imgUrl}
                          url={thesis.url}
                        />
                      )
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {other.map((other, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={other.title}
                          description={other.description}
                          imgUrl={other.imgUrl}
                          url={other.url}
                        />
                      )
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={bgImg2}
        alt="Background coloring"
      />
    </section>
  )
}
