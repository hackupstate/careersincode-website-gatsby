import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import { Container, Row, Col, Button } from "reactstrap";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import instructorStyles from "./instructors.module.css";

const ApprenticeshipPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading="Apprenticeships at Careers in Code"
        subheading="Hack Upstate’s Careers in Code and MACNY are proud to be partnering to create an apprenticeship program for Software Developers in Central and Upstate NY. We will provide our students with the skills necessary to be successful with local employers after 24 total weeks of instruction. "
      ></JumbotronComponent>
    </Header>
    <SEO title="Apprenticeships" />
    <Container >
      <Row className={pageStyles.pageHeadingsLeftAlign}>
        <h3 className="text-center">Prospective Apprentices</h3>
        <h4>Who is this for?</h4>
        <p>Our apprenticeship program is available to all students that are enrolled in the second cohort of Careers in Code. If you are not enrolled in Careers in Code but have a passion for technology, reach us to us and we’ll see what we can do.</p>
        <h4>Why should you become an apprentice?</h4>
        <p>Studies have shown that apprentices are more qualified and job-ready than fellow job seekers. Apprentices have the ability to choose a field or industry that they are genuinely interested in, which leads to higher job satisfaction and higher employee retention. Completing an apprenticeship puts you on the right path to future success. </p>
        <h4>What skills and experience do I need?</h4>
        <p>Our apprentices do not require any software development skills. We do require core competency and being comfortable with using the Mac OS. </p>
        <h4>Training and education</h4>
        <p>As an apprentice, you’ll receive the technical skills and experience that you need to be successful. We partner with local employers to ensure you are ready to contribute to the technology workforce. </p>
        <h4>Compensation</h4>
        <p>As an apprentice, you’ll be working as a W-2 employee with a local employer. It is a full time position with this employer at a lower salary, but with full benefits. </p>
        <h4>What is the interview process?</h4>
        <ol>
          <li><strong>Complete our application.</strong> You’ll complete an application submitting some information to us to learn more about you and your goals for an apprenticeship program. </li>
          <li><strong>Initial Interview.</strong> Hack Upstate will set up a 30 minute call with you to gauge your interest levels and goals for the apprenticeship program.</li>
          <li><strong>Employer Interview.</strong> If we decide you are a good fit from our initial call, we’ll set up a 30 minute interview with a few employers that are interested in learning more about you as a potential apprentice.</li>
          <li><strong>Final Decision.</strong> After our series of interviews, Careers in Code, MACNY, and the employer will make a decision if you are accepted as an apprentice and finalize the process.</li>
        </ol>
        <h4>Apply now</h4>
        <p>Interested in becoming an apprentice with Careers in Code and MACNY? <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4dkS6GGnxB__SI1YJlxgv7QB2j8rEEmayih4_Ss1gp0Uk7A/viewform">Apply now!</a></p>
      </Row>
    </Container>

    <Container >
      <Row className={pageStyles.pageHeadingsLeftAlign}>
        <h3 className="text-center">Prospective Employers</h3>
        <h4>Who is this for?</h4>
        <p>If you are an employer based in Central or Upstate NY with immediate hiring needs and are seeking qualified talent to diversify your workforce, then this program is for you. </p>

        <h4>Why should you hire an apprentice?</h4>
        <p>The talent graduating from our program are passionate and motivated individuals who are looking to learn as much as possible to improve their skills in the technology industry. We’ll work with you to ensure that our apprentices will graduate with the technical skills they need to be successful at your organization. Our program provides the essential instruction, preparation, and support that participants need to be successful in the next step in their career paths as Software Developers at your organization. With a focus on entering high-quality apprenticeship programs, our participants have the necessary soft skills, technical skills, and academic credentials to be successful at your organization.</p>
  
        <h4>Return on investment</h4>
        <p>Hiring an apprentice as an investment. As an employer, you’ll be hiring an apprentice at a lower salary than a skilled worker with years of experience. With training through Careers in Code, our apprentices will become qualified individuals at your organization who will help to grow and advance your company forward. We have a rigorous screening and vetting process for all our apprentices to ensure they are a good fit for your organization.</p>

        <h4>Apply now</h4>
        <p>Interested in hiring an apprentice with Careers in Code and MACNY? <a href="https://docs.google.com/forms/d/e/1FAIpQLScPSxR3t9YdFh5veiBMWQV2i2JNDnxW2gwZY4twfG3uwYkw9A/viewform">Complete the following</a> and we’ll be in touch!</p>


      </Row>
    </Container>



  </Layout>
);

export default ApprenticeshipPage;
