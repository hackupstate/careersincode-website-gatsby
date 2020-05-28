import React from "react";
import { Button, Row } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css"
import jumbotronStyles from "./jumbotron.module.css";

const JumboButton = (props) => {
  return (
    <div>
      <Row className={jumbotronStyles.jumboButtonContainer}>
        <Button className={jumbotronStyles.jumboButtons} color="info">
          <a
            href={props.btnLink}
            target="_blank"
            rel="noopener noreferrer"
            className={jumbotronStyles.btnLink}
          >
            {props.btnText}
          </a>
        </Button>
      </Row>
    </div>
  );
};

export default JumboButton;
