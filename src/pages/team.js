import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import { Button, Container, Row, Col } from "reactstrap";
import Doug from "../images/team/dougcrescenzi.png";
import Jesse from "../images/team/jesse.png";
import Will from "../images/team/will.png";
import Jason from "../images/team/jason.png";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import teamStyles from "./team.module.css";

const TeamPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.about.team_jumbotron.heading}
      ></JumbotronComponent>
    </Header>
    <SEO title="Team" />
    <Container>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h3> {content.ui.about.team_main_content.text} </h3>
          <a
            href={content.ui.about.team_main_content.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            team@hackupstate.com{" "}
          </a>
        </Col>
      </Row>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <img
            className={teamStyles.imgCircle}
            src={Jesse}
            alt="Jesse Peplinski"
          />
          <h4> {content.ui.about.team_main_content.members.jesse} </h4>
          <p> {content.ui.about.team_main_content.members.partner} </p>
          <img
            className={teamStyles.imgCircle}
            src={Will}
            alt="Will Guisbond"
          />
          <h4> {content.ui.about.team_main_content.members.will} </h4>
          <p> {content.ui.about.team_main_content.members.intern} </p>
        </Col>
        <Col>
          <img
            className={teamStyles.imgCircle}
            src={Doug}
            alt="Doug Crescenzi"
          />
          <h4> {content.ui.about.team_main_content.members.doug} </h4>
          <p> {content.ui.about.team_main_content.members.partner} </p>
          <img
            className={teamStyles.imgCircle}
            src={Jason}
            alt="Jason Scharf"
          />
          <h4> {content.ui.about.team_main_content.members.jason} </h4>
          <p> {content.ui.about.team_main_content.members.ssr} </p>
        </Col>
        <Row className={pageStyles.pageContentContainer}>
          <Button className={pageStyles.blueButton}>
            <a
              href={content.ui.about.team_main_content.link}
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {content.ui.about.team_main_content.button}
            </a>
          </Button>
        </Row>
      </Row>
    </Container>
  </Layout>
);

export default TeamPage;
