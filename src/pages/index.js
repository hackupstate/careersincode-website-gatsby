import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import Banner from "../components/banner";
import Carousels from "../components/carousels";
import BottomRowContainer from "../components/bottomrowcontainer";
import { Link } from "gatsby";
import { Button, Row, Col } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import bannerStyles from "../components/banner.module.css";

const IndexPage = (props) => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.index_jumbotron.heading}
        subheading={content.ui.index_jumbotron.subheading}
      >
        <JumboButton
          btnLink={content.ui.index_jumbotron.button1.link}
          btnText={content.ui.index_jumbotron.button1.text}
        />
        <JumboButton
          btnLink={content.ui.index_jumbotron.button2.link}
          btnText={content.ui.index_jumbotron.button2.text}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Home" />
    <Banner>
      <Row className={bannerStyles.bannerGreen}>
        <Col className={pageStyles.centerText}>
          <a
            href={content.ui.outcomes.outcomes_main_content.banner.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.ui.outcomes.outcomes_main_content.banner.text}{" "}
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </Col>
      </Row>
    </Banner>
    <Row className={pageStyles.pageHeadings}>
      <Col md="12">
        <h3> {content.ui.index_main_content_top_text.copy}</h3>
        <p> {content.ui.index_main_content_top_text.description} </p>
        <Button size="lg" className={pageStyles.blueButton}>
          <a
            href="https://medium.com/@hackupstate/announcing-hack-upstates-careers-in-code-a8ff0bfeddbf"
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            {" "}
            {content.ui.index_main_content_top_text.button}{" "}
          </a>
        </Button>
      </Col>
    </Row>
    <Row className={pageStyles.pageHeadings}>
      <Col md="12">
        <h3> {content.ui.index_main_content_bottom_text.copy} </h3>
        <p> {content.ui.index_main_content_bottom_text.description} </p>
        <Link to={content.ui.index_main_content_bottom_text.link}>
          <Button size="lg" className={pageStyles.blueButton}>
            {content.ui.index_main_content_bottom_text.button}
          </Button>
        </Link>
      </Col>
    </Row>
    <br />
    <Carousels />
    <br />
    <BottomRowContainer />
    <br />
  </Layout>
);

export default IndexPage;
