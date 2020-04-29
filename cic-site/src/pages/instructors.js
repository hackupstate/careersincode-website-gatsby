import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import pageStyles from './pages.module.css'

const InstructorsPage = () => (
  <Layout>
    <SEO title="Instructors" />
    <h1>Instructors Page Content</h1>
    <div className={pageStyles.greyTechGarden}>
      <h1> Here is a test </h1>
    </div>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default InstructorsPage
