import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import NavComponent from "../components/nav"
import JumbotronComponent from "../components/jumbotron"
import JumboButton from "../components/jumboButton"
import SEO from "../components/seo"
import content from "../content/content.json"
import {
  Button,
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
} from "reactstrap"
import pageStyles from "./pages.module.css"
import {
  FaEnvelopeSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaGlobe,
} from "react-icons/fa"
import Jeff from "../images/instructors/jeff-passetti.jpg"
import Christy from "../images/instructors/christy_presler.jpg"
import Cash from "../images/tas/cash.jpg"
import Zoe from "../images/instructors/zoe.jpg"
import Jeremy from "../images/instructors/jeremyconn.jpg"
import Gus from "../images/instructors/gus.jpg"
import Max from "../images/instructors/max.jpg"
import Jake from "../images/instructors/jakebeard.jpg"
import Joey from "../images/instructors/joeybuczek.jpg"
import Ryan from "../images/instructors/ryangaus.png"
import Alice from "../images/tas/alicemiller.jpeg"
import Jennifer from "../images/tas/Jennifer-Tran.jpg"
import David from "../images/tas/davidbadillo.jpeg"
import Katie from "../images/tas/katiewatson.jpeg"
import Pankaj from "../images/tas/pankajc.jpeg"
import Drew from "../images/tas/drewknab.jpeg"
import Wesam from "../images/tas/wesamshanaa.png"
import Placeholder from "../images/tas/profile-placeholder.png"

const InstructorsPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.instructors.instructor_jumbotron.heading}
        subheading={content.ui.instructors.instructor_jumbotron.subheading}
      >
        <JumboButton
          btnLink={content.ui.instructors.instructor_jumbotron.button.link}
          btnText={content.ui.instructors.instructor_jumbotron.button.text}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Instructors" />
    <Container>
      {/* overlay */}
      <div className={pageStyles.greyTechGarden}>
        <Row className={pageStyles.pageContentContainer}>
          <Col>
            <h3 className={pageStyles.instructorStats}>
              {" "}
              {
                content.ui.instructors.instructor_main_content.overlay
                  .opportunity.header
              }{" "}
            </h3>
            <p className={pageStyles.blueParaStats}>
              {" "}
              {
                content.ui.instructors.instructor_main_content.overlay
                  .opportunity.subheader
              }{" "}
            </p>
          </Col>
          <Col>
            <h3 className={pageStyles.instructorStats}>
              {" "}
              {
                content.ui.instructors.instructor_main_content.overlay.change
                  .header
              }{" "}
            </h3>
            <p className={pageStyles.greenParaStats}>
              {" "}
              {
                content.ui.instructors.instructor_main_content.overlay.change
                  .subheader
              }{" "}
            </p>
          </Col>
        </Row>
        <Row className={pageStyles.pageContentContainer}>
          <Col>
            <h3 className={pageStyles.instructorStats}>
              {" "}
              {
                content.ui.instructors.instructor_main_content.overlay.success
                  .header
              }{" "}
            </h3>
            <p className={pageStyles.greenParaStats}>
              {" "}
              {
                content.ui.instructors.instructor_main_content.overlay.success
                  .subheader
              }{" "}
            </p>
          </Col>
          <Col>
            <h3 className={pageStyles.instructorStats}>
              {" "}
              {
                content.ui.instructors.instructor_main_content.overlay.measure
                  .header
              }{" "}
            </h3>
            <p className={pageStyles.blueParaStats}>
              {" "}
              {
                content.ui.instructors.instructor_main_content.overlay.measure
                  .subheader
              }{" "}
            </p>
          </Col>
        </Row>
      </div>
      {/* instructor/ta info w/ buttons */}
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h3>
            {" "}
            {
              content.ui.instructors.instructor_main_content.buttons.instructor
                .header
            }{" "}
          </h3>
          <p>
            {" "}
            {
              content.ui.instructors.instructor_main_content.buttons.instructor
                .text
            }{" "}
          </p>
          <Button className={pageStyles.blueButton}>
            <a
              href={
                content.ui.instructors.instructor_main_content.buttons
                  .instructor.apply.link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {
                content.ui.instructors.instructor_main_content.buttons
                  .instructor.apply.text
              }
            </a>
          </Button>
          <Col>
            <Button className={pageStyles.blueButton}>
              <a
                href={
                  content.ui.instructors.instructor_main_content.buttons
                    .instructor.responsibilities.link
                }
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.btnLink}
              >
                {
                  content.ui.instructors.instructor_main_content.buttons
                    .instructor.responsibilities.text
                }
              </a>
            </Button>
          </Col>
          <Col>
            <Button className={pageStyles.blueButton}>
              <a
                href={
                  content.ui.instructors.instructor_main_content.buttons
                    .instructor.admissions.link
                }
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.btnLink}
              >
                {
                  content.ui.instructors.instructor_main_content.buttons
                    .instructor.admissions.text
                }
              </a>
            </Button>
          </Col>
        </Col>
      </Row>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h3>
            {" "}
            {
              content.ui.instructors.instructor_main_content.buttons.ta.header
            }{" "}
          </h3>
          <p>
            {" "}
            {
              content.ui.instructors.instructor_main_content.buttons.ta.text
            }{" "}
          </p>
          <Col>
            <Button className={pageStyles.blueButton}>
              <a
                href={
                  content.ui.instructors.instructor_main_content.buttons.ta
                    .apply.link
                }
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.btnLink}
              >
                {
                  content.ui.instructors.instructor_main_content.buttons.ta
                    .apply.text
                }
              </a>
            </Button>
          </Col>
          <Col>
            <Button className={pageStyles.blueButton}>
              <a
                href={
                  content.ui.instructors.instructor_main_content.buttons.ta
                    .responsibilities.link
                }
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.btnLink}
              >
                {
                  content.ui.instructors.instructor_main_content.buttons.ta
                    .responsibilities.text
                }
              </a>
            </Button>
          </Col>
        </Col>
      </Row>
      <div className="bg-light">
        {/* instructor cards */}
        <Row className={pageStyles.pageContentContainer}>
          <Col>
            <h1>
              {" "}
              {
                content.ui.instructors.instructor_main_content.cohort_one
                  .instructor.header
              }{" "}
            </h1>
            <CardDeck>
              {/* jeff passetti */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jeff.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Jeff} alt="Jeff Passetti" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeff.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeff.modules.one.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeff.modules.one.text
                      }{" "}
                    </a>{" "}
                    |{" "}
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeff.modules.two.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeff.modules.two.text
                      }{" "}
                    </a>
                  </CardTitle>
                  <CardText>
                    <p>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeff.position.text
                      }
                      <a
                        href={
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.jeff.position.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.jeff.position.link_text
                        }{" "}
                      </a>{" "}
                    </p>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeff.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeff.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeff.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeff.social.website
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGlobe />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeff.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* christy presler */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.christy.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Christy} alt="Christy Presler" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.christy.modules.text
                    }
                  </CardTitle>
                  <CardText>
                    <p>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.christy.position.text
                      }
                      <a
                        href={
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.christy.position.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.christy.position
                            .link_text
                        }{" "}
                      </a>{" "}
                    </p>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.christy.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.christy.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.christy.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.christy.social.website
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGlobe />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.christy.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* cashley saintilus */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.cash.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Cash} alt="Cashley Saintilus" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.cash.modules.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.cash.modules.link_text
                      }{" "}
                    </a>
                  </CardTitle>
                  <CardText>
                    <p>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.cash.position.text
                      }
                      <a
                        href={
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.cash.position.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.cash.position.link_text
                        }{" "}
                      </a>{" "}
                    </p>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.social.website
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGlobe />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.social.github
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
              {/* zoe koulouris augustinos */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.zoe.name
                  }
                </CardHeader>
                <CardImg
                  top
                  width="100%"
                  src={Zoe}
                  alt="Zoe Koulouris Augustinos"
                />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.zoe.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.zoe.modules.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.zoe.modules.link_text
                      }{" "}
                    </a>
                  </CardTitle>
                  <CardText>
                    <p>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.zoe.position.text
                      }
                      <a
                        href={
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.zoe.position.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.zoe.position.link_text
                        }{" "}
                      </a>{" "}
                    </p>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.zoe.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.zoe.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.zoe.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.zoe.social.website
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGlobe />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.zoe.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* jeremy conn */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jeremy.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Jeremy} alt="Jeremy Conn" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeremy.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeremy.modules.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeremy.modules.link_text
                      }{" "}
                    </a>
                  </CardTitle>
                  <CardText>
                    <p>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeremy.position.text
                      }
                      <a
                        href={
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.jeremy.position.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.jeremy.position
                            .link_text
                        }{" "}
                      </a>{" "}
                    </p>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeremy.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeremy.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeremy.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeremy.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* gus cost */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.gus.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Gus} alt="Gus Cost" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.gus.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.four.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.four.text
                      }{" "}
                    </a>{" "}
                    |
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.six.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.six.text
                      }{" "}
                    </a>{" "}
                    |
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.seven.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.seven.text
                      }{" "}
                    </a>{" "}
                    |
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.eight.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.eight.text
                      }{" "}
                    </a>
                  </CardTitle>
                  <CardText>
                    <p>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.position.text
                      }
                      <a
                        href={
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.gus.position.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.gus.position.link_text
                        }{" "}
                      </a>{" "}
                    </p>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.gus.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.gus.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.gus.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.gus.social.website
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGlobe />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.gus.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                  <br />
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.gus.office_hours.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={pageStyles.blueButton}>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.office_hours.text
                      }{" "}
                    </Button>{" "}
                  </a>
                </CardFooter>
              </Card>
            </CardDeck>
          </Col>
        </Row>

        <Row className={pageStyles.pageContentContainer}>
          <Col>
            <CardDeck>
              {/* max matthews */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.max.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Max} alt="Max Matthews" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.max.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.modules.four.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.modules.four.text
                      }{" "}
                    </a>{" "}
                    |
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.modules.six.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.modules.six.text
                      }{" "}
                    </a>{" "}
                    |
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.modules.seven.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.modules.seven.text
                      }{" "}
                    </a>{" "}
                    |
                    {/* <a href={content.ui.instructors.instructor_main_content.cohort_one.instructor.cards.max.modules.ten.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      {content.ui.instructors.instructor_main_content.cohort_one.instructor.cards.gus.modules.ten.text} </a> */}
                  </CardTitle>
                  <CardText>
                    <p>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.position.text
                      }
                      <a
                        href={
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.max.position.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.max.position.link_text
                        }{" "}
                      </a>{" "}
                    </p>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.max.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.max.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.max.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.max.social.website
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGlobe />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.max.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                  <br />
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.max.office_hours.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={pageStyles.blueButton}>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.office_hours.text
                      }{" "}
                    </Button>{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* jake beard */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jake.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Jake} alt="Jake Beard" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jake.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jake.modules.four.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jake.modules.four.text
                      }{" "}
                    </a>{" "}
                    |
                    {/* <a href={content.ui.instructors.instructor_main_content.cohort_one.instructor.cards.jake.modules.ten.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      {content.ui.instructors.instructor_main_content.cohort_one.instructor.cards.jake.modules.ten.text} </a> */}
                  </CardTitle>
                  <CardText>
                    <p>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jake.position.text
                      }
                      <a
                        href={
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.jake.position.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.jake.position.link_text
                        }{" "}
                      </a>{" "}
                    </p>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jake.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jake.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jake.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jake.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* joey buczek */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.joey.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Joey} alt="Joey Buczek" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.joey.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.joey.modules.four.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.joey.modules.four.text
                      }{" "}
                    </a>{" "}
                    |
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.joey.modules.eleven.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.joey.modules.eleven.text
                      }{" "}
                    </a>
                  </CardTitle>
                  <CardText>
                    <p>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.joey.position.text
                      }
                      <a
                        href={
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.joey.position.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.joey.position.link_text
                        }{" "}
                      </a>{" "}
                    </p>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.joey.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.joey.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.joey.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.joey.social.github
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
              {/* ryan gaus */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.ryan.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Ryan} alt="Ryan Gaus" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.ryan.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.ryan.modules.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.ryan.modules.link_text
                      }{" "}
                    </a>
                  </CardTitle>
                  <CardText>
                    <p>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.ryan.position.text
                      }
                      <a
                        href={
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.ryan.position.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.ryan.position.link_text
                        }{" "}
                      </a>{" "}
                    </p>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.ryan.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.ryan.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.ryan.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.ryan.social.website
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGlobe />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.ryan.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* alice miller */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.alice.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Alice} alt="Alice Miller" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.alice.modules.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.alice.modules.link_text
                      }{" "}
                    </a>
                  </CardTitle>
                  <CardText>
                    <p>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.alice.position.text
                      }
                      <a
                        href={
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.alice.position.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {
                          content.ui.instructors.instructor_main_content
                            .cohort_one.instructor.cards.alice.position
                            .link_text
                        }{" "}
                      </a>{" "}
                    </p>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                  <br />
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.office_hours.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={pageStyles.blueButton}>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.alice.office_hours.text
                      }{" "}
                    </Button>{" "}
                  </a>
                </CardFooter>
              </Card>
            </CardDeck>
            <div style={{ marginTop: 50 }}>
              <a
                href={
                  content.ui.instructors.instructor_main_content.cohort_one
                    .instructor.button.link
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className={pageStyles.blueButton}>
                  {" "}
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.button.text
                  }{" "}
                </Button>{" "}
              </a>
            </div>
          </Col>
        </Row>
      </div>
      {/* ta cards */}
      <div className="bg-light">
        <Row className={pageStyles.pageContentContainer}>
          <Col>
            <h1>
              {" "}
              {
                content.ui.instructors.instructor_main_content.cohort_one.ta
                  .header
              }{" "}
            </h1>
            <CardDeck>
              {/* jennifer tran */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.jennifer.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Jennifer} alt="Jennifer Tran" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.jennifer.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.jennifer.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.jennifer.position.link_text
                      }
                    </a>
                  </CardTitle>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.jennifer.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.jennifer.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.jennifer.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.jennifer.social.website
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGlobe />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.jennifer.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* cashley saintilus */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.cash.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Cash} alt="Cashley Saintilus" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.cash.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.cash.position.link_text
                      }
                    </a>
                  </CardTitle>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.social.website
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGlobe />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* david badillo */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.david.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={David} alt="David Badillo" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.david.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.david.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.david.position.link_text
                      }
                    </a>
                  </CardTitle>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.david.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.david.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.david.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                </CardFooter>
              </Card>
            </CardDeck>
          </Col>
        </Row>

        <Row className={pageStyles.pageContentContainer}>
          <Col>
            <CardDeck>
              {/* jeremy conn */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jeremy.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Jeremy} alt="Jeremy Conn" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeremy.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeremy.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeremy.position.link_text
                      }
                    </a>
                  </CardTitle>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeremy.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeremy.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeremy.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeremy.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* katie watson */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.katie.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Katie} alt="Katie Watson" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.katie.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.katie.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.katie.position.link_text
                      }
                    </a>
                  </CardTitle>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.katie.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* pankaj chandiramani  */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.pankaj.name
                  }
                </CardHeader>
                <CardImg
                  top
                  width="100%"
                  src={Pankaj}
                  alt="Pankaj Chandiramani"
                />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.pankaj.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.pankaj.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.pankaj.position.link_text
                      }
                    </a>
                  </CardTitle>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.pankaj.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.pankaj.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                </CardFooter>
              </Card>
            </CardDeck>
          </Col>
        </Row>

        <Row className={pageStyles.pageContentContainer}>
          <Col>
            <CardDeck>
              {/* drew knab */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.drew.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Drew} alt="Drew Knab" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.drew.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.drew.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.drew.position.link_text
                      }
                    </a>
                  </CardTitle>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.drew.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.drew.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.drew.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.drew.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* wesam shanaa */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.wesam.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Wesam} alt="Wesam Shanaa" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.wesam.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.wesam.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.wesam.position.link_text
                      }
                    </a>
                  </CardTitle>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.wesam.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.wesam.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                </CardFooter>
              </Card>
              {/* alice miller */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.alice.name
                  }
                </CardHeader>
                <CardImg top width="100%" src={Alice} alt="Alice Miller" />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.alice.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.alice.position.link_text
                      }
                    </a>
                  </CardTitle>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                  <br />
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.office_hours.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={pageStyles.blueButton}>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.alice.office_hours.text
                      }{" "}
                    </Button>{" "}
                  </a>
                </CardFooter>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row className={pageStyles.pageContentContainer}>
          <Col>
            <CardDeck>
              {/* garnet grimm */}
              <Card body className="shadow-sm">
                <CardHeader tag="h3">
                  {
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.garnet.name
                  }
                </CardHeader>
                <CardImg
                  top
                  width="100%"
                  src={Placeholder}
                  alt="Placeholder profile pic"
                />
                <CardBody>
                  <CardTitle>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.garnet.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.garnet.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.garnet.position.link_text
                      }
                    </a>
                  </CardTitle>
                </CardBody>
                <CardFooter>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.garnet.social.email
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaEnvelopeSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.garnet.social.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLinkedin />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.garnet.social.twitter
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaTwitterSquare />{" "}
                  </a>
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.garnet.social.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithubSquare />{" "}
                  </a>
                  <br />
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.garnet.office_hours.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={pageStyles.blueButton}>
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.garnet.office_hours.text
                      }{" "}
                    </Button>{" "}
                  </a>
                </CardFooter>
              </Card>
            </CardDeck>
            <div style={{ marginTop: 50 }}>
              <a
                href={
                  content.ui.instructors.instructor_main_content.cohort_one.ta
                    .button.link
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className={pageStyles.blueButton}>
                  {" "}
                  {
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .button.text
                  }{" "}
                </Button>{" "}
              </a>
            </div>
          </Col>
        </Row>
      </div>

      <Link to="/">Go Home</Link>
    </Container>
  </Layout>
)

export default InstructorsPage
