import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import { Container, Row, Col, Button } from "reactstrap";
import contactStyles from "./contact.module.css";
import content from "../content/content.json";

const ContactPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.contact_main_content.contact_jumbotron.heading}
        subheading={
          content.ui.contact_main_content.contact_jumbotron.subheading
        }
      >
        <p>{content.ui.contact_main_content.contact_jumbotron.thankyou}</p>
      </JumbotronComponent>
    </Header>
    <SEO title="Contact" />
    <Container className={contactStyles.formContainer}>
      <form name="contactForm" method="POST" data-netlify="true">
        <Row className="form-row">
          <Col className="form-group col-md-6">
            <label for="email">
              <h4>Email</h4>
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </Col>
          <Col className="form-group col-md-6">
            <label for="name">
              <h4>Name</h4>
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Tell us your name"
            />
          </Col>
        </Row>
        <Row className="form-row">
          <Col className="form-group col-md-12">
            <label for="message">
              <h4>Message</h4>
            </label>
            <textarea
              class="form-control"
              id="message"
              name="Message"
              placeholder="Enter your message here"
              style={{ maxWidth: 600 }}
            />
          </Col>
        </Row>
        <div class="form-row">
          <div class="col-md-12">
            <Button type="submit" className={contactStyles.submitBtn}>
              Send
            </Button>
          </div>
        </div>
      </form>
    </Container>
  </Layout>
);

export default ContactPage;
