import React from "react"
import { Link } from "gatsby"
import content from "../content/content.json"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TableComponent from "../components/table"

const JobsPage = () => (
  <Layout>
    <SEO title="Jobs" />
    <h2>Job Postings</h2>
    <TableComponent
      header1={content.ui.jobs_main_content.jobs_table.header1}
      header2={content.ui.jobs_main_content.jobs_table.header2}
      header3={content.ui.jobs_main_content.jobs_table.header3}
    />
    <Link to="/">Go Home</Link>
  </Layout>
)

export default JobsPage
