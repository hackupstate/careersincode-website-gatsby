import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import {
  Container,
  Row,
  Col,
  CardHeader,
  Card,
  CardBody,
  Button,
} from "reactstrap";

import CEO from "../images/partners/cceo.jpg";
import Lemoyne from "../images/partners/lemoyne.jpg";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import alignmentStyles from "./partner-alignment.module.css";

const Alignment = (props) => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={
          content.ui.partner_alignment.partner_alignment_jumbotron.heading
        }
        subheading={
          content.ui.partner_alignment.partner_alignment_jumbotron.subheading
        }
      />
    </Header>
    <SEO title="Partner Alignment" />
    <Container>
      <Row className={alignmentStyles.whiteContainer}>
        <h2>
          {
            content.ui.partner_alignment.partner_alignment_main_content
              .centerstate.heading
          }
        </h2>
        <p>
          {
            content.ui.partner_alignment.partner_alignment_main_content
              .centerstate.text
          }
        </p>
        <img
          src={CEO}
          alt="centerstate-ceo-logo"
          className={alignmentStyles.logoImg}
        />
      </Row>
      <Row className={alignmentStyles.whiteContainer}>
        <h2 className={alignmentStyles.objectives}>
          {
            content.ui.partner_alignment.partner_alignment_main_content
              .centerstate.objective.heading
          }
        </h2>
        <p className={alignmentStyles.description}>
          {
            content.ui.partner_alignment.partner_alignment_main_content
              .centerstate.objective.p1
          }
        </p>
        <p className={alignmentStyles.description}>
          {
            content.ui.partner_alignment.partner_alignment_main_content
              .centerstate.objective.p2
          }
        </p>
      </Row>
    </Container>
    <Container className={(pageStyles.marginBottom, alignmentStyles.infoCardContainer)}>
      <Row className={alignmentStyles.infoCardRow}>
        <Col sm="3">
          <Card className={alignmentStyles.infoCard}>
            <CardHeader />
            <CardBody>
              <p className={alignmentStyles.infoCardText}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.participants.textTop
                }
              </p>
              <h1 className={alignmentStyles.infoCardNumberGreen}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.participants.number
                }
              </h1>
              <p className={alignmentStyles.infoCardBottomText}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.participants.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card className={alignmentStyles.infoCard}>
            <CardHeader />
            <CardBody>
              <p className={alignmentStyles.infoCardText}>
                {" "}
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.training.textTop
                }
              </p>
              <h1 className={alignmentStyles.infoCardNumberGreen}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.training.number
                }
              </h1>
              <p className={alignmentStyles.infoCardBottomText}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.training.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card className={alignmentStyles.infoCard}>
            <CardHeader></CardHeader>
            <CardBody>
              <p className={alignmentStyles.infoCardText}>
                {" "}
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.experience.textTop
                }
              </p>
              <h1 className={alignmentStyles.infoCardNumberGreen}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.experience.number
                }
              </h1>
              <p className={alignmentStyles.infoCardBottomText}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.experience.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className={alignmentStyles.infoCardRow}>
        <Col sm="3">
          <Card className={alignmentStyles.infoCard}>
            <CardHeader />
            <CardBody>
              <p className={alignmentStyles.infoCardText}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.credit.textTop
                }
              </p>
              <h1 className={alignmentStyles.infoCardNumberGreen}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.credit.number
                }
              </h1>
              <p className={alignmentStyles.infoCardBottomText}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.credit.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card className={alignmentStyles.infoCard}>
            <CardHeader />
            <CardBody>
              <p className={alignmentStyles.infoCardText}>
                {" "}
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.employment.textTop
                }
              </p>
              <h1 className={alignmentStyles.infoCardNumberGreen}>
                {" "}
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.employment.number
                }
              </h1>
              <p className={alignmentStyles.infoCardBottomText}>
                {" "}
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.employment.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card className={alignmentStyles.infoCard}>
            <CardHeader />
            <CardBody>
              <p className={alignmentStyles.infoCardText}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.wages.textTop
                }
              </p>
              <h1 className={alignmentStyles.infoCardNumberGreen}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.wages.number
                }
              </h1>
              <p className={alignmentStyles.infoCardBottomText}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .centerstate.objective.cards.wages.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col sm="3">
          <Button className={pageStyles.blueButton}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {
                content.ui.partner_alignment.partner_alignment_main_content
                  .centerstate.objective.button.text
              }{" "}
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className={alignmentStyles.whiteContainer}>
        <h2>
          {
            content.ui.partner_alignment.partner_alignment_main_content.lemoyne
              .heading
          }
        </h2>
        <p>
          {
            content.ui.partner_alignment.partner_alignment_main_content.lemoyne
              .text
          }
        </p>
        <img
          src={Lemoyne}
          alt="lemoyne-logo"
          className={alignmentStyles.logoImg}
        />
      </Row>
      <Row className={alignmentStyles.whiteContainer}>
        <h2 className={alignmentStyles.objectives}>
          {
            content.ui.partner_alignment.partner_alignment_main_content.lemoyne
              .objective.heading
          }
        </h2>
      </Row>
    </Container>
    <Container className={(pageStyles.marginBottom, alignmentStyles.infoCardContainer)}>
      <Row className={alignmentStyles.infoCardRow}>
        <Col sm="3">
          <Card>
            <CardHeader />
            <CardBody>
              <p className={alignmentStyles.infoCardText}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .lemoyne.objective.cards.jobs.textTop
                }
              </p>
              <h1 className={alignmentStyles.infoCardNumberBlue}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .lemoyne.objective.cards.jobs.number
                }
              </h1>
              <p className={alignmentStyles.infoCardBottomText}>
                {
                  content.ui.partner_alignment.partner_alignment_main_content
                    .lemoyne.objective.cards.jobs.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col sm="3">
          <Button className={pageStyles.blueButton}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {
                content.ui.partner_alignment.partner_alignment_main_content
                  .lemoyne.objective.button.text
              }
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Alignment;
