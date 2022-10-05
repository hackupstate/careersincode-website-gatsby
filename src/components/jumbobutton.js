import React from "react";
import { Button, Row } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css"
import * as buttonStyles from "./jumbobutton.module.css";

const JumboButton = (props) => {
  return (
    <div>
      <Row>
      <a
            href={props.btnLink}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles.btnLink}
          >
        <Button className={buttonStyles.jumboButtons}>
            {props.btnText}
        </Button>
        </a>
      </Row>
    </div>
  );
};

export default JumboButton;
