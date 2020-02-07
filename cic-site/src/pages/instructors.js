import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const InstructorsPage = () => (
  <Layout>
    <SEO title="Instructors" />
    <h1>Instructors Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default InstructorsPage
