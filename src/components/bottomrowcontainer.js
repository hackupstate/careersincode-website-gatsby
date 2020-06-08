import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import content from "../content/content.json";
import bottomRowStyles from "./bottomrow.module.css";

const BottomRowContainer = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col className={bottomRowStyles.blueBox} md="4">
          <h1>
            {" "}
            {content.ui.index_main_content_bottom_row_container_one.title}{" "}
          </h1>
          <p
            style={{
              fontSize: "24px",
            }}
          >
            {content.ui.index_main_content_bottom_row_container_one.copy}
          </p>
          <Button size="lg" className={bottomRowStyles.whiteButton}>
            <a
              href={content.ui.index_main_content_bottom_row_container_one.link}
              className={bottomRowStyles.btnLinkBlue}
            >
              {content.ui.index_main_content_bottom_row_container_one.button}
            </a>
          </Button>
        </Col>
        <Col className={bottomRowStyles.whiteBox} md="4">
          <h1>
            {" "}
            {content.ui.index_main_content_bottom_row_container_two.title}{" "}
          </h1>
          <p
            style={{
              fontSize: "24px",
            }}
          >
            {content.ui.index_main_content_bottom_row_container_two.copy}
          </p>

          <Button size="lg" className={bottomRowStyles.greenButton}>
            <a
              href={content.ui.index_main_content_bottom_row_container_two.link}
              className={bottomRowStyles.btnLink}
            >
              {content.ui.index_main_content_bottom_row_container_two.button}
            </a>
          </Button>
        </Col>
        <Col className={bottomRowStyles.blueBox} md="4">
          <h1>
            {" "}
            {
              content.ui.index_main_content_bottom_row_container_three.title
            }{" "}
          </h1>
          <p
            style={{
              fontSize: "24px",
            }}
          >
            {content.ui.index_main_content_bottom_row_container_three.copy}
          </p>
          <Button size="lg" className={bottomRowStyles.whiteButton}>
            <a
              href={
                content.ui.index_main_content_bottom_row_container_three.link
              }
              className={bottomRowStyles.btnLinkBlue}
            >
              {content.ui.index_main_content_bottom_row_container_three.button}
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomRowContainer;

// to do: fix hover on buttons so it actually works
// move styling to module or css sheet from inline
// add media breakpoints for mobile/tablet so it looks less garbage when it collapses
