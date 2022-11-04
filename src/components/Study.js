import { Row } from "react-bootstrap"
import TrackVisibility from "react-on-screen"

export const Study = ({ name, programme, place, time, major, minor }) => {
  return (
    <Row>
      <div className="study">
      <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "scale_animation" : ""}
            >
        <h4>
          {name}
          <br />
          <span className="programme">{programme}</span>
        </h4>
        </div>
        )}
        </TrackVisibility>
        <h5>{place}</h5>
        <p>
          {time}
          <br />
          {major}
          <br />
          {minor}
        </p>
      </div>
    </Row>
  )
}
