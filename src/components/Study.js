import { Row } from "react-bootstrap"
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Study = ({ name, programme, place, time, major, minor }) => {
  return (
    <Row>
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible
                ? "animate__animated animate__fadeInLeft"
                : "animate__animated animate__fadeOutRight"
            }
          >
            <div className="study">
              <h4>
                {name}
                <br />
                <span className="programme">{programme}</span>
              </h4>
              <h5>{place}</h5>
              <p>
                {time}
                <br />
                {major}
                <br />
                {minor}
              </p>
            </div>
          </div>
        )}
      </TrackVisibility>
    </Row>
  )
}
