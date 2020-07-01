import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";

import content from "../content/content.json";

const Objectives = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.index_jumbotron.heading}
        subheading={content.ui.index_jumbotron.subheading}
      >
        <JumboButton
          btnLink={content.ui.index_jumbotron.button1.link}
          btnText={content.ui.index_jumbotron.button1.text}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Objectives" />
    <h1>objectives content</h1>
  </Layout>
);

export default Objectives;
