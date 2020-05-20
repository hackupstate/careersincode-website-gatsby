import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import NavComponent from "../components/nav"
import JumbotronComponent from "../components/jumbotron"
import SEO from "../components/seo"
import content from "../content/content.json"

const SchedulePage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.classroom.schedule.schedule_jumbotron.heading}
      />
    </Header>
    <SEO title="Schedule" />
    <h1>Schedule Page Content</h1>
  </Layout>
)

export default SchedulePage
