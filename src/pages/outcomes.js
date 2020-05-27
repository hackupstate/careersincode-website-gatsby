import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import NavComponent from "../components/nav"
import JumbotronComponent from "../components/jumbotron"
import JumboButton from "../components/jumboButton"
import content from "../content/content.json"

const OutcomesPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.outcomes.outcomes_jumbotron.heading}
        subheading={content.ui.outcomes.outcomes_jumbotron.subheading}
      >
        <JumboButton
          btnLink={content.ui.outcomes.outcomes_jumbotron.button.outcomes_link}
          btnText={content.ui.outcomes.outcomes_jumbotron.button.outcomes_text}
        />
        <JumboButton
          btnLink={
            content.ui.outcomes.outcomes_jumbotron.button.consolidated_link
          }
          btnText={
            content.ui.outcomes.outcomes_jumbotron.button.consolidated_text
          }
        />
        <JumboButton
          btnLink={
            content.ui.outcomes.outcomes_jumbotron.button.transparency_link
          }
          btnText={
            content.ui.outcomes.outcomes_jumbotron.button.transparency_text
          }
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Outcomes" />
    <h1>Outcomes Page Content</h1>
  </Layout>
)

export default OutcomesPage
