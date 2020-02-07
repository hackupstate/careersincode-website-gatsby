import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PartnerPage = () => (
  <Layout>
    <SEO title="Partner" />
    <h1>Partner Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default PartnerPage
