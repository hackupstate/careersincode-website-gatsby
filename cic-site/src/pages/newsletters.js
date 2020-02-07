import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewslettersPage = () => (
  <Layout>
    <SEO title="Newsletters" />
    <h1>Newsletters Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default NewslettersPage
