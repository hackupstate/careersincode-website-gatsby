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
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import pageStyles from "./pages.module.css";
import objectivesStyles from "./objectives.module.css";
import content from "../content/content.json";

const Objectives2019 = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.objectives2019.objectives2019_jumbotron.heading}
        subheading={
          content.ui.objectives2019.objectives2019_jumbotron.subheading
        }
      ></JumbotronComponent>
    </Header>
    <SEO title="Objectives 2019" />
    <Container fluid>
      <Row className={pageStyles.pageHeadings}>
        <Button className={pageStyles.blueButton}>
          <a
            href={
              content.ui.objectives2019.objectives2019_main_content.button_2020
                .link
            }
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            {
              content.ui.objectives2019.objectives2019_main_content.button_2020
                .text
            }
          </a>
        </Button>
      </Row>
    </Container>
    {/** BARRIERS SECTION **/}
    <Container fluid>
      <Row className={objectivesStyles.whiteContainer}>
        <h2>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .barriers.heading
          }
        </h2>
        <p>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .barriers.text
          }
        </p>
        <h4>
          {" "}
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .barriers.subheading.text
          }
        </h4>
        <p>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .barriers.subheading.sub_1
          }
          <br />
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .barriers.subheading.sub_2
          }
        </p>
      </Row>
    </Container>
    {/** BARRIER CARDS **/}
    <Container fluid>
      <Row className={objectivesStyles.infoCardRow}>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.tuition.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.tuition.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.tuition.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.laptop.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.laptop.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.laptop.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.coworking.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.coworking.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.coworking.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className={objectivesStyles.infoCardRow}>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.stipend.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.stipend.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.stipend.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.success.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.success.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.barriers.cards.success.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    {/** GRADUATION SECTION **/}
    <Container fluid>
      <Row className={objectivesStyles.whiteContainer}>
        <h2>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .graduation.heading
          }
        </h2>
        <p>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .graduation.text
          }
        </p>
      </Row>
    </Container>
    {/** GRADUATION CARDS **/}
    <Container fluid>
      <Row className={objectivesStyles.infoCardRow}>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusYellow}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.some_progress
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.graduation.cards.checkin.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.graduation.cards.checkin.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.graduation.cards.checkin.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusYellow}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.some_progress
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.graduation.cards.meetings.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.graduation.cards.meetings.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.graduation.cards.meetings.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    {/** JOBS SECTION **/}
    <Container fluid>
      <Row className={objectivesStyles.whiteContainer}>
        <h2>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .jobs.heading
          }
        </h2>
        <p>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .jobs.text
          }
        </p>
      </Row>
    </Container>
    {/** JOBS CARDS **/}
    <Container fluid>
      <Row className={objectivesStyles.infoCardRow}>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusYellow}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.some_progress
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.jobs.cards.placement.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.jobs.cards.placement.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.jobs.cards.placement.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.jobs.cards.salary.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.jobs.cards.salary.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.jobs.cards.salary.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    {/** EVENTS SECTION **/}
    <Container fluid>
      <Row className={objectivesStyles.whiteContainer}>
        <h2>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .events.heading
          }
        </h2>
        <p>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .events.text
          }
        </p>
        <p>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .events.text2
          }
        </p>
      </Row>
    </Container>
    {/** EVENTS CARDS **/}
    <Container fluid>
      <Row className={objectivesStyles.infoCardRow}>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.events.cards.events.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.events.cards.events.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.events.cards.events.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.events.cards.speakers.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.events.cards.speakers.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.events.cards.speakers.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className={objectivesStyles.infoCardRow}>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.events.cards.meetups.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.events.cards.meetups.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.events.cards.meetups.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.events.cards.networking.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.events.cards.networking.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.events.cards.networking.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    {/** COMMUNITY SECTION **/}
    <Container fluid>
      <Row className={objectivesStyles.whiteContainer}>
        <h2>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .community.heading
          }
        </h2>
        <p>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .community.text
          }
        </p>
      </Row>
    </Container>
    {/** COMMUNITY CARDS **/}
    <Container fluid>
      <Row className={objectivesStyles.infoCardRow}>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {" "}
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.community.cards.social.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.community.cards.social.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.community.cards.social.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {" "}
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.community.cards.blogs.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.community.cards.blogs.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.community.cards.blogs.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {" "}
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.community.cards.newsletter.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.community.cards.newsletter.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.community.cards.newsletter.textBottom
                }
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    {/** PARTNERSHIPS SECTION **/}
    <Container fluid>
      <Row className={objectivesStyles.whiteContainer}>
        <h2>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .partnerships.heading
          }
        </h2>
        <p>
          {
            content.ui.objectives2019.objectives2019_main_content.objectives
              .partnerships.text
          }
        </p>
      </Row>
    </Container>
    {/** PARTNERSHIPS CARDS **/}
    <Container fluid>
      <Row className={objectivesStyles.infoCardRow}>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {" "}
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.partnerships.cards.partnerships.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.partnerships.cards.partnerships.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.partnerships.cards.partnerships.textBottom
                }
                {" ("}
                <a
                  href={
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.partnerships.onondaga.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.partnerships.onondaga.text
                  }
                </a>
                {", "}
                <a
                  href={
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.partnerships.aei.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.partnerships.aei.text
                  }
                </a>
                {", "}
                <a
                  href={
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.partnerships.cceo.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.partnerships.cceo.text
                  }
                </a>
                {", "}
                <a
                  href={
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.partnerships.lemoyne.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.partnerships.lemoyne.text
                  }
                </a>
                {")"}
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4" className={objectivesStyles.columnStyle}>
          <Card className={objectivesStyles.infoCard}>
            <CardHeader className={objectivesStyles.cardStatusGreen}>
              {" "}
              {
                content.ui.objectives2019.objectives2019_main_content.objectives
                  .status.achieved
              }
            </CardHeader>
            <CardBody>
              <p className={objectivesStyles.infoCardText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.partnerships.cards.businesses.textTop
                }
              </p>
              <h1>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.partnerships.cards.businesses.number
                }
              </h1>
              <p className={objectivesStyles.infoCardBottomText}>
                {
                  content.ui.objectives2019.objectives2019_main_content
                    .objectives.partnerships.cards.businesses.textBottom
                }
                {" ("}
                <a
                  href={
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.businesses.coworks.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.businesses.coworks.text
                  }
                </a>
                {", "}
                <a
                  href={
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.businesses.vonLangden.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.businesses.vonLangden.text
                  }
                </a>
                {", "}
                <a
                  href={
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.businesses.artemis.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.businesses.artemis.text
                  }
                </a>
                {")"}
                <p>
                  {
                    content.ui.objectives2019.objectives2019_main_content
                      .objectives.partnerships.cards.businesses.local
                  }
                </p>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Objectives2019;
