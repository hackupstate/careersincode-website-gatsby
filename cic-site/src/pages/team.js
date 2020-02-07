import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TeamPage = () => (
  <Layout>
    <SEO title="Team" />
    <h1>Team Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default TeamPage
