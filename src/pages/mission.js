import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import { Container, Row, Col } from "reactstrap";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";

const MissionPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.about.mission_jumbotron.heading}
      ></JumbotronComponent>
    </Header>
    <SEO title="Mission" />
    <Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadingsLeftAlign}>
        <h3> {content.ui.about.mission_main_content.header1.title} </h3>
        <p> {content.ui.about.mission_main_content.header1.text1} </p>
        <p> {content.ui.about.mission_main_content.header1.text2} </p>
      </Row>
    </Container>
    <Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadingsLeftAlign}>
        <h3> {content.ui.about.mission_main_content.header2.title} </h3>
        <p> {content.ui.about.mission_main_content.header2.text} </p>
      </Row>
    </Container>
    <Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadingsLeftAlign}>
        <Col>
          <h3> {content.ui.about.mission_main_content.header4.title} </h3>
          <br />
          <h4> {content.ui.about.mission_main_content.header4.subheader1} </h4>
          <p> {content.ui.about.mission_main_content.header4.text} </p>
          <h4>
            {" "}
            {
              content.ui.about.mission_main_content.header4.subheader2.title
            }{" "}
          </h4>
          <p>
            {" "}
            {content.ui.about.mission_main_content.header4.subheader2.text}{" "}
          </p>
          <h4>
            {" "}
            {
              content.ui.about.mission_main_content.header4.subheader3.title
            }{" "}
          </h4>
          <p>
            {" "}
            {content.ui.about.mission_main_content.header4.subheader3.text}{" "}
          </p>
        </Col>
      </Row>
    </Container>
    <Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadingsLeftAlign}>
        <h3>Free Tuition</h3>
        <p>The average tuition per student to attend a coding bootcamp in the United States is $11,900. That is much too expensive given our desire to create an inclusive coding bootcamp that will provide opportunities for women and minorities in concentrated areas of extreme poverty. For the Careers in Code bootcamp there is no tuition cost. We treat each student as though they have been admitted on scholarship.</p>
      </Row>
    </Container>
    <Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadingsLeftAlign}>
        <h3>Free Macbook Pro Loaner Laptop</h3>
        <p>The women and minority applicants accepted into the first cohort were issued personal laptops free of charge that were purchased as a part of our grant funding. These consisted of brand new 2017 MacBook Pros that were given to students during the kickoff ceremony. As long as the individual successfully completed the program and satisfied curriculum criteria, they were able to keep their laptops moving forward.</p>
      </Row>
    </Container>
  </Layout>
);

export default MissionPage;
