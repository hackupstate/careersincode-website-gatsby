import React from "react";
import { Row, Col, Button } from "reactstrap";
import content from "../content/content.json";
import bottomRowStyles from "./bottomrow.module.css";

const BottomRowContainer = (props) => {
  return (
    <Row className={bottomRowStyles.breakpointRow}>
      <Col className={bottomRowStyles.greenBox}>
        <h3>
          {" "}
          {content.ui.index_main_content_bottom_row_container_one.title}{" "}
        </h3>
        <p>{content.ui.index_main_content_bottom_row_container_one.copy}</p>
        <a
            href={content.ui.index_main_content_bottom_row_container_one.link}
            className={bottomRowStyles.btnLinkBlue}
          >
        <Button size="md" className={bottomRowStyles.whiteButton}>
            {content.ui.index_main_content_bottom_row_container_one.button}
        </Button>
        </a>
      </Col>
      <Col className={bottomRowStyles.whiteBox}>
        <h3>
          {" "}
          {content.ui.index_main_content_bottom_row_container_two.title}{" "}
        </h3>
        <p>{content.ui.index_main_content_bottom_row_container_two.copy}</p>
        <a
            href={content.ui.index_main_content_bottom_row_container_two.link}
            className={bottomRowStyles.btnLink}
          >
        <Button size="md" className={bottomRowStyles.greenButton}>
            {content.ui.index_main_content_bottom_row_container_two.button}
        </Button>
        </a>
      </Col>
      <Col className={bottomRowStyles.greenBox}>
        <h3>
          {" "}
          {content.ui.index_main_content_bottom_row_container_three.title}{" "}
        </h3>
        <p>{content.ui.index_main_content_bottom_row_container_three.copy}</p>
        <a
            href={content.ui.index_main_content_bottom_row_container_three.link}
            className={bottomRowStyles.btnLinkBlue}
          >
        <Button size="md" className={bottomRowStyles.whiteButton}>
            {content.ui.index_main_content_bottom_row_container_three.button}
        </Button>
        </a>
      </Col>
    </Row>
  );
};

export default BottomRowContainer;

// to do: fix hover on buttons so it actually works
// move styling to module or css sheet from inline
// add media breakpoints for mobile/tablet so it looks less garbage when it collapses
