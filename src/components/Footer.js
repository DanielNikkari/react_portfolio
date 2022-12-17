import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo-planet.png"
import { SocialIcon } from "react-social-icons"
import "animate.css"
import TrackVisibility from "react-on-screen"
import goodbyeMessage from "../assets/img/goodbye-message.png"
import lilAstronaut from "../assets/img/lil-astronaut-footer-xmas.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__animated animate__fadeInDown"
                  : "animate__animated animate__fadeOutUp"
              }
            >
              <div className="footer-goodbye-img">
                <img
                  src={lilAstronaut}
                  alt="goodbye"
                  className="goodbye-astronaut"
                />
                <img
                  src={goodbyeMessage}
                  alt="goodbye message"
                  className="goodbye-message"
                />
              </div>
            </div>
          )}
        </TrackVisibility>
        <Row className="align-item-center">
          <Col sm={6}>
            <img className="footer-logo" src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <SocialIcon
                className="socialicon"
                url="https://www.linkedin.com/in/daniel-nikkari-9a67b9178/"
              />
              <SocialIcon
                className="socialicon"
                url="https://github.com/DanielNikkari"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
