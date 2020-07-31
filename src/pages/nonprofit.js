import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import { Container, Row, Button, Col } from "reactstrap";
import Project from "../images/undrawImgs/project-green.svg";
import Collab from "../images/undrawImgs/collab-blue.svg";
import Growth from "../images/undrawImgs/growth-green.svg";
import content from "../content/content.json";
import nonprofitStyles from "./nonprofit.module.css";

const NonProfit = (props) => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.nonprofit.nonprofit_jumbotron.heading}
        subheading={content.ui.nonprofit.nonprofit_jumbotron.subheading}
      >
        <JumboButton
          btnLink={"/Community Foundation Presentation - Friday Mar 21, 2019.pdf"}
          btnText={content.ui.nonprofit.nonprofit_jumbotron.button.text}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Non-Profit" />
    <Container fluid className={nonprofitStyles.whiteContainer}>
      <Row className={nonprofitStyles.infoRowOdd}>
        <Col>
          <h3>{content.ui.nonprofit.nonprofit_main_content.capstone.title}</h3>
          <p>{content.ui.nonprofit.nonprofit_main_content.capstone.text}</p>
          <Button className={nonprofitStyles.blueButton}>
            <a
              href={
                content.ui.nonprofit.nonprofit_main_content.capstone.button.link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={nonprofitStyles.btnLink}
            >
              {content.ui.nonprofit.nonprofit_main_content.capstone.button.text}
            </a>
          </Button>
        </Col>
        <Col>
          <img
            src={Project}
            alt="girl-coding-graphic"
            className={nonprofitStyles.imgSize}
          />
        </Col>
      </Row>
    </Container>
    <Container fluid className={nonprofitStyles.whiteContainer}>
      <Row className={nonprofitStyles.infoRow}>
        <Col>
          <img
            src={Collab}
            alt="work-together-graphic"
            className={nonprofitStyles.imgSize}
          />
        </Col>
        <Col>
          <h3>
            {content.ui.nonprofit.nonprofit_main_content.onboarding.title}
          </h3>
          <p>{content.ui.nonprofit.nonprofit_main_content.onboarding.text}</p>
          <Button className={nonprofitStyles.blueButton}>
            <a
              href={
                content.ui.nonprofit.nonprofit_main_content.onboarding.button
                  .link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={nonprofitStyles.btnLink}
            >
              {
                content.ui.nonprofit.nonprofit_main_content.onboarding.button
                  .text
              }
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
    <Container fluid className={nonprofitStyles.whiteContainer}>
      <Row className={nonprofitStyles.infoRowOdd}>
        <Col>
          <h3>{content.ui.nonprofit.nonprofit_main_content.students.title}</h3>
          <p>{content.ui.nonprofit.nonprofit_main_content.students.text}</p>
          <Button className={nonprofitStyles.blueButton}>
            <a
              href={
                content.ui.nonprofit.nonprofit_main_content.students.button.link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={nonprofitStyles.btnLink}
            >
              {content.ui.nonprofit.nonprofit_main_content.students.button.text}
            </a>
          </Button>
        </Col>
        <Col>
          <img
            src={Growth}
            alt="growth-curve-graphic"
            className={nonprofitStyles.imgSize}
          />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default NonProfit;
