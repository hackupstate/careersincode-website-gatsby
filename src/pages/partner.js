import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import { Container, Row, Col, Button } from "reactstrap";
import Centerstate from "../images/partners/cceo.jpg";
import Onondaga from "../images/partners/onondaga.jpg";
import Coworks from "../images/partners/coworks.jpg";
import Metis from "../images/partners/metis.jpg";
import TechGarden from "../images/partners/ttg.jpg";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import partnerStyles from "./partner.module.css";

const PartnerPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.partners.partners_jumbotron.heading}
        subheading={content.ui.partners.partners_jumbotron.subheading}
      >
        
        <JumboButton
          btnLink={content.ui.partners.partners_jumbotron.button.link}
          btnText={content.ui.partners.partners_jumbotron.button.text}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Partner" />
    <Container fluid className={partnerStyles.blueStatContainer}>
      <Row className={partnerStyles.statRows}>
        <Col className={partnerStyles.statColumns}>
          <h3 className={partnerStyles.partnerStats}>
            {content.ui.partners.partners_stats.hiring_stat}
          </h3>
          <p className={partnerStyles.blueParaStats}>
            {content.ui.partners.partners_stats.hiring_text}
          </p>
        </Col>
        <Col className={partnerStyles.statColumns}>
          <h3 className={partnerStyles.partnerStats}>
            {content.ui.partners.partners_stats.bootcamp_stat}
          </h3>
          <p className={partnerStyles.greenParaStats}>
            {content.ui.partners.partners_stats.bootcamp_text}
          </p>
        </Col>
      </Row>
      <Row className={partnerStyles.statRows}>
        <Col className={partnerStyles.statColumns}>
          <h3 className={partnerStyles.partnerStats}>
            {content.ui.partners.partners_stats.salary_stat}
          </h3>
          <p className={partnerStyles.blueParaStats}>
            {content.ui.partners.partners_stats.salary_text}
          </p>
        </Col>
        <Col className={partnerStyles.statColumns}>
          <h3 className={partnerStyles.partnerStats}>
            {content.ui.partners.partners_stats.prepared_stat}
          </h3>
          <p className={partnerStyles.greenParaStats}>
            {content.ui.partners.partners_stats.prepared_text}
          </p>
        </Col>
      </Row>
    </Container>
    <Container fluid className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <h2>{content.ui.partners.partners_logos.title}</h2>
      </Row>
      <Row className={pageStyles.centerItems}>
        <img
          src={Onondaga}
          className={pageStyles.lgLogo}
          alt="onondaga-county-logo"
        />
      </Row>
      <Row xs="2" className={pageStyles.marginBottom}>
        <Col className={pageStyles.centerContentColumns}>
          <img
            src={TechGarden}
            className={pageStyles.mdLogo}
            alt="the-tech-garden-logo"
          />
        </Col>
        <Col className={pageStyles.centerContentColumns}>
          <img
            src={Coworks}
            className={pageStyles.mdLogo}
            alt="centerstate-ceo-logo"
          />
        </Col>
      </Row>
      <Row xs="2">
        <Col className={pageStyles.centerContentColumns}>
          <img
            src={Centerstate}
            className={pageStyles.mdLogo}
            alt="coworks-logo"
          />
        </Col>
        <Col className={pageStyles.centerContentColumns}>
          <img
            src={Metis}
            className={pageStyles.mdLogo}
            alt="metis-consulting-logo"
          />
        </Col>
      </Row>
    </Container>
    <Container className={(pageStyles.containerStyles, pageStyles.centerText)}>
      <h2>{content.ui.partners.partner_info.title}</h2>
      <p>{content.ui.partners.partner_info.paragraph1}</p>
      <br />
      <p>{content.ui.partners.partner_info.paragraph2}</p>
      <br />
      <Button color="info" className={pageStyles.marginBottom} 
          href={content.ui.partners.partner_info.button.link}
          target="_blank"
          rel="noopener noreferrer">
        <span
          className={pageStyles.btnLink}
        >
          {content.ui.partners.partner_info.button.text}
        </span>
      </Button>
    </Container>
  </Layout>
);

export default PartnerPage;
