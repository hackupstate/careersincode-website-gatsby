import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import { Container } from "reactstrap";
import TableComponent from "../components/table";
import content from "../content/content.json";
// import * as pageStyles from "../pages/pages.module.css";
import * as jobStyles from "./jobs.module.css";

const JobsPage = () => (
	<Layout>
		<Header>
			<NavComponent />
			<JumbotronComponent
				heading={content.ui.jobs_main_content.jobs_jumbotron.heading}
				subheading={content.ui.jobs_main_content.jobs_jumbotron.subheading}
			/>
		</Header>
		<SEO title="Jobs" />

		<Container className={jobStyles.tableContainer}>
			<h2>Job Postings</h2>
			<TableComponent
				header1={content.ui.jobs_main_content.jobs_table.header_position}
				header2={content.ui.jobs_main_content.jobs_table.header_location}
				header3={content.ui.jobs_main_content.jobs_table.header_description}
				header4={content.ui.jobs_main_content.jobs_table.header_application}
				linktext={
					content.ui.jobs_main_content.jobs_table.descriptions
						.description_link_text
				}
				application_text={
					content.ui.jobs_main_content.jobs_table.applications
						.application_link_text
				}
				position1={
					content.ui.jobs_main_content.jobs_table.positions.position_instructor
				}
				location1={
					content.ui.jobs_main_content.jobs_table.locations.location_remote
				}
				description1={
					content.ui.jobs_main_content.jobs_table.descriptions
						.description_instructor
				}
				application1={
					content.ui.jobs_main_content.jobs_table.applications
						.instructor_application
				}
				position2={
					content.ui.jobs_main_content.jobs_table.positions.position_ta
				}
				location2={
					content.ui.jobs_main_content.jobs_table.locations.location_remote
				}
				description2={
					content.ui.jobs_main_content.jobs_table.descriptions.description_ta
				}
				application2={
					content.ui.jobs_main_content.jobs_table.applications.ta_application
				}
				position3={
					content.ui.jobs_main_content.jobs_table.positions.position_intern
				}
				location3={
					content.ui.jobs_main_content.jobs_table.locations.location_remote
				}
				description3={
					content.ui.jobs_main_content.jobs_table.descriptions
						.description_intern
				}
				application3="mailto:jesse@hackupstate.com?subject=Careers%20In%20Code%20Program%20Manager"
				position4={
					content.ui.jobs_main_content.jobs_table.positions.position_coach
				}
				location4={
					content.ui.jobs_main_content.jobs_table.locations.location_remote
				}
				description4={
					content.ui.jobs_main_content.jobs_table.descriptions.description_coach
				}
				application4="mailto:jesse@hackupstate.com?subject=Careers%20In%20Code%20Career%20Coach"
				position5="Student Success Representative"
				location5="Remote"
				description5="/jobs/Careers in Code - Student Success Representative - Job Description.pdf"
				application5="mailto:jesse@hackupstate.com?subject=Careers%20In%20Code%20Student%20Success%20Representative"
			/>
		</Container>
	</Layout>
);

export default JobsPage;
