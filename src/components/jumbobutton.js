import React from "react";
import { Button, Row } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css"
import buttonStyles from "./jumbobutton.module.css";

const JumboButton = (props) => {
  return (
    <div>
      <Row>
        <Button className={buttonStyles.jumboButtons}>
          <a
            href={props.btnLink}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles.btnLink}
          >
            {props.btnText}
          </a>
        </Button>
      </Row>
    </div>
  );
};

export default JumboButton;
