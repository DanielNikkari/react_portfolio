import { useState, userEffect, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/lil-astronaut3.gif"
import welcomeImg from "../assets/img/welcome-message-6.png"
import bannerVid from "../assets/vid/banner-video2.mp4"

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

  document.addEventListener("click touchstart", () => {
    const videoElement = document.getElementById("banner-vid")
    if (videoElement.playing) {
      // video is already playing so do nothing
    } else {
      // video is not playing
      // so play video now
      videoElement.play()
    }
  })

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
              (CS).
            </p>
            <div className="arrow-link">
              <a href="https://www.linkedin.com/in/daniel-nikkari-9a67b9178/">
                Linkedin <ArrowRightCircle size={25} />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="banner-images">
              <img
                src={welcomeImg}
                alt="welcome message"
                className="welcomemessage"
              />
              <img src={headerImg} alt="header" className="astronaut" />
            </div>
          </Col>
        </Row>
      </Container>
      <video
        type="video/mp4"
        autoPlay="autoPlay"
        muted="muted"
        loop="loop"
        playsinline="playsinline"
        id="banner-vid"
        src={bannerVid}
      />
    </section>
  )
}
