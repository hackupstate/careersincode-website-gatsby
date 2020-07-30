import React from "react";
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
import alumniStyles from "./alumni.module.css";
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
    <Container fluid className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
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
    </Container>
    <Container fluid className={pageStyles.marginBottom}>
      <Row>
        <Col className={pageStyles.centerItems}>
          <iframe
            width={550}
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
      </Row>
      <Row>
        <Col className={pageStyles.centerItems}>
          <iframe
            width={550}
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
    </Container>
    <Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <h2> {content.ui.students.alumni.alumni_main_content.cards.header} </h2>
      </Row>
    </Container>
    <Container
      fluid
      className={(pageStyles.marginBottom, alumniStyles.alumniCardContainer)}
    >
      <Row className={alumniStyles.alumniCardRow}>
        {/* card deck begins */}
        <CardDeck>
          {/* ana aombe */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.ana.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Ana}
                alt="Ana Aombe"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={alumniStyles.cardTitle}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.ana.year
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.ana.capstone.title
                    }
                  </p>
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.ana.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>
                      {
                        content.ui.students.alumni.alumni_main_content.cards
                          .twentynineteen.ana.capstone.project
                      }
                    </p>
                  </a>
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
          </Col>
          {/* eva carafa */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.eva.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Eva}
                alt="Eva Carafa"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={alumniStyles.cardTitle}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.eva.year
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.eva.capstone.title
                    }
                  </p>
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.eva.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>
                      {
                        content.ui.students.alumni.alumni_main_content.cards
                          .twentynineteen.eva.capstone.project
                      }
                    </p>
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
          </Col>
          {/* kelly corey */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.kelly.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Kelly}
                alt="Kelly Corey"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={alumniStyles.cardTitle}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kelly.year
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kelly.capstone.title
                    }
                  </p>
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kelly.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>
                      {
                        content.ui.students.alumni.alumni_main_content.cards
                          .twentynineteen.kelly.capstone.project
                      }
                    </p>
                  </a>
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
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          {/* tim liles */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.tim.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Tim}
                alt="Tim Liles"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={alumniStyles.cardTitle}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.tim.year
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.tim.capstone.title
                    }
                  </p>
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.tim.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>
                      {
                        content.ui.students.alumni.alumni_main_content.cards
                          .twentynineteen.tim.capstone.project
                      }
                    </p>
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
          </Col>
          {/* dana mcmullen */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.dana.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Dana}
                alt="Dana McMullen"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={alumniStyles.cardTitle}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.dana.year
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.dana.capstone.title
                    }
                  </p>
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.dana.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>
                      {
                        content.ui.students.alumni.alumni_main_content.cards
                          .twentynineteen.dana.capstone.project
                      }
                    </p>
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
          </Col>
          {/* elizabeth metcalf */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.elizabeth.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Beth}
                alt="Elizabeth Metcalf"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={alumniStyles.cardTitle}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.year
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.title
                    }
                  </p>
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>
                      {
                        content.ui.students.alumni.alumni_main_content.cards
                          .twentynineteen.elizabeth.capstone.project
                      }
                    </p>
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
          </Col>
        </CardDeck>
      </Row>
      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          {/* dakir thompson */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.dakir.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Dakir}
                alt="Dakir Thompson"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={alumniStyles.cardTitle}>
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.dakir.year
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {" "}
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.dakir.capstone.title
                    }
                  </p>
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.dakir.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>
                      {
                        content.ui.students.alumni.alumni_main_content.cards
                          .twentynineteen.dakir.capstone.project
                      }
                    </p>
                  </a>
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
          </Col>
          {/* karin thorne */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.karin.name
                }{" "}
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Karin}
                alt="Karin Thorne"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={alumniStyles.cardTitle}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.karin.year
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.karin.capstone.title
                    }
                  </p>
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.karin.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>
                      {
                        content.ui.students.alumni.alumni_main_content.cards
                          .twentynineteen.karin.capstone.project
                      }
                    </p>
                  </a>
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
          </Col>
          {/* kate tortora */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.kate.name
                }{" "}
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Kate}
                alt="Kate Tortora"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={alumniStyles.cardTitle}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kate.year
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kate.capstone.title
                    }
                  </p>
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kate.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>
                      {
                        content.ui.students.alumni.alumni_main_content.cards
                          .twentynineteen.kate.capstone.project
                      }
                    </p>
                  </a>
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
          </Col>
        </CardDeck>
      </Row>
      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          <Col sm="4">
            {/* kaitlyn warboy */}
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.kaitlyn.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Kaitlyn}
                alt="Kaitlyn Warboy"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={alumniStyles.cardTitle}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kaitlyn.year
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kaitlyn.capstone.title
                    }
                  </p>
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.kaitlyn.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>
                      {
                        content.ui.students.alumni.alumni_main_content.cards
                          .twentynineteen.kaitlyn.capstone.project
                      }
                    </p>
                  </a>
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
          </Col>
          <Col sm="4">
            {/* jacquay winfield */}

            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.jacquay.name
                }{" "}
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Jacquay}
                alt="Jacquay Winfield"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={alumniStyles.cardTitle}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.jacquay.year
                    }{" "}
                  </p>
                </CardTitle>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.jacquay.capstone.title
                    }
                  </p>
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.jacquay.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>
                      {
                        content.ui.students.alumni.alumni_main_content.cards
                          .twentynineteen.jacquay.capstone.project
                      }
                    </p>
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
          </Col>
          <Col sm="4">
            {/* linda kovacs */}
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                {" "}
                {
                  content.ui.students.alumni.alumni_main_content.cards
                    .twentynineteen.linda.name
                }{" "}
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Linda}
                alt="Linda Kovacs"
                // className={alumniStyles.imgSize}
                style={{ height: "300px" }}
              />
              <CardBody>
                <CardTitle>
                  <p className={alumniStyles.cardTitle}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.linda.year
                    }
                  </p>
                </CardTitle>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.linda.capstone.title
                    }
                  </p>
                  <a
                    href={
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.linda.capstone.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>and Guest Speaker</p>
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
          </Col>
        </CardDeck>
      </Row>
      {/* card decks end */}
    </Container>
  </Layout>
);

export default AlumniPage;
