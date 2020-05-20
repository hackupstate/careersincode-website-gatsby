import React from "react"

import { Container, Row, Col, Button } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contactStyles from "./contact.module.css"

const ContactPage = () => (
  <Layout>
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
            <Button
              type="submit"
              color="info"
              className={contactStyles.submitBtn}
            >
              Send
            </Button>
          </div>
        </div>
      </form>
    </Container>
  </Layout>
)

export default ContactPage
