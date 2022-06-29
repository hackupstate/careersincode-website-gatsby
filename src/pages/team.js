import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import { Button, Container, Row, Col } from "reactstrap";
import Doug from "../images/team/dougcrescenzi.png";
import Jesse from "../images/team/jesse.png";
import Jason from "../images/team/jason.png";
import Dana from "../images/team/dana.jpg";
import Laura from "../images/team/laura.jpg";
import maxgerlach from "../images/team/maxgerlach.png";
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
    <Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h3> {content.ui.about.team_main_content.text} </h3>
         
          <p mb="3">
            <Button className={pageStyles.blueButton}>
              {content.ui.about.team_main_content.button}
            </Button>
          </p>
        </Col>
      </Row>
      <Row >
        <Col lg="6">
          <img
            className={teamStyles.imgCircle}
            src={Jesse}
            alt="Jesse Peplinski"
          />
          <h4> {content.ui.about.team_main_content.members.jesse} </h4>
          <p> {content.ui.about.team_main_content.members.partner} </p>
          <img
            className={teamStyles.imgCircle}
            src={Laura}
            alt="Laura Thorne"
          />
          <h4> Laura Thorne </h4>
          <p> Career Coach </p>
        </Col>
        <Col lg="6">
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
        <Col lg="6">
          <img
            className={teamStyles.imgCircle}
            src={maxgerlach}
            alt="Max Gerlach"
          />
          <h4> Max Gerlach </h4>
          <p> Program Manager </p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default TeamPage;
