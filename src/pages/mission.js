import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import { Container, Row, Col } from "reactstrap";
import content from "../content/content.json";
import * as pageStyles from "./pages.module.css";

const MissionPage = () => (
	<Layout>
		<Header>
			<NavComponent />
			<JumbotronComponent
				heading={content.ui.about.mission_jumbotron.heading}
			></JumbotronComponent>
		</Header>
		<SEO title="Mission" />
		<Container className={pageStyles.whiteContainer}>
			<Row className={pageStyles.pageHeadings}>
				<h3> {content.ui.about.mission_main_content.header1.title} </h3>
				<p> {content.ui.about.mission_main_content.header1.text1} </p>
				<p> {content.ui.about.mission_main_content.header1.text2} </p>
			</Row>
		</Container>
		<Container className={pageStyles.whiteContainer}>
			<Row className={pageStyles.pageHeadings}>
				<h3> {content.ui.about.mission_main_content.header2.title} </h3>
				<p> {content.ui.about.mission_main_content.header2.text} </p>
			</Row>
		</Container>
		<Container className={pageStyles.whiteContainer}>
			<Row className={pageStyles.pageHeadings}>
				<Col>
					<h3> {content.ui.about.mission_main_content.header4.title} </h3>
					<br />
					<h4> {content.ui.about.mission_main_content.header4.subheader1} </h4>
					<p> {content.ui.about.mission_main_content.header4.text} </p>
					<h4>
						{" "}
						{
							content.ui.about.mission_main_content.header4.subheader2.title
						}{" "}
					</h4>
					<p>
						{" "}
						{content.ui.about.mission_main_content.header4.subheader2.text}{" "}
					</p>
					<h4>
						{" "}
						{
							content.ui.about.mission_main_content.header4.subheader3.title
						}{" "}
					</h4>
					<p>
						{" "}
						{content.ui.about.mission_main_content.header4.subheader3.text}{" "}
					</p>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default MissionPage;
