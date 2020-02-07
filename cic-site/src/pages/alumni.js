import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AlumniPage = () => (
  <Layout>
    <SEO title="Alumni" />
    <h1>Alumni Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default AlumniPage
