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

import pageStyles from "./pages.module.css";
import alumniStyles from "./alumni.module.css";
import content from "../content/content.json";

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

import Ariel from "../images/students/cohort-2/ariel.png";
import brandy from "../images/students/cohort-2/brandy.jpg";
import brielle from "../images/students/cohort-2/brielle.jpg";
import carolyn from "../images/students/cohort-2/carolyn.png";
import dominique from "../images/students/cohort-2/dominique.png";
import elina from "../images/students/cohort-2/elina.jpeg";
import Fobelia from "../images/students/cohort-2/Fobelia.png";
import jaheal from "../images/students/cohort-2/jaheal.jpg";
import karen from "../images/students/cohort-2/karen.jpg";
import kyle from "../images/students/cohort-2/kyle.jpg";
import latonia from "../images/students/cohort-2/latonia.png";
import mel from "../images/students/cohort-2/mel.jpg";
import sara from "../images/students/cohort-2/sara.png";
import shah from "../images/students/cohort-2/shah.jpg";
import shantina from "../images/students/cohort-2/shantina.png";
import susan from "../images/students/cohort-2/susan.jpg";

const AlumniPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.students.alumni.alumni_jumbotron.heading}
        subheading={content.ui.students.alumni.alumni_jumbotron.subheading}
      >
        {/* <JumboButton
          btnLink={content.ui.students.alumni.alumni_jumbotron.button.link}
          btnText={content.ui.students.alumni.alumni_jumbotron.button.text}
        /> */}
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
        </Col>
      </Row>
    </Container>

    <Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <h2>Watch our cohort 2 capstone presentations</h2>
      </Row>
    </Container>
    <Container fluid className={pageStyles.marginBottom}>
      <Row>
        <Col className={pageStyles.centerItems}>
          <iframe
            width={550}
            height={315}
            src="https://www.youtube.com/embed/-qUJ2Taa8og"
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
    </Container>
    <Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <h2 className="mb-0"> Cohort 2 Alumni </h2>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <h3 className="mt-0">Graduated on August 26th, 2021</h3>
      </Row>
    </Container>
    <Container
      fluid
      className={(pageStyles.marginBottom, alumniStyles.alumniCardContainer)}
    >
      <Row className={alumniStyles.alumniCardRow}>
        {/* card deck begins */}
        <CardDeck>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Ariel Murphy
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Ariel}
                alt="#"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.title
                    }
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=-qUJ2Taa8og&t=4759s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>Flirt First</p>
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href="mailto:arielladders@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/ariellouise/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
            
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Brandy Mack
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={brandy}
                alt="#"
                className={alumniStyles.imgSize}
              />
                            <CardBody>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.title
                    }
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=-qUJ2Taa8og&t=1570s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>Syro-Waste Directory</p>
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href="mailto:ilovemybagelbutt@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/brandy-m-44a780198/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Brielle Dailey
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={brielle}
                alt="#"
                className={alumniStyles.imgSize}
              />
                            <CardBody>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.title
                    }
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=-qUJ2Taa8og&t=1953s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>I Love CNY</p>
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href="mailto:brielledailey@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/brielle-dailey-04852420b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Dominique Wynn
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={dominique}
                alt="#"
                className={alumniStyles.imgSize}
              />
                            <CardBody>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.title
                    }
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=-qUJ2Taa8og&t=2327s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>Blvck Blossom Vibee</p>
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href="mailto:nevawynn@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Jaheal Smith
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={jaheal}
                alt="#"
                className={alumniStyles.imgSize}
              />
                <CardBody>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.title
                    }
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=-qUJ2Taa8og&t=5408s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>Grammar Goblin</p>
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href="mailto:jahealsmith@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/jaheal-smith-171a04114/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Kyle Gilbert
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={kyle}
                alt="#"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.title
                    }
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=-qUJ2Taa8og&t=2906s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>Walkumentary</p>
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href="mailto:kgilbert78@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/kyle-gilbert-cny/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
            
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
         
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                La'Tonia Mertica Sheppard Walker
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={latonia}
                alt="#"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.title
                    }
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=-qUJ2Taa8og&t=3459s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>CREAS CRAVE</p>
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href="mailto:latoniamertica@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/latoniamertica/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Melaquan Saffold
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={mel}
                alt="#"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.title
                    }
                  </p>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>The Better Gift Depot</p>
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href="mailto:melaquansaffold@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/melaquan-saffold-48b71745/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
                    {/* student name */}
                    <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Sara Dow
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={sara}
                alt="#"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.title
                    }
                  </p>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>Hello Syracuse</p>
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href="mailto:sarajanedw@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/sara-dow/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          {/* student name */}
          <Col sm="6">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Shah Mansoor
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={shah}
                alt="#"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.title
                    }
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=-qUJ2Taa8og&t=4208s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>Professional and Personalized Interpreting Services</p>
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href="mailto:mansoorsha@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/shahm19/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Susan Baiter
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={susan}
                alt="#"
                className={alumniStyles.imgSize}
              />
              <CardBody>
                <CardText>
                  <p className={alumniStyles.cardText}>
                    {
                      content.ui.students.alumni.alumni_main_content.cards
                        .twentynineteen.elizabeth.capstone.title
                    }
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=-qUJ2Taa8og&t=1143s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className={alumniStyles.cardText}>Music Festivals of New York State</p>
                  </a>{" "}
                </CardText>
              </CardBody>
              <CardFooter>
                {" "}
                <a
                  href="mailto:susanbaiter@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/susan-baiter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>
      {/* card decks end */}
    </Container>

    <Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <h2>Watch our cohort 1 capstone presentations</h2>
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
