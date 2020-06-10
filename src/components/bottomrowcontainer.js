import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import content from "../content/content.json";
import bottomRowStyles from "./bottomrow.module.css";

const BottomRowContainer = (props) => {
  return (
    <Row md="3">
      <Col className={bottomRowStyles.blueBox}>
        <h3>
          {" "}
          {content.ui.index_main_content_bottom_row_container_one.title}{" "}
        </h3>
        <p>{content.ui.index_main_content_bottom_row_container_one.copy}</p>
        <Button size="md" className={bottomRowStyles.whiteButton}>
          <a
            href={content.ui.index_main_content_bottom_row_container_one.link}
            className={bottomRowStyles.btnLinkBlue}
          >
            {content.ui.index_main_content_bottom_row_container_one.button}
          </a>
        </Button>
      </Col>
      <Col className={bottomRowStyles.whiteBox}>
        <h3>
          {" "}
          {content.ui.index_main_content_bottom_row_container_two.title}{" "}
        </h3>
        <p>{content.ui.index_main_content_bottom_row_container_two.copy}</p>

        <Button size="md" className={bottomRowStyles.greenButton}>
          <a
            href={content.ui.index_main_content_bottom_row_container_two.link}
            className={bottomRowStyles.btnLink}
          >
            {content.ui.index_main_content_bottom_row_container_two.button}
          </a>
        </Button>
      </Col>
      <Col className={bottomRowStyles.blueBox}>
        <h3>
          {" "}
          {content.ui.index_main_content_bottom_row_container_three.title}{" "}
        </h3>
        <p>{content.ui.index_main_content_bottom_row_container_three.copy}</p>
        <Button size="md" className={bottomRowStyles.whiteButton}>
          <a
            href={content.ui.index_main_content_bottom_row_container_three.link}
            className={bottomRowStyles.btnLinkBlue}
          >
            {content.ui.index_main_content_bottom_row_container_three.button}
          </a>
        </Button>
      </Col>
    </Row>
  );
};

export default BottomRowContainer;

// to do: fix hover on buttons so it actually works
// move styling to module or css sheet from inline
// add media breakpoints for mobile/tablet so it looks less garbage when it collapses
