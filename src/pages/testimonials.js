import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import { Container, Row, Col } from "reactstrap";
import Kelly from "../images/students/kellycorey.jpg";
import Karin from "../images/students/karin.jpg";
import Ana from "../images/students/ana.jpg";
import Dana from "../images/students/dana.jpg";
import Kaitlyn from "../images/students/kaitlyn.jpg";
import Dakir from "../images/students/dakir.jpg";
import Tim from "../images/students/tim.jpeg";
import Linda from "../images/students/lindakovacs.jpeg";
import Joey from "../images/instructors/joeybuczek.jpg";
import Gus from "../images/instructors/gus.jpg";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import testimonialStyles from "./testimonials.module.css";
import latonia from "../images/students/cohort-2/latonia.png";
import dominique from "../images/students/cohort-2/dominique.png";
import brandy from "../images/students/cohort-2/brandy.jpg";

const TestimonialsPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.about.testimonials_jumbotron.heading}
      >
        <JumboButton
          btnLink="https://www.coursereport.com/schools/careers-in-code"
          btnText="View Reviews on Course Report"
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Testimonials" />
    <Container>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h3>Cohort Two Testimonials</h3>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRowOdd}>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={latonia}
            alt="La'Tonia Mertica"
          />
        </Col>
        <Col>
          <h4>La'Tonia Mertica , Cohort Two Graduateg</h4>
          <p>Where I'd be in life at this moment had I not joined Careers in Code is something I can't imagine. 
I started the program thinking I wouldn't finish. Some days it took all the strength I had to show up. I was always happy - relieved - I did. Those powering CiC always made me feel energized, inspiringly challenged, and ready to re-define (again and again) my self perceptions of what I can achieve. I appreciate their holistic approach. Constant encouragement. Vibrant support. These collective qualities allowed me to thrive. They equipped me with fundamentals, including a growth mindset, to be successful pursuing code/web dev. 
Now I have opportunities that were once surreal. I have options. I've been able to create possibilities. It feels wonderful. More importantly to me, it feels reliable. I have skills and sights for better days that can't be taken away from me. Those powering CiC put me in a mental place to help make this my reality.
If you have a chance, at least try - you won't be alone. Those powering CiC will be there with you and if you put in the effort they won't disappoint in helping you through.</p>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRow}>
        <Col>
          <h4>Dominique Wynn-Siver, Cohort Two Graduate</h4>
          <p>Careers in Code restored my confidence and strength, allowing me to re-enter the coding field. I've always wanted to combine technology and design, but I've been told my ideas are stupid and not worth pursuing. Now that I've narrowed my attention to UI and UX Engineering, I don't think I'll be stopped. I was able to rediscover my enthusiasm for technology because to Careers in Code. As a UI/UX Engineer and artist, I can now enjoy designing while also improving the environment and my community.</p>
        </Col>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={dominique}
            alt="Dominique Wynn-Siver"
          />
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRowOdd}>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={brandy}
            alt="Brandy M."
          />
        </Col>
        <Col>
          <h4>Brandy Mack, Cohort Two Graduate</h4>
          <p>Before Careers in Code, I had a hard time grasping basic concepts in code and development. I was learning alone aimlessly, CiC gave me structure and an amazing team of instructors and valuable resources. Not once was I left to learn alone, being assured that even after graduating I can still reach out is invaluable. I am only greatful for the experience and look forward to pursuing the opportunities afforded for me to continue in fullstack development.</p>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h3>Cohort One Testimonials</h3>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRowOdd}>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Kelly}
            alt={
              content.ui.about.testimonials_main_content.students.kelly.alt_text
            }
          />
        </Col>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.kelly.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.students.kelly.text}
          </p>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRow}>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.karin.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.students.karin.text}
          </p>
        </Col>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Karin}
            alt={
              content.ui.about.testimonials_main_content.students.karin.alt_text
            }
          />
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRowOdd}>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Ana}
            alt={
              content.ui.about.testimonials_main_content.students.ana.alt_text
            }
          />
        </Col>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.ana.header}
          </h4>
          <p>{content.ui.about.testimonials_main_content.students.ana.text}</p>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRow}>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.dana.header}
          </h4>
          <p>{content.ui.about.testimonials_main_content.students.dana.text}</p>
        </Col>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Dana}
            alt={
              content.ui.about.testimonials_main_content.students.dana.alt_text
            }
          />
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRowOdd}>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Kaitlyn}
            alt={
              content.ui.about.testimonials_main_content.students.kaitlyn
                .alt_text
            }
          />
        </Col>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.kaitlyn.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.students.kaitlyn.text}
          </p>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRow}>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.dakir.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.students.dakir.text}
          </p>
        </Col>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Dakir}
            alt={
              content.ui.about.testimonials_main_content.students.dakir.alt_text
            }
          />
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRowOdd}>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Tim}
            alt={
              content.ui.about.testimonials_main_content.students.tim.alt_text
            }
          />
        </Col>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.tim.header}
          </h4>
          <p>{content.ui.about.testimonials_main_content.students.tim.text}</p>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRow}>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.students.linda.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.students.linda.text}
          </p>
        </Col>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Linda}
            alt={
              content.ui.about.testimonials_main_content.students.linda.alt_text
            }
          />
        </Col>
      </Row>

      {/* INSTRUCTORS AND TAs */}
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <h3>
            {content.ui.about.testimonials_main_content.instructors.header}
          </h3>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRowOdd}>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Joey}
            alt={
              content.ui.about.testimonials_main_content.instructors.joey
                .alt_text
            }
          />
        </Col>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.instructors.joey.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.instructors.joey.text}
          </p>
        </Col>
      </Row>
      <Row className={testimonialStyles.testimonialRow}>
        <Col>
          <h4>
            {content.ui.about.testimonials_main_content.instructors.gus.header}
          </h4>
          <p>
            {content.ui.about.testimonials_main_content.instructors.gus.text}
          </p>
        </Col>
        <Col>
          <img
            className={testimonialStyles.imgSquare}
            src={Gus}
            alt={
              content.ui.about.testimonials_main_content.instructors.gus
                .alt_text
            }
          />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default TestimonialsPage;
