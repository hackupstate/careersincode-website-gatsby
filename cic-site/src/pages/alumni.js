import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import content from "../content/content.json"
import {
  Container, Row, Col, Card, Button, CardHeader, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardFooter
} from "reactstrap"
import pageStyles from './pages.module.css'
import { FaEnvelope, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import Ana from '../images/students/Ana.jpg'

const AlumniPage = () => (
  <Layout>
    <SEO title="Alumni" />
    <Container>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h1> {content.ui.students.alumni.alumni_main_content.congratulations.header} </h1>
          <h4> {content.ui.students.alumni.alumni_main_content.congratulations.subheader} </h4>
        </Col>
      </Row>
      <Row className={pageStyles.pageContentContainer}>

        <Col>
          <iframe width={560} height={315} src={content.ui.students.alumni.alumni_main_content.congratulations.capstone_link} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={content.ui.students.alumni.alumni_main_content.congratulations.capstone_title}></iframe>
        </Col>
        <Col>
          <iframe width={560} height={315} src={content.ui.students.alumni.alumni_main_content.congratulations.recap_link} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={content.ui.students.alumni.alumni_main_content.congratulations.recap_title}></iframe>
        </Col>

      </Row>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h2> {content.ui.students.alumni.alumni_main_content.cards.header} </h2>
          {/* card deck begins */}
          <CardDeck>
            {/* ana aombe */}
            <Card body className="text-center">
              <CardHeader tag="h3"> {content.ui.students.alumni.alumni_main_content.cards.twentynineteen.ana.name} </CardHeader>
              <CardImg top width="100%" src={Ana} alt="Ana Aombe" />
              <CardBody>
                <CardTitle> {content.ui.students.alumni.alumni_main_content.cards.twentynineteen.ana.year} </CardTitle>
                <CardText> {content.ui.students.alumni.alumni_main_content.cards.twentynineteen.ana.capstone.title} <a href={content.ui.students.alumni.alumni_main_content.cards.twentynineteen.ana.capstone.link} target="_blank" rel="noopener noreferrer"> {content.ui.students.alumni.alumni_main_content.cards.twentynineteen.ana.capstone.project} </a> </CardText>
              </CardBody>
              <CardFooter> <a href={content.ui.students.alumni.alumni_main_content.cards.twentynineteen.ana.social.linkedin} target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a> <a href={content.ui.students.alumni.alumni_main_content.cards.twentynineteen.ana.social.github} target="_blank" rel="noopener noreferrer"> <FaGithubSquare /> </a> </CardFooter>
            </Card>
          </CardDeck>
          {/* card deck ends */}
          <Link to="/">Go Home</Link>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AlumniPage
