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
import Tim from "../images/students/tim.jpeg";

import LaTonia from "../images/students/cohort-2/latonia.png";
import mel from "../images/students/cohort-2/mel.jpg";
import sara from "../images/students/cohort-2/sara.png";
import kyle from "../images/students/cohort-2/kyle.jpg";
import brandy from "../images/students/cohort-2/brandy.jpg"

import larry from "../images/students/cohort-3/larrygoodman.jpeg";
import daniellefloyd from "../images/students/cohort-3/daniellefloyd.jpg";

import UI from "../images/companies/ui.jpg";
import NID from "../images/companies/nid.jpg";
import Terakeet from "../images/companies/terakeet.jpg";
import Gypsum from "../images/companies/gypsum.jpg";
import Raymour from "../images/companies/raymour.jpg";
import Syracuse from "../images/companies/syracuse.gif";
import Sidearm from "../images/companies/sidearm.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import outcomesStyles from "./outcomes.module.css";
import bannerStyles from "../components/banner.module.css";
import testimonialStyles from "./testimonials.module.css";

import cirrLogo from "../images/partners/cirr_50.png";
import Density from "../images/partners/density.png";
import cceo from "../images/partners/cceo.png";
import Kirkwork from "../images/partners/kirkwork.png";

import classnames from "classnames";

const OutcomesPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.outcomes.outcomes_jumbotron.heading}
        subheading={content.ui.outcomes.outcomes_jumbotron.subheading}
      >
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
    <Row className={pageStyles.pageHeadings}>
      <h3>Cohort 3 (March, 28 2022 - September 8, 2022)</h3>
    </Row>

    {/*<Row className={outcomesStyles.outcomesCardRow}>
      <a
        href={"/outcomes/cohort-2/Careers-In-Code-Student-Outcomes-Report-Cohort-2.pdf"}
        rel="noopener noreferrer"
        className={pageStyles.btnLink}
        target="_blank"
      >
        <Button className={classnames(pageStyles.blueButton, pageStyles.blueButtonMargin)}>
          View Full Outcomes Report
        </Button>
      </a>

      <a
        href={"/outcomes/cohort-2/Careers-in-Code-Cohort-2-Outcomes-1-pager.pdf"}
        rel="noopener noreferrer"
        className={pageStyles.btnLink}
        target="_blank"
      >
        <Button className={classnames(pageStyles.blueButton, pageStyles.blueButtonMargin)}>
          View 1-pager Outcomes
        </Button>
      </a>
    </Row>*/}
      <Row className={outcomesStyles.outcomesCardRow}>
        {/* La'Tonia Card */}
        <CardDeck>

        <Col sm="3">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
              Larry Goodman
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={larry}
                alt="Larry"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>Software Developer Apprentice</p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>Terakeet</p>
                </CardText>
                <a
                    href="https://hackupstate.medium.com/careers-in-code-student-success-stories-larry-goodman-8a68fa2c0d54"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                  Read Larry's story 
                </Button>
                </a>
              </CardBody>
            </Card>
          </Col>
          
           <Col sm="3">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
              Danielle Floyd
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={daniellefloyd}
                alt="daniellefloyd"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>Software Component Apprentice</p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>Thales</p>
                </CardText>
                {/*<a
                    href="https://hackupstate.medium.com/student-spotlight-latonia-mertica-d0ad92c94209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                  Read La'Tonia's story 
                </Button>
                </a>*/}
              </CardBody>
            </Card>
            </Col>
        </CardDeck>
      </Row>
    </Container>
    <Container
      fluid
      className={
        (pageStyles.marginBottom, outcomesStyles.outcomesCardContainer)
      }
    >
    <Row className={pageStyles.pageHeadings}>
      <h3>Cohort 2 (March, 15 2021 - August 26, 2021)</h3>
    </Row>

    <Row className={outcomesStyles.outcomesCardRow}>
      <a
        href={"/outcomes/cohort-2/Careers-In-Code-Student-Outcomes-Report-Cohort-2.pdf"}
        rel="noopener noreferrer"
        className={pageStyles.btnLink}
        target="_blank"
      >
        <Button className={classnames(pageStyles.blueButton, pageStyles.blueButtonMargin)}>
          View Full Outcomes Report
        </Button>
      </a>

      <a
        href={"/outcomes/cohort-2/Careers-in-Code-Cohort-2-Outcomes-1-pager.pdf"}
        rel="noopener noreferrer"
        className={pageStyles.btnLink}
        target="_blank"
      >
        <Button className={classnames(pageStyles.blueButton, pageStyles.blueButtonMargin)}>
          View 1-pager Outcomes
        </Button>
      </a>
      </Row>
      <Row className={outcomesStyles.outcomesCardRow}>
        {/* La'Tonia Card */}
        <CardDeck>

        <Col sm="3">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                Brandy Mack
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={brandy}
                alt="Brandy"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>Digital Marketing Specialist</p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>Terakeet</p>
                </CardText>
                <a
                    href="https://hackupstate.medium.com/careers-in-code-student-success-stories-brandy-mack-132f7b58abaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                  Read Brandy's story 
                </Button>
                </a>
              </CardBody>
            </Card>
          </Col>
          
           <Col sm="3">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                La'Tonia Mertica Sheppard Walker
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={LaTonia}
                alt="LaTonia"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>Syracuse Surge Communications Manager</p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>CenterState CEO</p>
                </CardText>
                <a
                    href="https://hackupstate.medium.com/student-spotlight-latonia-mertica-d0ad92c94209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                  Read La'Tonia's story 
                </Button>
                </a>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                Sara Dow
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={sara}
                alt="LaTonia"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>Junior Software Developer</p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>Kirkwork</p>
                </CardText>
                <a
                    href="https://hackupstate.medium.com/careers-in-code-student-success-stories-sara-dow-12f1264820dd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                  Read Sara's story 
                </Button>
                </a>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                Melaquan Saffold
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={mel}
                alt="Mel"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>Product Manager, IT</p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>City of Syracuse</p>
                </CardText>
                <a
                    href="https://hackupstate.medium.com/careers-in-code-student-success-stories-melaquan-saffold-a8505f1e747"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                  Read Mel's story 
                </Button>
                </a>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                Kyle Gilbert
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={kyle}
                alt="Kyle"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>Lab Assistant</p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>Density</p>
                </CardText>
                <a
                    href="https://hackupstate.medium.com/careers-in-code-student-success-stories-kyle-gilbert-59eb41a60a99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                  Read Kyle's story 
                </Button>
                </a>
              </CardBody>
            </Card>
          </Col>

        </CardDeck>
      </Row>
 </Container>
    <Container
      fluid
      className={
        (pageStyles.marginBottom, outcomesStyles.outcomesCardContainer)
      }
    >
    <Row className={pageStyles.pageHeadings}>
      <h3>Cohort 1 (March, 11 2019 - August 22, 2019)</h3>
    </Row>
    <Row className={outcomesStyles.outcomesCardRow}>
      <a
        href={"/outcomes/cohort-1/Careers-In-Code-Student-Outcomes-Report-FINAL.pdf"}
        rel="noopener noreferrer"
        className={pageStyles.btnLink}
        target="_blank"
      >
        <Button className={classnames(pageStyles.blueButton, pageStyles.blueButtonMargin)}>
          {content.ui.outcomes.outcomes_jumbotron.button.outcomes_text}
        </Button>
      </a>

      <a
        href={"/outcomes/cohort-1/Careers-in-Code-Cohort-1-Outcomes-2-pager.pdf"}
        rel="noopener noreferrer"
        className={pageStyles.btnLink}
        target="_blank"
      >
        <Button className={classnames(pageStyles.blueButton, pageStyles.blueButtonMargin)}>
          {content.ui.outcomes.outcomes_jumbotron.button.consolidated_text}
        </Button>
      </a>

      <a
        href={"/outcomes/cohort-1/Careers-in-Code-Transparency-Report-Cohort-1.pdf"}
        rel="noopener noreferrer"
        className={pageStyles.btnLink}
        target="_blank"
      >
        <Button className={classnames(pageStyles.blueButton, pageStyles.blueButtonMargin)}>
          {content.ui.outcomes.outcomes_jumbotron.button.transparency_text}
        </Button>
      </a>
      </Row>
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
                <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.eva.button
                        .link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                    {
                      content.ui.outcomes.outcomes_main_content.cards.eva.button
                        .text
                    }
                </Button>
                </a>
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
                <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.kelly
                        .button.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                    {
                      content.ui.outcomes.outcomes_main_content.cards.kelly
                        .button.text
                    }
                </Button>
                </a>
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
                <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.dana
                        .button.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                    {
                      content.ui.outcomes.outcomes_main_content.cards.dana
                        .button.text
                    }
                </Button>
                </a>
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
                <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.elizabeth
                        .button.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                    {
                      content.ui.outcomes.outcomes_main_content.cards.elizabeth
                        .button.text
                    }
                </Button>
                </a>
              </CardBody>
            </Card>
          </Col>
        </CardDeck>
      </Row>
      {/* New Card Row */}
      <Row className={outcomesStyles.outcomesCardRow}>
        {/* Dakir Card */}
        <CardDeck>
          <Col sm="3">
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
                <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.dakir
                        .button.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                    {
                      content.ui.outcomes.outcomes_main_content.cards.dakir
                        .button.text
                    }
                </Button>
                </a>
              </CardBody>
            </Card>
          </Col>
          {/*Karin Card*/}
          <Col sm="3">
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
                <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.karin
                        .button.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                    {
                      content.ui.outcomes.outcomes_main_content.cards.karin
                        .button.text
                    }
                </Button>
                </a>
              </CardBody>
            </Card>
          </Col>
          {/* Kaitlyn Card */}
          <Col sm="3">
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
                <a
                    href={
                      content.ui.outcomes.outcomes_main_content.cards.kaitlyn
                        .button.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                    {
                      content.ui.outcomes.outcomes_main_content.cards.kaitlyn
                        .button.text
                    }
                </Button>
                </a>
              </CardBody>
            </Card>
          </Col>
           {/* Kaitlyn Card */}
           <Col sm="3">
            <Card body className={("shadow-sm", outcomesStyles.cardSize)}>
              <CardHeader tag="h3">
                Timothy Liles
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Tim}
                alt="Timothy Liles"
                className={outcomesStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={outcomesStyles.cardTitle}>
                    Web Design Specialist 
                  </p>
                </CardTitle>
                <CardText>
                  <p className={outcomesStyles.cardText}>
                    City of Syracuse (Syracuse, NY)
                  </p>
                </CardText>
                <a
                    href="https://hackupstate.medium.com/careers-in-code-student-success-stories-tim-liles-fea853fc1c50"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.btnLink}
                  >
                <Button size="sm" color="info">
                  Read Tim's Story
                </Button>
                </a>
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
            <sup>1</sup>
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
    <Container fluid className={pageStyles.whiteContainer}>
      <Row>
        <Col>
          <sup>{content.ui.classroom.students_stats.footnote_1_super}</sup>Data reflects outcomes from our first cohort
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
        <Col className={outcomesStyles.centerContentColumns}>
          <img
            src={Density}
            className={pageStyles.smLogo}
            alt="density-logo"
          />
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
          <img 
            src={Gypsum}
            className={pageStyles.smLogo}
            alt="gypsum-logo"
          />
        </Col>
        <Col className={outcomesStyles.centerContentColumns}>
          <img
            src={Raymour}
            className={pageStyles.smLogo}
            alt="raymour-flanigan-logo"
          />
        </Col>
        <Col className={outcomesStyles.centerContentColumns}>
          <img
            src={Syracuse}
            className={pageStyles.smLogo}
            alt="syracuse-logo"
          />
        </Col>
        <Col className={outcomesStyles.centerContentColumns}>
          <img
            src={Sidearm}
            className={pageStyles.smLogo}
            alt="Sidearm-logo"
          />
         </Col>
        </Row>
         <Row>
         <Col className={outcomesStyles.centerContentColumns}>
          <img
            src={cceo}
            className={pageStyles.smLogo}
            alt="CenterStateCEO-logo"
          />
        </Col>
        <Col className={outcomesStyles.centerContentColumns}>
          <img
            src={Kirkwork}
            className={pageStyles.smLogo}
            alt="kirkwork-logo"
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

    <Container fluid className={pageStyles.whiteContainer}>
      <Row className={bannerStyles.bannerWhite}>
        <Col className={pageStyles.centerText}>
          <img src={cirrLogo} alt="CIRR Logo"></img>
          <h3>Graduate Outcomes You Can Trust</h3>
          <p>As a CIRR certified school, we fully offer transparent results. CIRR is the industry standard for placement stats and we are commited to publishing trustworthy graduate outcomes.</p>
          <a
              href="https://cirr.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={testimonialStyles.btnLink}
            >
          <Button size="md" className={testimonialStyles.blueButton}>
              View CIRR Standards
          </Button>
          </a>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default OutcomesPage;
