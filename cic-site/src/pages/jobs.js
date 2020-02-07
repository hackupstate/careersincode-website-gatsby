import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JobsPage = () => (
  <Layout>
    <SEO title="Jobs" />
    <h1>Jobs Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default JobsPage
