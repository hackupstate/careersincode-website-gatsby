import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MissionPage = () => (
  <Layout>
    <SEO title="Mission" />
    <h1>Mission Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default MissionPage
