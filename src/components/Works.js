import { Col, Container, Row } from "react-bootstrap"
import { Work } from "./Work"
import nesteLogo from "../assets/img/works/neste.png"
import schneiderLogo from "../assets/img/works/schneider.png"
import aaltoLogo from "../assets/img/works/Aalto.png"
import slushLogo from "../assets/img/works/slush.png"
import "animate.css"
import TrackVisibility from "react-on-screen"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export const Works = () => {
  const works = [
    {
      name: "Neste",
      time: "Sep 2022 - present",
      title: "IT Junior Specialist",
      place: "Espoo",
      logo: nesteLogo,
    },
    {
      name: "Neste",
      time: "May 2022 - Aug 2022",
      title: "IT Delivery Trainee",
      place: "Espoo",
      logo: nesteLogo,
    },
    {
      name: "Aalto University",
      time: "Feb 2022 - May 2022",
      title: "Teaching Assistant",
      place: "Espoo",
      logo: aaltoLogo,
    },
    {
      name: "Schneider Electric",
      time: "May 2021 - Aug 2021",
      title: "Digital Customer Experience Trainee",
      place: "Espoo",
      logo: schneiderLogo,
    },
    {
      name: "Slush",
      time: "Oct 2021 - Dec 2021",
      title: "Info Team Volunteer",
      place: "Espoo",
      logo: slushLogo,
    },
  ]
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
    <section className="work" id="work">
      <Container className="container">
        <div className="work-container">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__bounce" : ""}
              >
                <h2>Work</h2>
              </div>
            )}
          </TrackVisibility>
          <p>Here's my most recent work experience.</p>
          <Col>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="works-slider"
            >
              {works.map((work) => {
                return (
                  <div className="item">
                    <div className="img-container">
                      <img src={work.logo} alt={"work logo"} />'
                    </div>
                    <h5>{work.name}</h5>
                    <p>
                      <span className="work-time">{work.title}</span>
                      <br />
                      {work.time}
                      <br />
                      {work.place}
                    </p>
                  </div>
                )
              })}
            </Carousel>
          </Col>
        </div>

        {/* <Row md={3}>
          {works.map((work, index) => {
            return (
              <Work
                key={index}
                name={work.name}
                time={work.time}
                title={work.title}
                place={work.place}
                logo={work.logo}
              />
            )
          })}
        </Row> */}
      </Container>
    </section>
  )
}
