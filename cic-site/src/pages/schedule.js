import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SchedulePage = () => (
  <Layout>
    <SEO title="Schedule" />
    <h1>Schedule Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default SchedulePage
