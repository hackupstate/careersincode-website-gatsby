import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TestimonialsPage = () => (
  <Layout>
    <SEO title="Testimonials" />
    <h1>Testimonial Page Content</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default TestimonialsPage
