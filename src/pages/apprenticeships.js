import React, { useState } from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import {
	Container,
	Row,
	Col,
	Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane,
	Card,
	CardText,
	CardHeader,
	CardBody,
} from "reactstrap";
import classnames from "classnames";
import content from "../content/content.json";
import * as pageStyles from "./pages.module.css";
import * as instructorStyles from "./instructors.module.css";

import * as faqStyles from "./faq.module.css";
import Timeline from "../images/misc/apprenticeship-timeline.png";

const ApprenticeshipPage = (props) => {
	const [activeTab, setActiveTab] = useState("1");

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<Layout>
			<Header>
				<NavComponent />
				<JumbotronComponent
					heading="Apprenticeships at Careers in Code"
					subheading="Hack Upstate’s Careers in Code and MACNY are proud to be partnering to create an apprenticeship program for Software Developers in Central and Upstate NY. We will provide our students with the skills necessary to be successful with local employers after 24 total weeks of instruction. "
				></JumbotronComponent>
			</Header>
			<SEO title="Apprenticeships" />

			<Container>
				<Row className={faqStyles.whiteContainer}>
					<Col md="4">
						<Nav vertical pills className={faqStyles.listMenu}>
							<NavItem>
								<NavLink
									className={classnames(
										{ active: activeTab === "1" },
										faqStyles.tabLink
									)}
									onClick={() => {
										toggle("1");
									}}
									tag="h4"
								>
									Prospective Apprentices
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className={classnames(
										{ active: activeTab === "2" },
										faqStyles.tabLink
									)}
									onClick={() => {
										toggle("2");
									}}
									tag="h4"
								>
									Prospective Employers
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className={classnames(
										{ active: activeTab === "3" },
										faqStyles.tabLink
									)}
									onClick={() => {
										toggle("3");
									}}
									tag="h4"
								>
									Components of Registered Apprenticeship
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
					<Col>
						<TabContent activeTab={activeTab} className={faqStyles.answerCards}>
							{/* GENERAL */}
							<TabPane tabId="1">
								<Row className={pageStyles.leftAlign}>
									<Col md="12">
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">Who is this for?</CardHeader>
											<CardBody>
												<CardText>
													<p>
														Our apprenticeship program is available to all
														students that are enrolled in the second cohort of
														Careers in Code. If you are not enrolled in Careers
														in Code but have a passion for technology, reach us
														to us and we’ll see what we can do.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">
												Why should you become an apprentice?
											</CardHeader>
											<CardBody>
												<CardText>
													<p>
														Studies have shown that apprentices are more
														qualified and job-ready than fellow job seekers.
														Apprentices have the ability to choose a field or
														industry that they are genuinely interested in,
														which leads to higher job satisfaction and higher
														employee retention. Completing an apprenticeship
														puts you on the right path to future success.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">
												What skills and experience do I need?
											</CardHeader>
											<CardBody>
												<CardText>
													<p>
														Our apprentices do not require any software
														development skills. We do require core competency
														and being comfortable with using the Mac OS.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">Training and education</CardHeader>
											<CardBody>
												<CardText>
													<p>
														As an apprentice, you’ll receive the technical
														skills and experience that you need to be
														successful. We partner with local employers to
														ensure you are ready to contribute to the technology
														workforce.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">Compensation</CardHeader>
											<CardBody>
												<CardText>
													<p>
														As an apprentice, you’ll be working as a W-2
														employee with a local employer. It is a full time
														position with this employer at a lower salary, but
														with full benefits.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">Interview process</CardHeader>
											<CardBody>
												<CardText>
													<ol>
														<li>
															<strong>Complete our application.</strong> You’ll
															complete an application submitting some
															information to us to learn more about you and your
															goals for an apprenticeship program.{" "}
														</li>
														<li>
															<strong>Initial Interview.</strong> Hack Upstate
															will set up a 30 minute call with you to gauge
															your interest levels and goals for the
															apprenticeship program.
														</li>
														<li>
															<strong>Employer Interview.</strong> If we decide
															you are a good fit from our initial call, we’ll
															set up a 30 minute interview with a few employers
															that are interested in learning more about you as
															a potential apprentice.
														</li>
														<li>
															<strong>Final Decision.</strong> After our series
															of interviews, Careers in Code, MACNY, and the
															employer will make a decision if you are accepted
															as an apprentice and finalize the process.
														</li>
													</ol>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">Apply now</CardHeader>
											<CardBody>
												<CardText>
													<p>
														Interested in becoming an apprentice with Careers in
														Code and MACNY?{" "}
														<a href="https://docs.google.com/forms/d/e/1FAIpQLSc4dkS6GGnxB__SI1YJlxgv7QB2j8rEEmayih4_Ss1gp0Uk7A/viewform">
															Apply now!
														</a>
													</p>
												</CardText>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</TabPane>
							{/* EMPLOYER */}
							<TabPane tabId="2">
								<Row className={pageStyles.leftAlign}>
									<Col>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">Who is this for?</CardHeader>
											<CardBody>
												<CardText>
													<p>
														If you are an employer based in Central or Upstate
														NY with immediate hiring needs and are seeking
														qualified talent to diversify your workforce, then
														this program is for you.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">
												Why should you hire an apprentice?
											</CardHeader>
											<CardBody>
												<CardText>
													<p>
														The talent graduating from our program are
														passionate and motivated individuals who are looking
														to learn as much as possible to improve their skills
														in the technology industry. We’ll work with you to
														ensure that our apprentices will graduate with the
														technical skills they need to be successful at your
														organization. Our program provides the essential
														instruction, preparation, and support that
														participants need to be successful in the next step
														in their career paths as Software Developers at your
														organization. With a focus on entering high-quality
														apprenticeship programs, our participants have the
														necessary soft skills, technical skills, and
														academic credentials to be successful at your
														organization.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">Return on investment</CardHeader>
											<CardBody>
												<CardText>
													<p>
														Hiring an apprentice as an investment. As an
														employer, you’ll be hiring an apprentice at a lower
														salary than a skilled worker with years of
														experience. With training through Careers in Code,
														our apprentices will become qualified individuals at
														your organization who will help to grow and advance
														your company forward. We have a rigorous screening
														and vetting process for all our apprentices to
														ensure they are a good fit for your organization.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">Timelines</CardHeader>
											<CardBody>
												<CardText>
													<p>
														<strong>Early-Mid August</strong>
													</p>
													<ul>
														<li>
															Commitment from local employers to hire
															apprentices at their organizations.
														</li>
													</ul>

													<p>
														<strong>Mid-Late August - Early September</strong>
													</p>
													<ul>
														<li>
															Careers in Code and MACNY apprenticeship
															interviews.
														</li>
														<li>
															Employer presentations to prospective apprentices.
														</li>
														<li>Employer apprenticeship interviews.</li>
													</ul>

													<p>
														<strong>September</strong>
													</p>
													<ul>
														<li>Final decisions on apprentices.</li>
													</ul>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">How much does this cost?</CardHeader>
											<CardBody>
												<CardText>
													<p>
														For the pilot program, it's a flat, $8,500 fee.
														Long-term, we're exploring recruitment fees that
														would make the most sense for a sustainable model.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">
												What does this cost contribute to? Is it our
												participation with the apprenticeship program and having
												access to these candidates? Kind of like a membership
												fee?
											</CardHeader>
											<CardBody>
												<CardText>
													<p>
														Correct. You can think of this like a one-time
														membership fee of sorts, i.e. having direct access
														to qualified software developers.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">
												Is the cost also connected with the training programs
												the apprentices are doing as well?
											</CardHeader>
											<CardBody>
												<CardText>
													<p>
														Correct. The fee covers the current training covered
														by Careers in Code. If there are additional training
														/ specialized training programs that you require for
														the prospective apprentices, we can discuss.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">
												Is there other additional cost for those programs or is
												that covered by MACNY?
											</CardHeader>
											<CardBody>
												<CardText>
													<p>
														MACNY will work with you on any additional training
														w/r/t what you’re looking for, cost, timelines, etc.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">
												Prior to interviews, we need the candidates to complete
												an online application. Is this OK?
											</CardHeader>
											<CardBody>
												<CardText>
													<p>
														This wouldn't be an issue. When we begin to queue up
														the interview process, you can note this w/ our
														prospective apprentices who are interviewing w/ you.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">
												What type of support/time is needed on behalf of the
												employer?
											</CardHeader>
											<CardBody>
												<CardText>
													<p>
														MACNY handles all the internal management and
														everything with the state. MACNY will ask you to
														meet with us once per quarter for 45 mins - 1 hour.
														We will always be avaliable to answer any questiosn
														and help with anything you need.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">
												If an apprentice didn’t work out during employment is
												the cost refunded?
											</CardHeader>
											<CardBody>
												<CardText>
													<p>
														We do not offer a placement / money-back guarantee.
														The prospective apprentices have been vetted 3 times
														through a proven interview process to ensure
														retention. You’ll have an opportunity to interview
														everyone in the cohort to ensure that the apprentice
														is a good fit at your organization. You do not
														commit to hire anyone until you find the right
														person who you’d like to bring on board to your
														team.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">Apply now</CardHeader>
											<CardBody>
												<CardText>
													<p>
														Interested in hiring an apprentice with Careers in
														Code and MACNY?{" "}
														<a href="https://docs.google.com/forms/d/e/1FAIpQLScPSxR3t9YdFh5veiBMWQV2i2JNDnxW2gwZY4twfG3uwYkw9A/viewform">
															Complete the following
														</a>{" "}
														and we’ll be in touch!
													</p>
												</CardText>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</TabPane>
							<TabPane tabId="3">
								<Row className={pageStyles.leftAlign}>
									<Col>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">About</CardHeader>
											<CardBody>
												<CardText>
													<p>
														This approach is the “Competency-based approach”.
														Apprentices complete a minimum of 1,000 hours of
														on-the-job training in any areas of the training
														outline. Apprentices register for at least 144 hours
														of related instruction, but may test out earlier.
														Apprentices participate until they have shown
														competency for each skill in the training outline.
														Competency is demonstrated by both written and
														hands-on testing.
													</p>
													<p>
														The term of apprenticeship may be measured either
														through the completion of the industry standard for
														hours of on-the-job learning and related and
														supplemental instruction, attainment of competency,
														or a hybrid blend of the time-based and
														competency-based approaches. However, programs in
														the building and construction trades and for
														firefighters shall use the time-based approach.
													</p>
													<p>
														The competency-based approach measures skill
														acquisition through the individual apprentice’s
														successful demonstration of acquired skills and
														knowledge, as verified by the program sponsor.
														Programs utilizing this approach shall require
														apprentices to complete no less than six months of
														an on-the-job learning component of registered
														apprenticeship. The program standards shall address
														how on-the-job learning will be integrated into the
														program, describe competencies, meet
														industry-recognized standards or certifications, and
														identify an appropriate means of testing and
														evaluation for such competencies.
													</p>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">5 Components</CardHeader>
											<CardBody>
												<CardText>
													<ol>
														<li>
															<strong>Employer involvement.</strong> An employer
															must formally hire the apprentices and train them
															at its workplace, using a curriculum and standards
															customized to its work processes.
														</li>
														<li>
															<strong>Structured on-the-job learning.</strong>{" "}
															The apprentices must have opportunities to learn
															by doing in real-world work environments, with
															support from supervisors or other workplace
															mentors.
														</li>
														<li>
															<strong>Related instruction.</strong> The program
															must include academic coursework to complement the
															applied work experience. Instruction typically
															takes place in a classroom, but programs are
															increasingly offering online classes.
														</li>
														<li>
															<strong>Rewards for skills gains.</strong>{" "}
															Participants in Registered Apprenticeships must be
															paid for the work they do from day one. And their
															pay should increase as they develop new skills and
															become more adept at their jobs. The more they
															learn, the more they earn.
														</li>
														<li>
															<strong>National occupational credential.</strong>{" "}
															Registered Apprenticeships should lead to a
															nationally recognized credential or certificate
															for everyone who successfully completes the
															program.
														</li>
													</ol>
												</CardText>
											</CardBody>
										</Card>
										<Card className={faqStyles.infoCard}>
											<CardHeader tag="h4">Training Outline</CardHeader>
											<CardBody>
												<CardText>
													<p>
														Class training times are based on 3 hour classes, 4
														days per week, over the span of 24 weeks for a total
														of 288 hours of instruction from Careers in Code. We
														have included{" "}
														<a href="/Careers in Code - MACNY - Apprenticeship Training Outline.pdf">
															{" "}
															some potential training options for our
															apprentices here
														</a>
														. We'll work closely with employers to determine the
														training options for our apprentices.
													</p>
												</CardText>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</TabPane>
						</TabContent>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default ApprenticeshipPage;
