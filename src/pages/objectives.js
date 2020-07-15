import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import { Container, Row, Button, Col } from "reactstrap";
import pageStyles from "./pages.module.css";
import content from "../content/content.json";

const Objectives = () => (
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
      </JumbotronComponent>
    </Header>
    <SEO title="Objectives" />
    <Container fluid className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <Button className={pageStyles.blueButton}>
          <a
            href={
              content.ui.objectives.objectives_main_content.button_2019.link
            }
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            {content.ui.objectives.objectives_main_content.button_2019.text}
          </a>
        </Button>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.partner_alignment
                .heading
            }
          </h2>
          <p>
            {
              content.ui.objectives.objectives_main_content.partner_alignment
                .text
            }
          </p>
          <Button className={pageStyles.blueButton}>
            <a
              href={
                content.ui.objectives.objectives_main_content.partner_alignment
                  .button.link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {
                content.ui.objectives.objectives_main_content.partner_alignment
                  .button.text
              }
            </a>
          </Button>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list
                .train.heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list
                .barriers.heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list
                .sustainable.heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list
                .feedback.heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list
                .graduation.heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list.jobs
                .heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list
                .events.heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list
                .community.heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list
                .job_preparednes.heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list
                .instructors_and_coaches.heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list
                .productivity.heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list
                .network.heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h2>
            {
              content.ui.objectives.objectives_main_content.objectives_list
                .onboarding.heading
            }
          </h2>
          <p>More information coming soon.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Objectives;
