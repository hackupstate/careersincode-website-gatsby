import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import { Container, Row, Col, Button } from "reactstrap";

import content from "../content/content.json";
import * as pageStyles from "./pages.module.css";
import * as pressStyles from "./press.module.css";

const PressPage = () => (
	<Layout>
		<Header>
			<NavComponent />
			<JumbotronComponent
				heading={content.ui.about.press_jumbotron.heading}
			></JumbotronComponent>
		</Header>
		<SEO title="Press" />
		<Container fluid className={pressStyles.blueContainer}>
			<Row className={pressStyles.blueRow}>
				<Col md="6" className={pressStyles.blueInfoColumns}>
					<h3> {content.ui.about.press_main_content.kickoff.header} </h3>
					<p className={pressStyles.infoText}>
						{" "}
						{content.ui.about.press_main_content.kickoff.text}{" "}
					</p>
					<a
						href={content.ui.about.press_main_content.kickoff.link}
						target="_blank"
						rel="noopener noreferrer"
						className={pressStyles.btnLink}
					>
						<Button className={pressStyles.pageButtons} color="info">
							{" "}
							{content.ui.about.press_main_content.kickoff.button}
						</Button>
					</a>
				</Col>
				<Col md="6" className={pressStyles.blueInfoColumns}>
					<h3> {content.ui.about.press_main_content.graduation.header} </h3>
					<p className={pressStyles.infoText}>
						{" "}
						{content.ui.about.press_main_content.graduation.text}{" "}
					</p>
					<a
						href={content.ui.about.press_main_content.graduation.link}
						target="_blank"
						rel="noopener noreferrer"
						className={pressStyles.btnLink}
					>
						<Button className={pressStyles.pageButtons} color="info">
							{" "}
							{content.ui.about.press_main_content.graduation.button}
						</Button>
					</a>
				</Col>
			</Row>
			<Row className={pressStyles.blueRow}>
				<Col md="6" className={pressStyles.blueInfoColumns}>
					<h3> {content.ui.about.press_main_content.logos.header} </h3>
					<p className={pressStyles.infoText}>
						{" "}
						{content.ui.about.press_main_content.logos.text}{" "}
					</p>
					<a
						href={"/CareersinCodePressKit.zip"}
						className={pressStyles.btnLink}
						download
					>
						<Button className={pressStyles.pageButtons} color="info">
							{content.ui.about.press_main_content.logos.button}
						</Button>
					</a>
				</Col>
				<Col md="6" className={pressStyles.blueInfoColumns}>
					<h3> {content.ui.about.press_main_content.presentation.header} </h3>
					<p className={pressStyles.infoText}>
						{" "}
						Our intern Will Guisbond presented a talk at{" "}
						<a
							href={content.ui.about.press_main_content.presentation.text_link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{" "}
							GDG CR DevFest2019{" "}
						</a>{" "}
						called "Lessons Learned from Organizing a Coding Bootcamp". Listen
						to his experience and how Careers in Code plans to move forward!{" "}
					</p>
					<a
						href={content.ui.about.press_main_content.presentation.link}
						target="_blank"
						rel="noopener noreferrer"
						className={pressStyles.btnLink}
					>
						<Button className={pressStyles.pageButtons} color="info">
							{" "}
							{content.ui.about.press_main_content.presentation.button}
						</Button>
					</a>
				</Col>
			</Row>
		</Container>
		<Container fluid className={pressStyles.whiteContainer}>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h3> {content.ui.about.press_main_content.news.header} </h3>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<p> {content.ui.about.press_main_content.news.south_side.text} </p>
				<a
					href={content.ui.about.press_main_content.news.south_side.address}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.news.south_side.link}{" "}
				</a>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<p> {content.ui.about.press_main_content.news.waer.text} </p>
				<a
					href={content.ui.about.press_main_content.news.waer.address_cic}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.news.waer.link_cic}{" "}
				</a>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<p> {content.ui.about.press_main_content.news.waer.text} </p>
				<a
					href={content.ui.about.press_main_content.news.waer.address_bootcamp}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.news.waer.link_bootcamp}{" "}
				</a>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<p> {content.ui.about.press_main_content.news.waer.text} </p>
				<a
					href={content.ui.about.press_main_content.news.waer.address_coding}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.news.waer.link_coding}{" "}
				</a>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<p> {content.ui.about.press_main_content.news.spectrum.text} </p>
				<a
					href={content.ui.about.press_main_content.news.spectrum.address}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.news.spectrum.link}{" "}
				</a>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<p> {content.ui.about.press_main_content.news.syracuse.text} </p>
				<a
					href={content.ui.about.press_main_content.news.syracuse.address}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.news.syracuse.link}{" "}
				</a>
			</Row>
		</Container>

		<Container fluid className={pageStyles.whiteContainer}>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h3> {content.ui.about.press_main_content.medium.header} </h3>
				</Col>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<a
					href={content.ui.about.press_main_content.medium.testimonials.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.medium.testimonials.text}{" "}
				</a>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<a
					href={content.ui.about.press_main_content.medium.capstone.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.medium.capstone.text}{" "}
				</a>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<a
					href={content.ui.about.press_main_content.medium.classroom.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.medium.classroom.text}{" "}
				</a>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<a
					href={content.ui.about.press_main_content.medium.team.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.medium.team.text}{" "}
				</a>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<a
					href={content.ui.about.press_main_content.medium.tas.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.medium.tas.text}{" "}
				</a>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<a
					href={content.ui.about.press_main_content.medium.instructors.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.medium.instructors.text}{" "}
				</a>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<a
					href={content.ui.about.press_main_content.medium.students.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					{content.ui.about.press_main_content.medium.students.text}{" "}
				</a>
			</Row>
		</Container>
	</Layout>
);

export default PressPage;
