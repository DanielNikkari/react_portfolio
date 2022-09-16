import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Container, Row, Col } from "react-bootstrap"
import stakeholderMappingIcon from "../assets/img/icons/stakeholder-mapping.png"
import stakeholderManagementIcon from "../assets/img/icons/stakeholder-management.png"
import javascriptIcon from "../assets/img/icons/JavaScript-icon2.png"
import reactIcon from "../assets/img/icons/react-icon2.png"
import htmlCssIcon from "../assets/img/icons/html-css-icon2.png"
import sqlIcon from "../assets/img/icons/sql-icon.png"
import cppIcon from "../assets/img/icons/Cpp-icon2.png"
import pythonIcon from "../assets/img/icons/Python-icon2.png"
import googleIcon from "../assets/img/icons/google-icon2.png"
import microsoftIcon from "../assets/img/icons/microsoft-icon2.png"
import bgColor from "../assets/img/background/bg-color1.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
  }

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                Here are some of the skills I have collected through studying,
                work and hobbies.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <img src={stakeholderManagementIcon} alt="image" />
                  <h5>Stakeholder Management</h5>
                </div>
                <div className="item">
                  <img src={stakeholderMappingIcon} alt="image" />
                  <h5>Stakeholder Mapping</h5>
                </div>
                <div className="item">
                  <img src={javascriptIcon} alt="image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={reactIcon} alt="image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={htmlCssIcon} alt="image" />
                  <h5>HTML / CSS</h5>
                </div>
                <div className="item">
                  <img src={sqlIcon} alt="image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={cppIcon} alt="image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={pythonIcon} alt="image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={googleIcon} alt="image" />
                  <h5>Google Workspace</h5>
                </div>
                <div className="item">
                  <img src={microsoftIcon} alt="image" />
                  <h5>Microsoft 365</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-L" src={bgColor} />
    </section>
  )
}
