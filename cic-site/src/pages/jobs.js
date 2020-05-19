import React from "react"
import content from "../content/content.json"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TableComponent from "../components/table"

const JobsPage = () => (
  <Layout>
    <SEO title="Jobs" />
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
      location1={content.ui.jobs_main_content.jobs_table.locations.location_syr}
      description1={
        content.ui.jobs_main_content.jobs_table.descriptions.description_intern
      }
      position2={
        content.ui.jobs_main_content.jobs_table.positions.position_success
      }
      location2={content.ui.jobs_main_content.jobs_table.locations.location_syr}
      description2={
        content.ui.jobs_main_content.jobs_table.descriptions.description_success
      }
      position3={
        content.ui.jobs_main_content.jobs_table.positions.position_instructor
      }
      location3={content.ui.jobs_main_content.jobs_table.locations.location_syr}
      description3={
        content.ui.jobs_main_content.jobs_table.descriptions
          .description_instructor
      }
      position4={content.ui.jobs_main_content.jobs_table.positions.position_ta}
      location4={content.ui.jobs_main_content.jobs_table.locations.location_syr}
      description4={
        content.ui.jobs_main_content.jobs_table.descriptions.description_ta
      }
      position5={
        content.ui.jobs_main_content.jobs_table.positions.position_coach
      }
      location5={content.ui.jobs_main_content.jobs_table.locations.location_syr}
      description5={
        content.ui.jobs_main_content.jobs_table.descriptions.description_coach
      }
    />
  </Layout>
)

export default JobsPage
