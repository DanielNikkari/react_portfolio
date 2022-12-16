import { Row } from "react-bootstrap"

export const Study = ({ name, programme, place, time, major, minor }) => {
  return (
    <Row>
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
    </Row>
  )
}
