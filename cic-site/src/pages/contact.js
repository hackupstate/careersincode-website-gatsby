import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default ContactPage
