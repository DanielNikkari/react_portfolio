import { Navbar, Container, Nav } from "react-bootstrap"
import { useEffect, useState } from "react"
import logo from "../assets/img/logo-planet.svg"
import { SocialIcon } from "react-social-icons"
import "animate.css"

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setSecrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setSecrolled(true)
      } else {
        setSecrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (val) => {
    setActiveLink(val)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <div className="animate__animated animate__slideInDown">
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "Skills" ? "active-navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "Projects"
                    ? "active-navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#studies"
                className={
                  activeLink === "Studies"
                    ? "active-navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("studies")}
              >
                Studies
              </Nav.Link>
              <Nav.Link
                href="#work"
                className={
                  activeLink === "Work" ? "active-navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("work")}
              >
                Work
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
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
            </span>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}
