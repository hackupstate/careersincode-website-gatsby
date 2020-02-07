import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ClassroomPage = () => (
  <Layout>
    <SEO title="Classroom" />
    <h1>Classroom Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default ClassroomPage
