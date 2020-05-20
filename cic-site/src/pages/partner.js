import React from "react"
import Header from "../components/header"
import NavComponent from "../components/nav"
import JumbotronComponent from "../components/jumbotron"
import JumboButton from "../components/jumboButton"
import Layout from "../components/layout"
import SEO from "../components/seo"
import content from "../content/content.json"

const PartnerPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.partners.partners_jumbotron.heading}
        subheading={content.ui.partners.partners_jumbotron.subheading}
      >
        <JumboButton
          btnLink={content.ui.partners.partners_jumbotron.button.link}
          btnText={content.ui.partners.partners_jumbotron.button.text}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Partner" />
    <h1>Partner Page Content</h1>
  </Layout>
)

export default PartnerPage
