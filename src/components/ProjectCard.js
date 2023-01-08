import { isVisible } from "@testing-library/user-event/dist/utils"
import { Col } from "react-bootstrap"
import TrackVisibility from "react-on-screen"

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <TrackVisibility>
      {({ isVisible }) => (
      <div className={isVisible ? "proj-imgbx show-mobile" : "proj-imgbx"}>
        <a id="proj-url" href={url} target="_blank" rel="noreferrer" className={url === "" ? "disablelink" : ""}>
          <img src={imgUrl} alt="project" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
      )}
      </TrackVisibility>
    </Col>
  )
}
