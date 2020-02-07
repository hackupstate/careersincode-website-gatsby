import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FaqPage = () => (
  <Layout>
    <SEO title="Faq" />
    <h1>Faq Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default FaqPage
