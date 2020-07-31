import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";

import content from "../content/content.json";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import pageStyles from "./pages.module.css";

const NotFoundPage = (props) => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.index_jumbotron.heading}
        subheading={content.ui.index_jumbotron.subheading}
      />
    </Header>
    <SEO title="Home" />
    <Container fluid className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <FontAwesomeIcon icon={faCode} size="5x" />
      </Row>

      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>Sorry, we can't find the page you're looking for.</h2>
          <p>
            Click <a href="/">here</a> to go back to the home page.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default NotFoundPage;
