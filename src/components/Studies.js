import { Col, Container, Row } from "react-bootstrap"
import { Study } from "./Study"
import bgColor from "../assets/img/background/bg-color1.png"

export const Studies = () => {
  const studies = [
    {
      name: "Aalto University",
      programme:
        "Masters Programme in Computer, Communication and Information Sciences",
      place: "Espoo",
      time: "2022 - present",
      major: "Major: Human-Computer Interaction",
      minor: "Minor: Computer Science",
    },
    {
      name: "Aalto University",
      programme: "Bachelor of Electrical Engineering",
      place: "Espoo",
      time: "2018 - 2021",
      major: "Major: Information technology",
      minor: "Minor: Industrial engineering",
    },
    {
      name: "Lappeenrannan Lyseon lukio",
      programme: "Finnish Matriculation Examination",
      place: "Lappeenranta",
      time: "2014 - 2017",
      major: "",
      minor: "",
    },
  ]
  return (
    <section className="studies" id="studies">
      <Container>
        <h2>Studies</h2>
        <Row>
          <Col>
            {studies.map((study, index) => {
              return (
                <Study
                  key={index}
                  name={study.name}
                  programme={study.programme}
                  place={study.place}
                  time={study.time}
                  major={study.major}
                  minor={study.minor}
                />
              )
            })}
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-L-studies"
        src={bgColor}
        alt="background color"
      />
    </section>
  )
}
