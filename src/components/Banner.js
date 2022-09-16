import { useState, userEffect, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/small-astronaut.gif"
import welcomeImg from "../assets/img/welcome-message-6.png"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setisDeleting] = useState(false)
  const toRotate = ["a Master's Student"]
  const [text, setText] = useState("")
  const period = 2000
  const [delta, setDelta] = useState(300 - Math.random() * 100)

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.8)
    }

    if (!isDeleting && updatedText === fullText) {
      setisDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === "") {
      setisDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              {`Hi I'm Daniel, `}
              <span
                className="txt-rotate"
                dataperiod="1000"
                data-rotate='[ "a Masters Student" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              I am a Master's student at Aalto University. I study the programme
              in Computer, Communication and Information Sciences and my major
              is Human-Computer Interaction (HCI) and minor is Computer Science
              (SC).
            </p>
            <div className="arrow-link">
              <a href="https://www.linkedin.com/in/daniel-nikkari-9a67b9178/">
                Linkedin <ArrowRightCircle size={25} />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={welcomeImg}
              alt="welcome message"
              className="welcomemessage"
            />
            <img src={headerImg} alt="header" className="astronaut" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
