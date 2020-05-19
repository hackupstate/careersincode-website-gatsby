import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "reactstrap"
import content from "../content/content.json"
import pageStyles from "./pages.module.css"

const ProspectivePage = () => (
  <Layout>
    <SEO title="Prospective" />
    <Container fluid className={pageStyles.centerText}>
      <Row xs="2">
        <Col>
          <h1>{content.ui.students_main_content.students_stats.stats_days}</h1>
          <h3>
            {content.ui.students_main_content.students_stats.stats_days_text}
            <sup>
              {content.ui.students_main_content.students_stats.footnote_1_super}
            </sup>
          </h3>
        </Col>
        <Col>
          <h1>
            {content.ui.students_main_content.students_stats.stats_salary}
          </h1>
          <h3>
            {content.ui.students_main_content.students_stats.stats_salary_text}
            <sup>
              {content.ui.students_main_content.students_stats.footnote_2_super}
            </sup>
          </h3>
        </Col>
      </Row>
      <Row xs="2" className={pageStyles.marginBottom}>
        <Col>
          <h1>{content.ui.students_main_content.students_stats.stats_jobs}</h1>
          <h3>
            {content.ui.students_main_content.students_stats.stats_jobs_text}
            <sup>
              {content.ui.students_main_content.students_stats.footnote_2_super}
            </sup>
          </h3>
        </Col>
        <Col>
          <h1>
            {content.ui.students_main_content.students_stats.stats_increase}
          </h1>
          <h3>
            {
              content.ui.students_main_content.students_stats
                .stats_increase_text
            }
            <sup>
              {content.ui.students_main_content.students_stats.footnote_2_super}
            </sup>
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <sup>
            {content.ui.students_main_content.students_stats.footnote_1_super}
          </sup>
          <a
            href={
              content.ui.students_main_content.students_stats.footnote_1_link
            }
          >
            {content.ui.students_main_content.students_stats.footnote_1_name}
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <sup>
            {content.ui.students_main_content.students_stats.footnote_2_super}
          </sup>
          <a
            href={
              content.ui.students_main_content.students_stats.footnote_2_link
            }
          >
            {content.ui.students_main_content.students_stats.footnote_2_name}
          </a>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ProspectivePage
