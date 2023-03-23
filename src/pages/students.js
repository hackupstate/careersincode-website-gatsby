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
	Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	FaEnvelopeSquare,
	FaTwitterSquare,
	FaLinkedin,
	FaGithubSquare,
	FaGlobe,
	FaIdCard,
	FaColumns,
} from "react-icons/fa";
import {
	faGraduationCap,
	faUserCheck,
	faPencilRuler,
	faMountain,
	faToolbox,
	faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import content from "../content/content.json";
import * as pageStyles from "./pages.module.css";
import * as prospectiveStyles from "./students.module.css";
import * as alumniStyles from "./alumni.module.css";

import Banner from "../components/banner";

import * as bannerStyles from "../components/banner.module.css";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import placeholderimage from "../images/students/placeholder.jpg";

import coreymitchell from "../images/students/cohort-3/coreymitchell.jpg";
import dougroussin from "../images/students/cohort-3/DougRoussin.jpg";
import scotyia from "../images/students/cohort-3/scotyia.jpg";
import stephanienunez from "../images/students/cohort-3/stephanienunez.jpg";
import tiffanywilliams from "../images/students/cohort-3/tiffany.jpg";
import wayneboyd from "../images/students/cohort-3/wayneboyd.jpg";
import zachhafner from "../images/students/cohort-3/zachhafner.jpeg";
import nicoleb from "../images/students/cohort-3/nicoleb.jpg";
import shantina from "../images/students/cohort-3/shantina.png";
import daniellefloyd from "../images/students/cohort-3/daniellefloyd.jpg";
import markellosborne from "../images/students/cohort-3/markellosborne.png";
import christi from "../images/students/cohort-3/christiharlow.png";
import larry from "../images/students/cohort-3/larrygoodman.jpeg";
import chazdickerson from "../images/students/cohort-3/chazdickerson.png";
import strangemaeweather from "../images/students/cohort-3/strangemaeweather.png";

const ProspectivePage = () => (
	<Layout>
		<Header>
			<NavComponent />
			<JumbotronComponent
				heading={content.ui.classroom.prospective_jumbotron.heading}
				subheading={content.ui.students.alumni.alumni_jumbotron.subheading}
			>
				{/* <JumboButton
          btnLink={content.ui.classroom.prospective_jumbotron.button.link}
          btnText={content.ui.classroom.prospective_jumbotron.button.text}
        /> */}

				<JumboButton
					btnLink={
						"https://docs.google.com/forms/d/e/1FAIpQLSdePaq9cZHr-SZ9tgTVu09bRRZ_OCrChSgXjZBTfZ54EYV7CQ/viewform"
					}
					btnText={"Join our waitlist"}
				/>

				<JumboButton
					btnLink={
						"https://docs.google.com/document/d/11c45MxZgj3UylTrd7CapBS33BKjxCqeG6KQLd8pi-DE/edit?usp=sharing"
					}
					btnText={"View Admissions Process (Spring, 2023)"}
				/>
				<JumboButton
					btnLink={
						"https://docs.google.com/document/d/1I0E3E6Y7LYSacdF_i9riQG_hyeATGzd4t4inu1gAQmU/edit?usp=sharing"
					}
					btnText={"View Responsibilites and Expectations (Spring, 2023)"}
				/>

				{/* <JumboButton
          btnLink={"/admissions/arpa/Careers in Code - Student Admissions Process - ARPA.pdf"}
          btnText={"View student admissions process"}
        /> */}
			</JumbotronComponent>
		</Header>
		<SEO title="Students" />
		<Container fluid className={prospectiveStyles.blueStatContainer}>
			<Row className={prospectiveStyles.statRows}>
				<Col className={prospectiveStyles.statColumns}>
					<h3 className={prospectiveStyles.prospectiveStats}>
						{content.ui.classroom.students_stats.stats_days}
					</h3>
					<p className={prospectiveStyles.blueParaStats}>
						{content.ui.classroom.students_stats.stats_days_text}
						<sup>{content.ui.classroom.students_stats.footnote_1_super}</sup>
					</p>
				</Col>
				<Col className={prospectiveStyles.statColumns}>
					<h3 className={prospectiveStyles.prospectiveStats}>
						{content.ui.classroom.students_stats.stats_salary}
					</h3>
					<p className={prospectiveStyles.greenParaStats}>
						{content.ui.classroom.students_stats.stats_salary_text}
						<sup>{content.ui.classroom.students_stats.footnote_2_super}</sup>
					</p>
				</Col>
			</Row>
			<Row className={prospectiveStyles.statRows}>
				<Col className={prospectiveStyles.statColumns}>
					<h3 className={prospectiveStyles.prospectiveStats}>
						{content.ui.classroom.students_stats.stats_jobs}
					</h3>
					<p className={prospectiveStyles.blueParaStats}>
						{content.ui.classroom.students_stats.stats_jobs_text}
						<sup>{content.ui.classroom.students_stats.footnote_2_super}</sup>
					</p>
				</Col>
				<Col className={prospectiveStyles.statColumns}>
					<h3 className={prospectiveStyles.prospectiveStats}>
						{content.ui.classroom.students_stats.stats_increase}
					</h3>
					<p className={prospectiveStyles.greenParaStats}>
						{content.ui.classroom.students_stats.stats_increase_text}
						<sup>{content.ui.classroom.students_stats.footnote_2_super}</sup>
					</p>
				</Col>
			</Row>
		</Container>
		<Container fluid className={pageStyles.whiteContainer}>
			<Row>
				<Col>
					<sup>{content.ui.classroom.students_stats.footnote_1_super}</sup>
					<a href={content.ui.classroom.students_stats.footnote_1_link}>
						{content.ui.classroom.students_stats.footnote_1_name}
					</a>
					<br />
					<br />
					<sup>{content.ui.classroom.students_stats.footnote_2_super}</sup>
					<a href={content.ui.classroom.students_stats.footnote_2_link}>
						{content.ui.classroom.students_stats.footnote_2_name}
					</a>
				</Col>
			</Row>
		</Container>

		{/* ADD STUDENT HEADSHOTS HERE */}
		{/*<Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <h2>Cohort 3 Students (Spring 2022)</h2>
      </Row>
    </Container>
    <Container
      fluid
      className={(pageStyles.marginBottom, alumniStyles.alumniCardContainer)}
    >
      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Danielle Floyd
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={daniellefloyd}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Markell Osborne
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={markellosborne}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Tiffany Williams
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={tiffanywilliams}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Wayne Boyd
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={wayneboyd}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Christi Harlow
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={christi}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Larry Goodman
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={larry}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>
      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Stephanie Nunez
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={stephanienunez}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Zachary Hafner
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={zachhafner}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Chaz Dickerson
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={chazdickerson}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Shantina Perez
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={shantina}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Scotyia Bain
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={scotyia}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Corey Mitchell
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={coreymitchell}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Strange Maeweather
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={strangemaeweather}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Nicole Broadnax
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={nicoleb}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Doug Roussin
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={dougroussin}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>
    </Container>
      */}
		{/* END STUDENT HEADSHOTS */}

		<Container fluid className={pageStyles.marginBottom}>
			<Row>
				<Col className={pageStyles.centerText}>
					<h3>{content.ui.classroom.students_congrats}</h3>
				</Col>
			</Row>
			<Row>
				<Col className={pageStyles.centerItems}>
					<iframe
						title="Congrats"
						width="560"
						height="315"
						src={content.ui.classroom.students_congrats_video}
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default ProspectivePage;
