import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import content from "../content/content.json";

const Unsubscribe = (props) => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.unsubscribe.unsubscribe_jumbotron.heading}
        subheading={content.ui.unsubscribe.unsubscribe_jumbotron.subheading}
      >
        <JumboButton
          btnLink={content.ui.unsubscribe.unsubscribe_jumbotron.button.link}
          btnText={content.ui.unsubscribe.unsubscribe_jumbotron.button.text}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Unsubscribe" />
  </Layout>
);

export default Unsubscribe;
