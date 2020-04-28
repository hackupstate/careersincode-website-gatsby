import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import content from "../content/content.json"
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Card, CardText, CardHeader, CardBody } from "reactstrap"
import pageStyles from './pages.module.css'
import { FaEnvelope } from 'react-icons/fa'

const AlumniPage = () => (
  <Layout>
    <SEO title="Alumni" />
    <h1>Alumni Page Content</h1>
    <h3> Test <FaEnvelope /> </h3>
    <h3> Test </h3>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default AlumniPage
