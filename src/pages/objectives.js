import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import { Container, Row, Button, Col } from "reactstrap";
import * as pageStyles from "./pages.module.css";
import content from "../content/content.json";

const Objectives = () => (
	<Layout>
		<Header>
			<NavComponent />
			<JumbotronComponent
				heading={"2020 Objectives (Under Construction)"}
				subheading={
					"Hack Upstate’s vision is to grow and scale Careers in Code in order to provide free computer programming education to help place hundreds of women and people of color fighting poverty that are unemployed, underemployed, or underprivileged individuals, with local employers across Central and Upstate NY."
				}
			>
				<JumboButton
					btnLink={content.ui.index_jumbotron.button1.link}
					btnText={content.ui.index_jumbotron.button1.text}
				/>
			</JumbotronComponent>
		</Header>
		<SEO title="Objectives" />
		<Container fluid>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<a
						href={
							content.ui.objectives.objectives_main_content.button_2019.link
						}
						target="_blank"
						rel="noopener noreferrer"
						className={pageStyles.btnLink}
					>
						<Button className={pageStyles.blueButton}>
							{content.ui.objectives.objectives_main_content.button_2019.text}
						</Button>
					</a>
				</Col>
			</Row>
		</Container>
		<Container fluid>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.partner_alignment
								.heading
						}
					</h2>
					<p>
						{
							content.ui.objectives.objectives_main_content.partner_alignment
								.text
						}
					</p>
					<a
						href={
							content.ui.objectives.objectives_main_content.partner_alignment
								.button.link
						}
						target="_blank"
						rel="noopener noreferrer"
						className={pageStyles.btnLink}
					>
						<Button className={pageStyles.blueButton}>
							{
								content.ui.objectives.objectives_main_content.partner_alignment
									.button.text
							}
						</Button>
					</a>
				</Col>
			</Row>
		</Container>
		<Container fluid className={pageStyles.whiteContainer}>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list
								.train.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list
								.barriers.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list
								.sustainable.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list
								.feedback.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list
								.graduation.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list.jobs
								.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list
								.events.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list
								.community.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list
								.job_preparednes.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list
								.instructors_and_coaches.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list
								.productivity.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list
								.network.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h2>
						{
							content.ui.objectives.objectives_main_content.objectives_list
								.onboarding.heading
						}
					</h2>
					<p>More information coming soon.</p>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default Objectives;
