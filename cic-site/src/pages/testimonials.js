import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import content from "../content/content.json"
import { Container, Row, Col } from "reactstrap"
import pageStyles from './pages.module.css'

import Kelly from '../images/students/kellycorey.jpg'
import Karin from '../images/students/karin.jpg'
import Ana from '../images/students/Anna.jpg'
import Dana from '../images/students/dana.jpg'
import Kaitlyn from '../images/students/Kaitlyn.jpg'
import Dakir from '../images/students/dakir.jpg'
import Tim from '../images/students/tim.jpeg'
import Linda from '../images/students/lindakovacs.jpeg'

import Joey from "../images/instructors/joeybuczek.jpg"
import Gus from "../images/instructors/gus.jpg"

const TestimonialsPage = () => (
  <Layout>
    <SEO title="Testimonials" />
    <Container>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h3> {content.ui.about.testimonials_main_content.students.header} </h3>
          <Col>
            <img className={pageStyles.imgCircleTestimonials} src={Kelly} alt={content.ui.about.testimonials_main_content.students.kelly.alt_text} />
            <h4> {content.ui.about.testimonials_main_content.students.kelly.header} </h4>
            <p> {content.ui.about.testimonials_main_content.students.kelly.text} </p>
          </Col>
          <Col>
            <img className={pageStyles.imgCircleTestimonials} src={Karin} alt={content.ui.about.testimonials_main_content.students.karin.alt_text} />
            <h4> {content.ui.about.testimonials_main_content.students.karin.header} </h4>
            <p> {content.ui.about.testimonials_main_content.students.karin.text} </p>
          </Col>
          <Col>
            <img className={pageStyles.imgCircleTestimonials} src={Ana} alt={content.ui.about.testimonials_main_content.students.ana.alt_text} />
            <h4> {content.ui.about.testimonials_main_content.students.ana.header} </h4>
            <p> {content.ui.about.testimonials_main_content.students.ana.text} </p>
          </Col>
          <Col>
            <img className={pageStyles.imgCircleTestimonials} src={Dana} alt={content.ui.about.testimonials_main_content.students.dana.alt_text} />
            <h4> {content.ui.about.testimonials_main_content.students.dana.header} </h4>
            <p> {content.ui.about.testimonials_main_content.students.dana.text} </p>
          </Col>
          <Col>
            <img className={pageStyles.imgCircleTestimonials} src={Kaitlyn} alt={content.ui.about.testimonials_main_content.students.kaitlyn.alt_text} />
            <h4> {content.ui.about.testimonials_main_content.students.kaitlyn.header} </h4>
            <p> {content.ui.about.testimonials_main_content.students.kaitlyn.text} </p>
          </Col>
          <Col>
            <img className={pageStyles.imgCircleTestimonials} src={Dakir} alt={content.ui.about.testimonials_main_content.students.dakir.alt_text} />
            <h4> {content.ui.about.testimonials_main_content.students.dakir.header} </h4>
            <p> {content.ui.about.testimonials_main_content.students.dakir.text} </p>
          </Col>
          <Col>
            <img className={pageStyles.imgCircleTestimonials} src={Tim} alt={content.ui.about.testimonials_main_content.students.tim.alt_text} />
            <h4> {content.ui.about.testimonials_main_content.students.tim.header} </h4>
            <p> {content.ui.about.testimonials_main_content.students.tim.text} </p>
          </Col>
          <Col>
            <img className={pageStyles.imgCircleTestimonials} src={Linda} alt={content.ui.about.testimonials_main_content.students.linda.alt_text} />
            <h4> {content.ui.about.testimonials_main_content.students.linda.header} </h4>
            <p> {content.ui.about.testimonials_main_content.students.linda.text} </p>
          </Col>
          <hr />
          <Col>
            <h3> {content.ui.about.testimonials_main_content.instructors.header} </h3>
          </Col>
          <Col>
            <img className={pageStyles.imgCircleTestimonials} src={Joey} alt={content.ui.about.testimonials_main_content.instructors.joey.alt_text} />
            <h4> {content.ui.about.testimonials_main_content.instructors.joey.header} </h4>
            <p> {content.ui.about.testimonials_main_content.instructors.joey.text} </p>
          </Col>
          <Col>
            <img className={pageStyles.imgCircleTestimonials} src={Gus} alt={content.ui.about.testimonials_main_content.instructors.gus.alt_text} />
            <h4> {content.ui.about.testimonials_main_content.instructors.gus.header} </h4>
            <p> {content.ui.about.testimonials_main_content.instructors.gus.text} </p>
          </Col>
          <Col>
            <Link to="/">Go Home</Link>
          </Col>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default TestimonialsPage
