import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import { Container } from "reactstrap";
import TableComponent from "../components/table";
import content from "../content/content.json";
// import pageStyles from "../pages/pages.module.css";
import jobStyles from "./jobs.module.css";

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
        linktext={
          content.ui.jobs_main_content.jobs_table.descriptions
            .description_link_text
        }
        position1={
          content.ui.jobs_main_content.jobs_table.positions.position_intern
        }
        location1={
          content.ui.jobs_main_content.jobs_table.locations.location_syr
        }
        description1={
          content.ui.jobs_main_content.jobs_table.descriptions
            .description_intern
        }
        position2={
          content.ui.jobs_main_content.jobs_table.positions.position_instructor
        }
        location2={
          content.ui.jobs_main_content.jobs_table.locations.location_syr
        }
        description2={
          content.ui.jobs_main_content.jobs_table.descriptions
            .description_instructor
        }
        position3={
          content.ui.jobs_main_content.jobs_table.positions.position_ta
        }
        location3={
          content.ui.jobs_main_content.jobs_table.locations.location_syr
        }
        description3={
          content.ui.jobs_main_content.jobs_table.descriptions.description_ta
        }
        position4={
          content.ui.jobs_main_content.jobs_table.positions.position_coach
        }
        location4={
          content.ui.jobs_main_content.jobs_table.locations.location_syr
        }
        description4={
          content.ui.jobs_main_content.jobs_table.descriptions.description_coach
        }
      />
    </Container>
  </Layout>
);

export default JobsPage;
