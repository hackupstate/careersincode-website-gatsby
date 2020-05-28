import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import {
  Button,
  Row,
  Container,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
} from "reactstrap";
import Eva from "../images/students/eva.jpg";
import Kelly from "../images/students/kellycorey.jpg";
import Dana from "../images/students/dana.jpg";
import Beth from "../images/students/beth.jpg";
import Dakir from "../images/students/dakir.jpg";
import Karin from "../images/students/karin.jpg";
import Kaitlyn from "../images/students/kaitlyn.jpg";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import cardStyles from "./outcomes.module.css";

const OutcomesPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.outcomes.outcomes_jumbotron.heading}
        subheading={content.ui.outcomes.outcomes_jumbotron.subheading}
      >
        <JumboButton
          btnLink={content.ui.outcomes.outcomes_jumbotron.button.outcomes_link}
          btnText={content.ui.outcomes.outcomes_jumbotron.button.outcomes_text}
        />
        <JumboButton
          btnLink={
            content.ui.outcomes.outcomes_jumbotron.button.consolidated_link
          }
          btnText={
            content.ui.outcomes.outcomes_jumbotron.button.consolidated_text
          }
        />
        <JumboButton
          btnLink={
            content.ui.outcomes.outcomes_jumbotron.button.transparency_link
          }
          btnText={
            content.ui.outcomes.outcomes_jumbotron.button.transparency_text
          }
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Outcomes" />
    <Container
      fluid
      className={(pageStyles.marginBottom, pageStyles.containerStyles)}
    >
      <Row className={pageStyles.pageContentContainer}>
        <Col className={pageStyles.centerText}>
          <CardDeck>
            {/* Eva Card */}
            <Card body className="shadow-sm">
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.eva.name}
              </CardHeader>
              <CardImg top width="100%" src={Eva} alt="Eva Carafa" />
              <CardBody>
                <CardTitle>
                  <p className={cardStyles.cardTitle}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.eva
                        .position
                    }
                  </p>
                </CardTitle>
                <CardText>
                  {content.ui.outcomes.outcomes_main_content.cards.eva.company}
                </CardText>
                <Button size="sm" color="info">
                  <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.eva.button
                        .link
                    }
                    target="_blank"
                    rel="noopener noreferer"
                    className={pageStyles.btnLink}
                  >
                    {
                      content.ui.outcomes.outcomes_main_content.cards.eva.button
                        .text
                    }
                  </a>
                </Button>
              </CardBody>
            </Card>
            {/* Kelly Card */}
            <Card body className="shadow-sm">
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.kelly.name}
              </CardHeader>
              <CardImg top width="100%" src={Kelly} alt="Kelly Corey" />
              <CardBody>
                <CardTitle>
                  {
                    content.ui.outcomes.outcomes_main_content.cards.kelly
                      .position
                  }
                </CardTitle>
                <CardText>
                  {
                    content.ui.outcomes.outcomes_main_content.cards.kelly
                      .company
                  }
                </CardText>
                <Button size="sm" color="info">
                  <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.kelly
                        .button.link
                    }
                    target="_blank"
                    rel="noopener noreferer"
                    className={pageStyles.btnLink}
                  >
                    {
                      content.ui.outcomes.outcomes_main_content.cards.kelly
                        .button.text
                    }
                  </a>
                </Button>
              </CardBody>
            </Card>
            {/*Dana Card*/}
            <Card body className="shadow-sm">
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.dana.name}
              </CardHeader>
              <CardImg top width="100%" src={Dana} alt="Dana McMullen" />
              <CardBody>
                <CardTitle>
                  {
                    content.ui.outcomes.outcomes_main_content.cards.dana
                      .position
                  }
                </CardTitle>
                <CardText>
                  {content.ui.outcomes.outcomes_main_content.cards.dana.company}
                </CardText>
                <Button size="sm" color="info">
                  <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.dana
                        .button.link
                    }
                    target="_blank"
                    rel="noopener noreferer"
                    className={pageStyles.btnLink}
                  >
                    {
                      content.ui.outcomes.outcomes_main_content.cards.dana
                        .button.text
                    }
                  </a>
                </Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      {/* New Card Row */}
      <Row className={pageStyles.pageContentContainer}>
        <Col className={pageStyles.centerText}>
          <CardDeck>
            {/* Beth Card */}
            <Card body className="shadow-sm">
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.elizabeth.name}
              </CardHeader>
              <CardImg top width="100%" src={Beth} alt="Elizabeth Metcalf" />
              <CardBody>
                <CardTitle>
                  {
                    content.ui.outcomes.outcomes_main_content.cards.elizabeth
                      .position
                  }
                </CardTitle>
                <CardText>
                  {
                    content.ui.outcomes.outcomes_main_content.cards.elizabeth
                      .company
                  }
                </CardText>
                <Button size="sm" color="info">
                  <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.elizabeth
                        .button.link
                    }
                    target="_blank"
                    rel="noopener noreferer"
                    className={pageStyles.btnLink}
                  >
                    {
                      content.ui.outcomes.outcomes_main_content.cards.elizabeth
                        .button.text
                    }
                  </a>
                </Button>
              </CardBody>
            </Card>
            {/* Dakir Card */}
            <Card body className="shadow-sm">
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.dakir.name}
              </CardHeader>
              <CardImg top width="100%" src={Dakir} alt="Dakir Thompson" />
              <CardBody>
                <CardTitle>
                  {
                    content.ui.outcomes.outcomes_main_content.cards.dakir
                      .position
                  }
                </CardTitle>
                <CardText>
                  {
                    content.ui.outcomes.outcomes_main_content.cards.dakir
                      .company
                  }
                </CardText>
                <Button size="sm" color="info">
                  <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.dakir
                        .button.link
                    }
                    target="_blank"
                    rel="noopener noreferer"
                    className={pageStyles.btnLink}
                  >
                    {
                      content.ui.outcomes.outcomes_main_content.cards.dakir
                        .button.text
                    }
                  </a>
                </Button>
              </CardBody>
            </Card>
            {/*Karin Card*/}
            <Card body className="shadow-sm">
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.karin.name}
              </CardHeader>
              <CardImg top width="100%" src={Karin} alt="Karin Thorne" />
              <CardBody>
                <CardTitle>
                  {
                    content.ui.outcomes.outcomes_main_content.cards.karin
                      .position
                  }
                </CardTitle>
                <CardText>
                  {
                    content.ui.outcomes.outcomes_main_content.cards.karin
                      .company
                  }
                </CardText>
                <Button size="sm" color="info">
                  <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.karin
                        .button.link
                    }
                    target="_blank"
                    rel="noopener noreferer"
                    className={pageStyles.btnLink}
                  >
                    {
                      content.ui.outcomes.outcomes_main_content.cards.karin
                        .button.text
                    }
                  </a>
                </Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      {/* New Card Row */}
      <Row md="3" className={pageStyles.pageContentContainer}>
        <Col className={pageStyles.centerText}>
          <CardDeck>
            {/* Kaitlyn Card */}
            <Card body className="shadow-sm">
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.kaitlyn.name}
              </CardHeader>
              <CardImg top width="100%" src={Kaitlyn} alt="Kaitlyn Warboy" />
              <CardBody>
                <CardTitle>
                  {
                    content.ui.outcomes.outcomes_main_content.cards.kaitlyn
                      .position
                  }
                </CardTitle>
                <CardText>
                  {
                    content.ui.outcomes.outcomes_main_content.cards.kaitlyn
                      .company
                  }
                </CardText>
                <Button size="sm" color="info">
                  <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.kaitlyn
                        .button.link
                    }
                    target="_blank"
                    rel="noopener noreferer"
                    className={pageStyles.btnLink}
                  >
                    {
                      content.ui.outcomes.outcomes_main_content.cards.kaitlyn
                        .button.text
                    }
                  </a>
                </Button>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default OutcomesPage;
