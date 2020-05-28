import React from "react";
import { Container, Jumbotron, Row } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css"

import jumboStyles from "./jumbotron.module.css";

const JumbotronComponent = (props) => (
  <div>
    <Jumbotron fluid justified className={jumboStyles.jumboContainer}>
      <Container>
        <Row className={jumboStyles.jumbotronHeadings}>
          <h2>{props.heading}</h2>
          <p>{props.subheading}</p>
        </Row>
        <Row className={jumboStyles.jumboButtonContainer}>{props.children}</Row>
      </Container>
    </Jumbotron>
  </div>
);

export default JumbotronComponent;
