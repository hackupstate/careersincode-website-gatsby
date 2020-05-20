import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import NavComponent from "../components/nav"
import JumbotronComponent from "../components/jumbotron"
import SEO from "../components/seo"
import content from "../content/content.json"

const Speakers = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.classroom.guest_speakers.jumbotron.heading}
      />
    </Header>
    <SEO title="Speakers" />
    <h1>Speakers Page Content</h1>
  </Layout>
)

export default Speakers
