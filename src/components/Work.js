import { Col, Row } from "react-bootstrap"
import Card from "react-bootstrap/Card"

export const Work = ({ name, time, title, place, logo }) => {
  return (
    <Col className="work-cards" md={3} ms={2}>
      <Card className="work-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text className="card-text">
            {time}
            <br />
            {place}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
