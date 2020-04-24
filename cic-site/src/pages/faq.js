import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import content from "../content/content.json"
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Card, CardText, CardHeader, CardBody } from "reactstrap"
import classnames from 'classnames'
import pageStyles from './pages.module.css'

const FaqPage = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <Layout>
      <SEO title="Faq" />
      <Container>
        <Row className={pageStyles.pageContentContainer}>
          <Col>
            <Nav vertical pills>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }} tag="h4">
                  {content.ui.about.faq_main_content.general.header}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }} tag="h4">
                  {content.ui.about.faq_main_content.student.header}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '3' })}
                  onClick={() => { toggle('3'); }} tag="h4">
                  {content.ui.about.faq_main_content.instructor.header}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '4' })}
                  onClick={() => { toggle('4'); }} tag="h4">
                  {content.ui.about.faq_main_content.ta.header}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '5' })}
                  onClick={() => { toggle('5'); }} tag="h4">
                  {content.ui.about.faq_main_content.partner.header}
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col>
            <TabContent activeTab={activeTab}>
              {/* general */}
              <TabPane tabId="1">
                <Row>
                  <Col>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.general.cohort2.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.general.cohort2.answer} <a href={content.ui.about.faq_main_content.general.cohort2.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.faq_main_content.general.cohort2.link_text} </a> </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.general.schedule.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.general.schedule.answer} </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.general.length.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.general.length.answer} </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.general.location.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.general.location.answer} </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.general.community.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.general.community.answer} <a href={content.ui.about.faq_main_content.general.community.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.faq_main_content.general.community.link_text} </a> {content.ui.about.faq_main_content.general.community.text} </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.general.syllabus.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.general.syllabus.answer} <a href={content.ui.about.faq_main_content.general.syllabus.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.faq_main_content.general.syllabus.link_text} </a> </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.general.program.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.general.program.answer} </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              {/* student */}
              <TabPane tabId="2">
                <Row>
                  <Col>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.student.guidelines.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.student.guidelines.answer} </CardText>
                        <CardText>
                          <ul>
                            <li> {content.ui.about.faq_main_content.student.guidelines.ul1} </li>
                            <li> {content.ui.about.faq_main_content.student.guidelines.ul2} </li>
                            <li> {content.ui.about.faq_main_content.student.guidelines.ul3} </li>
                            <li> {content.ui.about.faq_main_content.student.guidelines.ul4} </li>
                          </ul>
                        </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.student.deadline.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.student.deadline.answer} <a href={content.ui.about.faq_main_content.student.deadline.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.faq_main_content.student.deadline.link_text} </a> </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.student.cost.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.student.cost.answer} </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.student.skills.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.student.skills.answer} </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.student.stipend.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.student.stipend.answer} </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.student.work.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.student.work.answer} <a href={content.ui.about.faq_main_content.student.work.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.faq_main_content.student.work.link_text} </a> {content.ui.about.faq_main_content.student.work.text} </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              {/* instructors */}
              <TabPane tabId="3">
                <Row>
                  <Col>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.instructor.process.question} </CardHeader>
                      <CardBody>
                        <CardText>
                          {content.ui.about.faq_main_content.instructor.process.answer.part1}
                          <br /> <br />
                          {content.ui.about.faq_main_content.instructor.process.answer.text1}
                          <hr />
                          {content.ui.about.faq_main_content.instructor.process.answer.part2}
                          <br /> <br />
                          {content.ui.about.faq_main_content.instructor.process.answer.text2}
                          <hr />
                          {content.ui.about.faq_main_content.instructor.process.answer.part3}
                          <br /> <br />
                          {content.ui.about.faq_main_content.instructor.process.answer.text3}
                          <hr />
                          {content.ui.about.faq_main_content.instructor.process.answer.part4}
                          <br /> <br />
                          {content.ui.about.faq_main_content.instructor.process.answer.text4}
                          <hr />
                          {content.ui.about.faq_main_content.instructor.process.answer.part5}
                          <br /> <br />
                          {content.ui.about.faq_main_content.instructor.process.answer.text5}
                        </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.instructor.time.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.instructor.time.answer} </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.instructor.responsibilities.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.instructor.responsibilities.answer} <a href={content.ui.about.faq_main_content.instructor.responsibilities.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.faq_main_content.instructor.responsibilities.link_text} </a> </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.instructor.paid.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.instructor.paid.answer} </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              {/* TAs */}
              <TabPane tabId="4">
                <Row>
                  <Col>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.ta.why.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.ta.why.answer} </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.ta.duties.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.ta.duties.answer} </CardText>
                        <CardText>
                          <ul>
                            <li> {content.ui.about.faq_main_content.ta.duties.ul1} </li>
                            <li> {content.ui.about.faq_main_content.ta.duties.ul2} </li>
                            <li> {content.ui.about.faq_main_content.ta.duties.ul3} </li>
                            <li> {content.ui.about.faq_main_content.ta.duties.ul4} </li>
                            <li> {content.ui.about.faq_main_content.ta.duties.ul5} </li>
                          </ul>
                        </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.ta.credit.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.ta.credit.answer} </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.ta.apply.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.ta.apply.answer} </CardText>
                        <CardText>
                          <ul>
                            <li> {content.ui.about.faq_main_content.ta.apply.ul1} </li>
                            <li> {content.ui.about.faq_main_content.ta.apply.ul2} </li>
                            <li> {content.ui.about.faq_main_content.ta.apply.ul3} </li>
                            <li> {content.ui.about.faq_main_content.ta.apply.ul4} </li>
                            <li> {content.ui.about.faq_main_content.ta.apply.ul5} </li>
                            <li> {content.ui.about.faq_main_content.ta.apply.ul6} </li>
                          </ul>
                        </CardText>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.ta.become.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.ta.become.answer} </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              {/* partners */}
              <TabPane tabId="5">
                <Row>
                  <Col>
                    <Card>
                      <CardHeader tag="h4"> {content.ui.about.faq_main_content.partner.hire.question} </CardHeader>
                      <CardBody>
                        <CardText> {content.ui.about.faq_main_content.partner.hire.answer} </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
        <Row className={pageStyles.pageContentContainer}>
          <Col>
            <h4> {content.ui.about.faq_main_content.questions.header} </h4>
            <p> {content.ui.about.faq_main_content.questions.text} </p>
            <Link to="/">Go Home</Link>
          </Col>

        </Row>
      </Container>

    </Layout>
  )
}

export default FaqPage
