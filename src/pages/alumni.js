import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  CardFooter,
} from "reactstrap";
import {
  FaEnvelopeSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaGlobe,
  FaIdCard,
  FaColumns,
} from "react-icons/fa";
import Ana from "../images/students/ana.jpg";
import Eva from "../images/students/eva.jpg";
import Kelly from "../images/students/kellycorey.jpg";
import Tim from "../images/students/tim.jpeg";
import Dana from "../images/students/dana.jpg";
import Beth from "../images/students/beth.jpg";
import Dakir from "../images/students/dakir.jpg";
import Karin from "../images/students/karin.jpg";
import Kate from "../images/students/kate.jpg";
import Kaitlyn from "../images/students/kaitlyn.jpg";
import Jacquay from "../images/students/jacquay.jpg";
import Linda from "../images/students/lindakovacs.jpeg";
import pageStyles from "./pages.module.css";
import content from "../content/content.json";

const AlumniPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.students.alumni.alumni_jumbotron.heading}
        subheading={content.ui.students.alumni.alumni_jumbotron.subheading}
      >
        <JumboButton
          btnLink={content.ui.students.alumni.alumni_jumbotron.button.link}
          btnText={content.ui.students.alumni.alumni_jumbotron.button.text}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Alumni" />
    <Container>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h1>
            {" "}
            {
              content.ui.students.alumni.alumni_main_content.congratulations
                .header
            }{" "}
          </h1>
          <h4>
            {" "}
            {
              content.ui.students.alumni.alumni_main_content.congratulations
                .subheader
            }{" "}
          </h4>
        </Col>
      </Row>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <iframe
            width={560}
            height={315}
            src={
              content.ui.students.alumni.alumni_main_content.congratulations
                .capstone_link
            }
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={
              content.ui.students.alumni.alumni_main_content.congratulations
                .capstone_title
            }
          ></iframe>
        </Col>
        <Col>
          <iframe
            width={560}
            height={315}
            src={
              content.ui.students.alumni.alumni_main_content.congratulations
                .recap_link
            }
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={
              content.ui.students.alumni.alumni_main_content.congratulations
                .recap_title
            }
          ></iframe>
        </Col>
      </Row>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h2>
            {" "}
            {content.ui.students.alumni.alumni_main_content.cards.header}{" "}
          </h2>
          {/* card deck begins */}
          <CardDeck>
            {/* ana aombe */}
            <Card body className="text-center">
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.ana.name
                }{" "}
              </CardHeader>
              <CardImg top width="100%" src={Ana} alt="Ana Aombe" />
              <CardBody>
                <CardTitle>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.ana.year
                  }{" "}
                </CardTitle>
                <CardText>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.ana.capstone.title
                  }{" "}
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.ana.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.ana.capstone.project
                    }{" "}
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.ana.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.ana.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
            {/* eva carafa */}
            <Card body className="text-center">
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.eva.name
                }{" "}
              </CardHeader>
              <CardImg top width="100%" src={Eva} alt="Eva Carafa" />
              <CardBody>
                <CardTitle>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.eva.year
                  }{" "}
                </CardTitle>
                <CardText>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.eva.capstone.title
                  }{" "}
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.eva.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.eva.capstone.project
                    }{" "}
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.eva.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.eva.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.eva.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
            {/* kelly corey */}
            <Card body className="text-center">
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.kelly.name
                }{" "}
              </CardHeader>
              <CardImg top width="100%" src={Kelly} alt="Kelly Corey" />
              <CardBody>
                <CardTitle>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kelly.year
                  }{" "}
                </CardTitle>
                <CardText>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kelly.capstone.title
                  }{" "}
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kelly.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kelly.capstone.project
                    }{" "}
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kelly.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kelly.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kelly.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kelly.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kelly.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kelly.social.capstone
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaColumns />{" "}
                </a>
              </CardFooter>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <CardDeck>
            {/* tim liles */}
            <Card body className="text-center">
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.tim.name
                }{" "}
              </CardHeader>
              <CardImg top width="100%" src={Tim} alt="Tim Liles" />
              <CardBody>
                <CardTitle>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.tim.year
                  }{" "}
                </CardTitle>
                <CardText>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.tim.capstone.title
                  }{" "}
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.tim.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.tim.capstone.project
                    }{" "}
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.tim.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.tim.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.tim.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
            {/* dana mcmullen */}
            <Card body className="text-center">
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.dana.name
                }{" "}
              </CardHeader>
              <CardImg top width="100%" src={Dana} alt="Dana McMullen" />
              <CardBody>
                <CardTitle>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.dana.year
                  }{" "}
                </CardTitle>
                <CardText>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.dana.capstone.title
                  }{" "}
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.dana.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.dana.capstone.project
                    }{" "}
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.dana.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.dana.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.dana.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.dana.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.dana.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
            {/* elizabeth metcalf */}
            <Card body className="text-center">
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.elizabeth.name
                }{" "}
              </CardHeader>
              <CardImg top width="100%" src={Beth} alt="Elizabeth Metcalf" />
              <CardBody>
                <CardTitle>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.elizabeth.year
                  }{" "}
                </CardTitle>
                <CardText>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.elizabeth.capstone.title
                  }{" "}
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.project
                    }{" "}
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.elizabeth.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.elizabeth.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.elizabeth.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.elizabeth.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <CardDeck>
            {/* dakir thompson */}
            <Card body className="text-center">
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.dakir.name
                }{" "}
              </CardHeader>
              <CardImg top width="100%" src={Dakir} alt="Dakir Thompson" />
              <CardBody>
                <CardTitle>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.dakir.year
                  }{" "}
                </CardTitle>
                <CardText>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.dakir.capstone.title
                  }{" "}
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.dakir.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.dakir.capstone.project
                    }{" "}
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.dakir.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.dakir.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.dakir.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
            {/* karin thorne */}
            <Card body className="text-center">
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.karin.name
                }{" "}
              </CardHeader>
              <CardImg top width="100%" src={Karin} alt="Karin Thorne" />
              <CardBody>
                <CardTitle>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.karin.year
                  }{" "}
                </CardTitle>
                <CardText>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.karin.capstone.title
                  }{" "}
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.karin.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.karin.capstone.project
                    }{" "}
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.karin.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.karin.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.karin.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.karin.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.karin.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.karin.social.resume
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaIdCard />{" "}
                </a>
              </CardFooter>
            </Card>
            {/* kate tortora */}
            <Card body className="text-center">
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.kate.name
                }{" "}
              </CardHeader>
              <CardImg top width="100%" src={Kate} alt="Kate Tortora" />
              <CardBody>
                <CardTitle>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kate.year
                  }{" "}
                </CardTitle>
                <CardText>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kate.capstone.title
                  }{" "}
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kate.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kate.capstone.project
                    }{" "}
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kate.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kate.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kate.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kate.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kate.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <CardDeck>
            {/* kaitlyn warboy */}
            <Card body className="text-center">
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.kaitlyn.name
                }{" "}
              </CardHeader>
              <CardImg top width="100%" src={Kaitlyn} alt="Kaitlyn Warboy" />
              <CardBody>
                <CardTitle>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kaitlyn.year
                  }{" "}
                </CardTitle>
                <CardText>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kaitlyn.capstone.title
                  }{" "}
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kaitlyn.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kaitlyn.capstone.project
                    }{" "}
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kaitlyn.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kaitlyn.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kaitlyn.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kaitlyn.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kaitlyn.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kaitlyn.social.capstone
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaColumns />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.kaitlyn.social.resume
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaIdCard />{" "}
                </a>
              </CardFooter>
            </Card>
            {/* jacquay winfield */}
            <Card body className="text-center">
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.jacquay.name
                }{" "}
              </CardHeader>
              <CardImg top width="100%" src={Jacquay} alt="Jacquay Winfield" />
              <CardBody>
                <CardTitle>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.jacquay.year
                  }{" "}
                </CardTitle>
                <CardText>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.jacquay.capstone.title
                  }{" "}
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.jacquay.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.jacquay.capstone.project
                    }{" "}
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.jacquay.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.jacquay.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.jacquay.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.jacquay.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.jacquay.social.capstone
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaColumns />{" "}
                </a>
              </CardFooter>
            </Card>
            {/* linda kovacs */}
            <Card body className="text-center">
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.linda.name
                }{" "}
              </CardHeader>
              <CardImg top width="100%" src={Linda} alt="Linda Kovacs" />
              <CardBody>
                <CardTitle>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.linda.year
                  }{" "}
                </CardTitle>
                <CardText>
                  {" "}
                  {
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.linda.capstone.title
                  }{" "}
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.linda.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.linda.capstone.project
                    }{" "}
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.linda.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.linda.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.linda.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.students.alumni.alumni_main_content.cards
                      .twentynineteen.linda.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </CardDeck>
        </Col>
      </Row>
      {/* card decks end */}
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <Link to="/">Go Home</Link>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default AlumniPage;
