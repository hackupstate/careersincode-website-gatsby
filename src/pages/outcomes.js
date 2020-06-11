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
  CardBody,
  CardDeck,
} from "reactstrap";
import Banner from "../components/banner";
import Eva from "../images/students/eva.jpg";
import Kelly from "../images/students/kellycorey.jpg";
import Dana from "../images/students/dana.jpg";
import Beth from "../images/students/beth.jpg";
import Dakir from "../images/students/dakir.jpg";
import Karin from "../images/students/karin.jpg";
import Kaitlyn from "../images/students/kaitlyn.jpg";

import UI from "../images/companies/ui.jpg";
import NID from "../images/companies/nid.jpg";
import Terakeet from "../images/companies/terakeet.jpg";
import Gypsum from "../images/companies/gypsum.jpg";
import Raymour from "../images/companies/raymour.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import outcomesStyles from "./outcomes.module.css";
import bannerStyles from "../components/banner.module.css";

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
    <Row className={pageStyles.pageHeadings}>
      <h2>{content.ui.outcomes.outcomes_main_content.header}</h2>
    </Row>
    <Container
      fluid
      className={
        (pageStyles.marginBottom, outcomesStyles.outcomesCardContainer)
      }
    >
      <Row className={outcomesStyles.outcomesCardRow}>
        {/* Eva Card */}
        <CardDeck>
          <Col sm="3">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.eva.name}
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Eva}
                alt="Eva Carafa"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.eva
                        .position
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.eva
                        .company
                    }
                  </p>
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
          </Col>
          {/* Kelly Card */}
          <Col sm="3">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.kelly.name}
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Kelly}
                alt="Kelly Corey"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.kelly
                        .position
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.kelly
                        .company
                    }
                  </p>
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
          </Col>
          {/*Dana Card*/}
          <Col sm="3">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.dana.name}
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Dana}
                alt="Dana McMullen"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.dana
                        .position
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.dana
                        .company
                    }
                  </p>
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
          </Col>
          {/* Beth Card */}
          <Col sm="3">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.elizabeth.name}
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Beth}
                alt="Elizabeth Metcalf"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.elizabeth
                        .position
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.elizabeth
                        .company
                    }
                  </p>
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
          </Col>
        </CardDeck>
      </Row>
      {/* New Card Row */}
      <Row className={outcomesStyles.outcomesCardRow}>
        {/* Dakir Card */}
        <CardDeck>
          <Col sm="4">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.dakir.name}
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Dakir}
                alt="Dakir Thompson"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.dakir
                        .position
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.dakir
                        .company
                    }
                  </p>
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
          </Col>
          {/*Karin Card*/}
          <Col sm="4">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.karin.name}
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Karin}
                alt="Karin Thorne"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.karin
                        .position
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.karin
                        .company
                    }
                  </p>
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
          </Col>
          {/* Kaitlyn Card */}
          <Col sm="4">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                {content.ui.outcomes.outcomes_main_content.cards.kaitlyn.name}
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Kaitlyn}
                alt="Kaitlyn Warboy"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.kaitlyn
                        .position
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>
                    {
                      content.ui.outcomes.outcomes_main_content.cards.kaitlyn
                        .company
                    }
                  </p>
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
          </Col>
        </CardDeck>
      </Row>
    </Container>
    <Container
      fluid
      className={
        (pageStyles.marginBottom, outcomesStyles.outcomesStatImgContainer)
      }
    >
      <Row className={pageStyles.centerItems}>
        <Col className={pageStyles.centerText}>
          <h1>
            {
              content.ui.outcomes.outcomes_main_content.outcomes_snippets
                .heading
            }
          </h1>
        </Col>
      </Row>
      <Row className={pageStyles.centerItems}>
        <Col className={outcomesStyles.statColumns}>
          <h2>
            {
              content.ui.outcomes.outcomes_main_content.outcomes_snippets.jobs
                .number
            }
          </h2>
          <p className={outcomesStyles.paraTextBlue}>
            {
              content.ui.outcomes.outcomes_main_content.outcomes_snippets.jobs
                .text
            }
          </p>
        </Col>
        <Col className={outcomesStyles.statColumns}>
          <h2>
            {
              content.ui.outcomes.outcomes_main_content.outcomes_snippets.salary
                .number
            }
          </h2>
          <p className={outcomesStyles.paraTextGreen}>
            {
              content.ui.outcomes.outcomes_main_content.outcomes_snippets.salary
                .text
            }
          </p>
        </Col>
      </Row>
    </Container>
    <Container
      fluid
      className={(pageStyles.marginBottom, outcomesStyles.logoContainer)}
    >
      <Row className={(pageStyles.centerItems, pageStyles.marginBottom)}>
        <Col className={pageStyles.centerText}>
          <h2>
            {content.ui.outcomes.outcomes_main_content.company_logos.text}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col className={outcomesStyles.centerContentColumns}>
          <img
            src={UI}
            className={pageStyles.smLogo}
            alt="upstate-interactive-logo"
          />
        </Col>
        <Col className={outcomesStyles.centerContentColumns}>
          <img
            src={NID}
            className={pageStyles.smLogo}
            alt="northeast-information-logo"
          />
        </Col>
        <Col className={outcomesStyles.centerContentColumns}>
          <img
            src={Terakeet}
            className={pageStyles.smLogo}
            alt="terakeet-logo"
          />
        </Col>
      </Row>
      <Row>
        <Col className={outcomesStyles.centerContentColumns}>
          <img src={Gypsum} className={pageStyles.smLogo} alt="gypsum-logo" />
        </Col>
        <Col className={outcomesStyles.centerContentColumns}>
          <img
            src={Raymour}
            className={pageStyles.smLogo}
            alt="raymour-flanigan-logo"
          />
        </Col>
      </Row>
    </Container>
    <Banner>
      <Row className={bannerStyles.bannerGreen}>
        <Col className={pageStyles.centerText}>
          <a
            href={content.ui.outcomes.outcomes_main_content.banner.link}
            target="_blank"
            rel="noopener noreferrer"
            className={outcomesStyles.bannerLink}
          >
            {content.ui.outcomes.outcomes_main_content.banner.text}{" "}
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </Col>
      </Row>
    </Banner>
  </Layout>
);

export default OutcomesPage;
