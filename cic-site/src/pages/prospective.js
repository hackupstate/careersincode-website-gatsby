import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProspectivePage = () => (
  <Layout>
    <SEO title="Prospective" />
    <h1>Prospective Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default ProspectivePage
