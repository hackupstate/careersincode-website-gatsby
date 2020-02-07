import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StudentsPage = () => (
  <Layout>
    <SEO title="Students" />
    <h1>Students Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default StudentsPage
