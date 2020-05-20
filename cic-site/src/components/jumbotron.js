import React from "react"
import { Container, Jumbotron, Row } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import jumbotronStyles from "./jumbotron.module.css"

const JumbotronComponent = props => (
  <div>
    <Jumbotron fluid justified className={jumbotronStyles.jumboContainer}>
      <Container>
        <Row className={jumbotronStyles.jumbotronHeadings}>
          <h2>{props.heading}</h2>
          <p>{props.subheading}</p>
        </Row>
        <Row className={jumbotronStyles.jumboButtonContainer}>
          {props.children}
        </Row>
      </Container>
    </Jumbotron>
  </div>
)

export default JumbotronComponent
