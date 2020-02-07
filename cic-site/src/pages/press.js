import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PressPage = () => (
  <Layout>
    <SEO title="Press" />
    <h1>Press Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default PressPage
