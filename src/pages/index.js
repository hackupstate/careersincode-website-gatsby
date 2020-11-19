import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import Banner from "../components/banner";

import BottomRowContainer from "../components/bottomrowcontainer";
import {
  Container,
  Button,
  Row,
  Col,
  CardDeck,
  Card,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Joey from "../images/instructors/joeybuczek.jpg";
import Kelly from "../images/students/kellycorey.jpg";
import Doug from "../images/team/dougcrescenzi.png";
import content from "../content/content.json";
import cardStyles from "../components/card.module.css";
import pageStyles from "./pages.module.css";
import bannerStyles from "../components/banner.module.css";
import testimonialStyles from "./testimonials.module.css";
import cirrLogo from "../images/partners/cirr_50.png";

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
            href={content.ui.index_banner_announce.link}
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.bannerLink}
          >
            {content.ui.index_banner_announce.text}{" "}
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </Col>
      </Row>
    </Banner>
    <Container fluid className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <Col className={pageStyles.centerContentColumns}>
          <h3> {content.ui.index_main_content_top_text.copy}</h3>
          <p> {content.ui.index_main_content_top_text.description} </p>
          <a
              href="https://medium.com/@hackupstate/announcing-hack-upstates-careers-in-code-a8ff0bfeddbf"
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
          <Button className={pageStyles.blueButton}>
              {" "}
              {content.ui.index_main_content_top_text.button}{" "}
          </Button>
          </a>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col className={pageStyles.centerContentColumns}>
          <h3> {content.ui.index_main_content_bottom_text.copy} </h3>
          <p> {content.ui.index_main_content_bottom_text.description} </p>
          <a
              href={content.ui.index_main_content_bottom_text.link}
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
          <Button className={pageStyles.blueButton}>
              {content.ui.index_main_content_bottom_text.button}
          </Button>
          </a>
        </Col>
      </Row>
    </Container>
         
    <Container fluid className={testimonialStyles.blueContainer}>
      <Row>
        <CardDeck>
          <Col sm="4">
            <Card body className={("shadow-sm", testimonialStyles.cardStyle)}>
              <CardImg
                top
                width="100%"
                src={Doug}
                alt="Doug Crescenzi"
                className={testimonialStyles.cardImg}
              />
              <CardText>
                <p className={testimonialStyles.cardText}>
                  {content.ui.index_main_content_testimonials_one.snippet}
                </p>
              </CardText>
              <CardTitle>
                <p className={testimonialStyles.cardTitle}>
                  {content.ui.index_main_content_testimonials_one.name}
                </p>
              </CardTitle>
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", testimonialStyles.cardStyle)}>
              <CardImg
                top
                width="100%"
                src={Kelly}
                alt="Kelly Corey"
                className={testimonialStyles.cardImg}
              />
              <CardText>
                <p className={testimonialStyles.cardText}>
                  {content.ui.index_main_content_testimonials_two.snippet}
                </p>
              </CardText>
              <CardTitle>
                <p className={testimonialStyles.cardTitle}>
                  {content.ui.index_main_content_testimonials_two.name}
                </p>
              </CardTitle>
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", testimonialStyles.cardStyle)}>
              <CardImg
                top
                width="100%"
                src={Joey}
                alt="Joey Buzcek"
                className={testimonialStyles.cardImg}
              />
              <CardText>
                <p className={testimonialStyles.cardText}>
                  {content.ui.index_main_content_testimonials_three.snippet}
                </p>
              </CardText>
              <CardTitle>
                <p className={testimonialStyles.cardTitle}>
                  {content.ui.index_main_content_testimonials_three.name}
                </p>
              </CardTitle>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={testimonialStyles.buttonRow}>
        <Col>
        <a
              href={content.ui.index_main_content_testimonials_button.link}
              rel="noopener noreferrer"
              className={testimonialStyles.btnLink}
            >
          <Button size="md" className={testimonialStyles.blueButton}>
              {content.ui.index_main_content_testimonials_button.copy}
          </Button>
          </a>
        </Col>
      </Row>
    </Container>

    <Container fluid className={pageStyles.whiteContainer}>
      <Row className={bannerStyles.bannerWhite}>
        <Col className={pageStyles.centerText}>
        <h2 className={pageStyles.outcomes}>Our Cohort 1 Students Saw Results</h2>
          <p>We graduated 11 students on August 22, 2019 with the following outcomes.</p>
          <Row className={cardStyles.row}>
          <Card className={cardStyles.card}>
            <span className={cardStyles.stat}>91%</span>
            <span className={cardStyles.value}>Graduation Rate</span>
          </Card>
          <Card className={cardStyles.card}>
          <span className={cardStyles.stat}>63%</span>
          <span className={cardStyles.value}>Placement Rate</span>
          </Card>
          <Card className={cardStyles.card}>
          <span className={cardStyles.stat}>56%</span>
          <span className={cardStyles.value}>Salary Increase</span>
          </Card>
          <Card className={cardStyles.card}>
          <span className={cardStyles.stat}>$45,490</span>
          <span className={cardStyles.value}>Average Starting Salary</span>
          </Card>
          </Row>
          <a
              href="https://careersincode.org/Careers-in-Code-Cohort-1-Outcomes-2-pager.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={testimonialStyles.btnLink}
            >
          <Button size="md" className={testimonialStyles.blueButton}>
              View Cohort 1 Outcomes
          </Button>
          </a>
          </Col>
      </Row>
    </Container>
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

    <Container fluid className={pageStyles.blueContainer}>
      <Row className={bannerStyles.bannerWhite}>
        <Col className={pageStyles.centerText}>
          <h3>A Curriculum Informed by Local Employers</h3>
          <p>We partner with local employers to develop and provide feedback on our curriculum.</p>
          <a
              href="/partner"
              rel="noopener noreferrer"
              className={testimonialStyles.btnLink}
            >
          <Button size="md" className={testimonialStyles.blueButton}>
              Partners
          </Button>
          </a>
        </Col>
      </Row>
    </Container>

    <BottomRowContainer />
  </Layout>
);

export default IndexPage;
