import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import Banner from "../components/banner";

import BottomRowContainer from "../components/bottomrowcontainer";
import {
	Container,
	Button,
	Row,
	Col,
	CardDeck,
	Card,
	CardImg,
	CardTitle,
	CardText,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Joey from "../images/instructors/joeybuczek.jpg";
import Kelly from "../images/students/kellycorey.jpg";
import dougroussin from "../images/students/cohort-3/DougRoussin.jpg";
import content from "../content/content.json";
import * as cardStyles from "../components/card.module.css";
import * as blogStyles from "../components/blog.module.css";
import * as pageStyles from "./pages.module.css";
import * as bannerStyles from "../components/banner.module.css";
import * as testimonialStyles from "./testimonials.module.css";
import cirrLogo from "../images/partners/cirr_50.png";
import courseReportLogo from "../images/coursereportlogo.png";
//import {jsonData} from "../utils/rss-to-json.js";

const IndexPage = (props) => (
	<Layout>
		<Header>
			<NavComponent />
			<JumbotronComponent
				heading={content.ui.index_jumbotron.heading}
				subheading={content.ui.index_jumbotron.subheading}
			>
				{/* <JumboButton
          btnLink={content.ui.index_jumbotron.button1.link}
          btnText={content.ui.index_jumbotron.button1.text}
        /> */}
				<JumboButton
					btnLink={content.ui.index_jumbotron.button2.link}
					btnText={content.ui.index_jumbotron.button2.text}
				/>
				<JumboButton
					btnLink={
						"https://docs.google.com/forms/d/e/1FAIpQLSdePaq9cZHr-SZ9tgTVu09bRRZ_OCrChSgXjZBTfZ54EYV7CQ/viewform"
					}
					btnText={"Join our Fall, 2023 waitlist"}
				/>
				<JumboButton
					btnLink={"/Why-Careers-in-Code.png"}
					btnText={"Why Careers in Code?"}
				/>
			</JumbotronComponent>
		</Header>
		<SEO title="Home" />
		<Banner>
			<Row className={bannerStyles.bannerGreen}>
				<Col className={pageStyles.centerText}>
					<a
						href={content.ui.index_banner_announce.link}
						target="_blank"
						rel="noopener noreferrer"
						className={pageStyles.bannerLink}
					>
						{content.ui.index_banner_announce.text}{" "}
						<FontAwesomeIcon icon={faArrowRight} size="1x" />
					</a>
				</Col>
			</Row>
		</Banner>
		<Container fluid className={pageStyles.whiteContainer}>
			<Row className={pageStyles.pageHeadings}>
				<Col className={pageStyles.centerContentColumns}>
					<h3> {content.ui.index_main_content_top_text.copy}</h3>
					<p> {content.ui.index_main_content_top_text.description} </p>
					<a
						href={"/students"}
						target="_blank"
						rel="noopener noreferrer"
						className={pageStyles.btnLink}
					>
						<Button className={pageStyles.blueButton}>
							{" "}
							{content.ui.index_main_content_top_text.button}{" "}
						</Button>
					</a>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col className={pageStyles.centerContentColumns}>
					<h3> {content.ui.index_main_content_bottom_text.copy} </h3>
					<p> {content.ui.index_main_content_bottom_text.description} </p>
					<a
						href={content.ui.index_main_content_bottom_text.link}
						rel="noopener noreferrer"
						className={pageStyles.btnLink}
					>
						<Button className={pageStyles.blueButton}>
							{content.ui.index_main_content_bottom_text.button}
						</Button>
					</a>
				</Col>
			</Row>
		</Container>

		<Container fluid className={testimonialStyles.blueContainer}>
			<h2 className="white-text">
				Hear What Our Community Is Saying About Careers In Code
			</h2>
			<Row>
				<CardDeck>
					<Col sm="4">
						<Card body className={("shadow-sm", testimonialStyles.cardStyle)}>
							<CardImg
								top
								width="100%"
								src={dougroussin}
								alt="#"
								className={testimonialStyles.cardImg}
							/>
							<CardText>
								<p className={testimonialStyles.cardText}>
									"Careers in Code has opened up possibilities for my future. It
									has given me a solid foundation of full-stack coding skills,
									as well as an introduction to people in the Syracuse tech
									community. I’m excited to continue growing those skills and
									connections to the community."
								</p>
							</CardText>
							<CardTitle>
								<p className={testimonialStyles.cardTitle}>
									DOUG ROUSSIN, Cohort 3 Graduate
								</p>
							</CardTitle>
						</Card>
					</Col>
					<Col sm="4">
						<Card body className={("shadow-sm", testimonialStyles.cardStyle)}>
							<CardImg
								top
								width="100%"
								src={Kelly}
								alt="Kelly Corey"
								className={testimonialStyles.cardImg}
							/>
							<CardText>
								<p className={testimonialStyles.cardText}>
									{content.ui.index_main_content_testimonials_two.snippet}
								</p>
							</CardText>
							<CardTitle>
								<p className={testimonialStyles.cardTitle}>
									{content.ui.index_main_content_testimonials_two.name}
								</p>
							</CardTitle>
						</Card>
					</Col>
					<Col sm="4">
						<Card body className={("shadow-sm", testimonialStyles.cardStyle)}>
							<CardImg
								top
								width="100%"
								src={Joey}
								alt="Joey Buzcek"
								className={testimonialStyles.cardImg}
							/>
							<CardText>
								<p className={testimonialStyles.cardText}>
									{content.ui.index_main_content_testimonials_three.snippet}
								</p>
							</CardText>
							<CardTitle>
								<p className={testimonialStyles.cardTitle}>
									{content.ui.index_main_content_testimonials_three.name}
								</p>
							</CardTitle>
						</Card>
					</Col>
				</CardDeck>
			</Row>

			<Row className={testimonialStyles.buttonRow}>
				<Col>
					<a
						href={content.ui.index_main_content_testimonials_button.link}
						rel="noopener noreferrer"
						className={testimonialStyles.btnLink}
					>
						<Button size="md" className={testimonialStyles.blueButton}>
							{content.ui.index_main_content_testimonials_button.copy}
						</Button>
					</a>
				</Col>
			</Row>
		</Container>

		<Container fluid className={pageStyles.whiteContainer}>
			<Row className={bannerStyles.bannerWhite}>
				<Col className={pageStyles.centerText}>
					<h2 className={pageStyles.outcomes}>Outcomes</h2>
					<p>View our outcomes.</p>
					<Row className={cardStyles.rowoutcomes}>
						<Card className={cardStyles.cardoutcomes}>
							<span className={cardStyles.stat}>91%</span>
							<span className={cardStyles.value}>Graduation Rate</span>
						</Card>
						<Card className={cardStyles.cardoutcomes}>
							<span className={cardStyles.stat}>72%</span>
							<span className={cardStyles.value}>Placement Rate</span>
						</Card>
						<Card className={cardStyles.cardoutcomes}>
							<span className={cardStyles.stat}>56%</span>
							<span className={cardStyles.value}>Salary Increase</span>
						</Card>
						<Card className={cardStyles.cardoutcomes}>
							<span className={cardStyles.stat}>$45,490</span>
							<span className={cardStyles.value}>Average Starting Salary</span>
						</Card>
					</Row>
					<a
						href="/outcomes"
						target="_blank"
						rel="noopener noreferrer"
						className={testimonialStyles.btnLink}
					>
						<Button size="md" className={testimonialStyles.blueButton}>
							View Outcomes
						</Button>
					</a>
				</Col>
			</Row>
		</Container>
		<Container fluid className={pageStyles.whiteContainer}>
			<Row className={bannerStyles.bannerWhite}>
				<Col className={pageStyles.centerText}>
					<h3>Graduate Outcomes You Can Trust</h3>
					<img src={cirrLogo} alt="CIRR Logo"></img>
					<p>
						As a CIRR certified school, we fully offer transparent results. CIRR
						is the industry standard for placement stats and we are commited to
						publishing trustworthy graduate outcomes.
					</p>
					<a
						href="https://cirr.org/"
						target="_blank"
						rel="noopener noreferrer"
						className={testimonialStyles.btnLink}
					>
						<Button size="md" className={testimonialStyles.blueButton}>
							View CIRR Standards
						</Button>
					</a>
				</Col>
			</Row>
		</Container>
		<Container fluid className={pageStyles.whiteContainer}>
			<Row className={bannerStyles.bannerWhite}>
				<Col className={pageStyles.centerText}>
					<h3>View us on Course Report</h3>
					<img
						style={{ width: "300px" }}
						src={courseReportLogo}
						alt="Course Report Logo"
					></img>
					<p>View all of our reviews on Course Report</p>
					<a
						href="https://www.coursereport.com/schools/careers-in-code"
						target="_blank"
						rel="noopener noreferrer"
						className={testimonialStyles.btnLink}
					>
						<Button size="md" className={testimonialStyles.blueButton}>
							View Course Report Reviews
						</Button>
					</a>
				</Col>
			</Row>
		</Container>
		<Container fluid className={pageStyles.blueContainer}>
			<Row className={bannerStyles.bannerWhite}>
				<Col className={pageStyles.centerText}>
					<h3>A Curriculum Informed by Local Employers</h3>
					<p>
						We partner with local employers to develop and provide feedback on
						our curriculum.
					</p>
					<a
						href="/partner"
						rel="noopener noreferrer"
						className={testimonialStyles.btnLink}
					>
						<Button size="md" className={testimonialStyles.blueButton}>
							Partners
						</Button>
					</a>
				</Col>
			</Row>
		</Container>

		<BottomRowContainer />

		<Container fluid className={testimonialStyles.blueContainer}>
			<h2 className="white-text">Read The Latest On Hack Upstate</h2>
			<Row>
				<CardDeck>
					<a
						href="https://hackupstate.medium.com/introducing-the-second-cohort-of-careers-in-code-students-150f7e58d812"
						target="_b"
					>
						<Col sm="4">
							<Card body className={("shadow-sm", testimonialStyles.cardStyle)}>
								<CardImg
									top
									width="100%"
									src={"https://miro.medium.com/max/1400/0*Xutc25pDct1pNl7j"}
									alt=""
									className={testimonialStyles.cardImg}
								/>
								<CardText>
									<p className={testimonialStyles.cardText}>
										"Careers in Code is a coding bootcamp that teaches computer
										programming to women and people of color to help..."
									</p>
								</CardText>
								<CardTitle>
									<p className={testimonialStyles.cardTitle}>
										Introducing the Second Cohort of Careers in Code Students!
									</p>
								</CardTitle>
							</Card>
						</Col>
					</a>

					<a
						href="https://hackupstate.medium.com/announcing-our-career-coach-laura-thorne-f628f063ef02"
						target="_b"
					>
						<Col sm="4">
							<Card body className={("shadow-sm", testimonialStyles.cardStyle)}>
								<CardImg
									top
									width="100%"
									src={"https://miro.medium.com/max/1400/0*x5V_ueee_400JYrx"}
									alt=""
									className={testimonialStyles.cardImg}
								/>
								<CardText>
									<p className={testimonialStyles.cardText}>
										"We’re very excited to announce that Laura Thorne has joined
										our team as our Career Coach for our second..."
									</p>
								</CardText>
								<CardTitle>
									<p className={testimonialStyles.cardTitle}>
										Announcing Our Career Coach, Laura Thorne!
									</p>
								</CardTitle>
							</Card>
						</Col>
					</a>

					<a
						href="https://hackupstate.medium.com/technology-is-changing-the-roles-of-teachers-and-students-c34c54f24531"
						target="_b"
					>
						<Col sm="4">
							<Card body className={("shadow-sm", testimonialStyles.cardStyle)}>
								<CardImg
									top
									width="100%"
									src="https://miro.medium.com/max/2560/0*z_Mr56BzDN726WBN"
									alt="https://miro.medium.com/max/2560/0*z_Mr56BzDN726WBN"
									className={testimonialStyles.cardImg}
								/>
								<CardText>
									<p className={testimonialStyles.cardText}>
										"Technology is changing the duties of students and teachers
										in the classroom. Students are doing more..."
									</p>
								</CardText>
								<CardTitle>
									<p className={testimonialStyles.cardTitle}>
										Technology Is Changing The Roles Of Teachers And Students
									</p>
								</CardTitle>
							</Card>
						</Col>
					</a>
				</CardDeck>
			</Row>

			<Row className={testimonialStyles.buttonRow}>
				<Col>
					<a
						href={"https://hackupstate.medium.com/"}
						rel="noopener noreferrer"
						className={testimonialStyles.btnLink}
						target="_blank"
					>
						<Button size="md" className={testimonialStyles.blueButton}>
							Read Our Blog
						</Button>
					</a>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default IndexPage;
