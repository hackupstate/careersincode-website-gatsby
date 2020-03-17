import React from "react"
import { Container, Jumbotron, Button, Row } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import content from "../content/content.json"
import jumbotronStyles from "./jumbotron.module.css"

const JumbotronComponent = props => {
  return (
    <div>
      <Jumbotron fluid justified className={jumbotronStyles.jumboContainer}>
        <Container>
          <Row className={jumbotronStyles.jumbotronHeadings}>
            <h2>{props.heading}</h2>
            <p>{content.ui.index_jumbotron.subHeading}</p>
          </Row>
          <Row className={jumbotronStyles.jumboButtonContainer}>
            <Button className={jumbotronStyles.jumboButtons} color="info">
              <a
                href={content.ui.index_jumbotron.button1.link}
                target="_blank"
                rel="noopener noreferrer"
                className={jumbotronStyles.btnLink}
              >
                {content.ui.index_jumbotron.button1.text}
              </a>
            </Button>
            <Button className={jumbotronStyles.jumboButtons} color="info">
              <a
                href="https://www.getdrip.com/forms/67102980/submissions/new"
                target="_blank"
                rel="noopener noreferrer"
                className={jumbotronStyles.btnLink}
              >
                {content.ui.index_jumbotron.button2.text}
              </a>
            </Button>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default JumbotronComponent
