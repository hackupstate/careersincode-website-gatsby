import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import { Container, Row, Col, Button } from "reactstrap";
import Centerstate from "../images/partners/cceo.jpg";
import Onondaga from "../images/partners/onondaga.jpg";
import Coworks from "../images/partners/coworks.jpg";
import Banner from "../images/partners/banner.jpg";
import Commonspace from "../images/partners/commonspace.png";
import Metis from "../images/partners/metis.jpg";
import TechGarden from "../images/partners/ttg.jpg";
import content from "../content/content.json";
import * as pageStyles from "./pages.module.css";
import * as partnerStyles from "./partner.module.css";

const PartnerPage = () => (
	<Layout>
		<Header>
			<NavComponent />
			<JumbotronComponent
				heading={content.ui.partners.partners_jumbotron.heading}
				subheading={content.ui.partners.partners_jumbotron.subheading}
			>
				<JumboButton
					btnLink="mailto:jesse@hackupstate.com?subject=Careers%20In%20Code%20Partnership"
					btnText="Email us"
				/>
				<JumboButton
					btnLink="https://www.canva.com/design/DAEgvedpMjs/JYTHqCkuUVd9Fs_B4HxNLw/view?utm_content=DAEgvedpMjs&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton&__s=tpqmbcw5zbfxdrtpbmev"
					btnText="How to get involved"
				/>
				<JumboButton
					btnLink="https://docs.google.com/forms/d/e/1FAIpQLSdSR30iV2My-_eoWAT9NFIwwVm_wtoMUwdCkNq1Z1RlZZYTTw/viewform"
					btnText="Take our business partner survey"
				/>
			</JumbotronComponent>
		</Header>
		<SEO title="Partner" />
		<Container fluid className={partnerStyles.blueStatContainer}>
			<Row className={partnerStyles.statRows}>
				<Col className={partnerStyles.statColumns}>
					<h3 className={partnerStyles.partnerStats}>
						{content.ui.partners.partners_stats.hiring_stat}
					</h3>
					<p className={partnerStyles.blueParaStats}>
						{content.ui.partners.partners_stats.hiring_text}
					</p>
				</Col>
				<Col className={partnerStyles.statColumns}>
					<h3 className={partnerStyles.partnerStats}>
						{content.ui.partners.partners_stats.bootcamp_stat}
					</h3>
					<p className={partnerStyles.greenParaStats}>
						{content.ui.partners.partners_stats.bootcamp_text}
					</p>
				</Col>
			</Row>
			<Row className={partnerStyles.statRows}>
				<Col className={partnerStyles.statColumns}>
					<h3 className={partnerStyles.partnerStats}>
						{content.ui.partners.partners_stats.salary_stat}
					</h3>
					<p className={partnerStyles.blueParaStats}>
						{content.ui.partners.partners_stats.salary_text}
					</p>
				</Col>
				<Col className={partnerStyles.statColumns}>
					<h3 className={partnerStyles.partnerStats}>
						{content.ui.partners.partners_stats.prepared_stat}
					</h3>
					<p className={partnerStyles.greenParaStats}>
						{content.ui.partners.partners_stats.prepared_text}
					</p>
				</Col>
			</Row>
		</Container>
		<Container fluid className={pageStyles.whiteContainer}>
			<Row className={pageStyles.pageHeadings}>
				<h2>{content.ui.partners.partners_logos.title}</h2>
			</Row>
			<Row className={pageStyles.pageHeadings}>
				<h3>Cohort 2</h3>
			</Row>
			<Row className={pageStyles.centerItems}>
				<img src={Banner} />
			</Row>
			<Row xs="2">
				<Col className={`${pageStyles.centerContentColumns} mt-3`}>
					<img src={Commonspace} alt="coworks-logo" />
				</Col>
				<Col className={`${pageStyles.centerContentColumns} mt-3`}>
					<img src={Metis} alt="metis-consulting-logo" />
				</Col>
			</Row>
		</Container>
		<Container fluid className={pageStyles.whiteContainer}>
			<Row className={pageStyles.pageHeadings}>
				<h3>Cohort 1</h3>
			</Row>
			<Row className={pageStyles.centerItems}>
				<img
					src={Onondaga}
					className={pageStyles.lgLogo}
					alt="onondaga-county-logo"
				/>
			</Row>
			<Row xs="2" className={pageStyles.marginBottom}>
				<Col className={pageStyles.centerContentColumns}>
					<img src={TechGarden} alt="the-tech-garden-logo" />
				</Col>
				<Col className={pageStyles.centerContentColumns}>
					<img src={Coworks} alt="centerstate-ceo-logo" />
				</Col>
			</Row>
			<Row xs="2">
				<Col className={pageStyles.centerContentColumns}>
					<img src={Centerstate} alt="coworks-logo" />
				</Col>
				<Col className={pageStyles.centerContentColumns}>
					<img src={Metis} alt="metis-consulting-logo" />
				</Col>
			</Row>
		</Container>
		<Container className={(pageStyles.containerStyles, pageStyles.centerText)}>
			<h2>{content.ui.partners.partner_info.title}</h2>
			<p>{content.ui.partners.partner_info.paragraph1}</p>
			<br />
			<p>{content.ui.partners.partner_info.paragraph2}</p>
			<br />
			{/* <Button color="info" className={pageStyles.marginBottom} 
          href={content.ui.partners.partner_info.button.link}
          target="_blank"
          rel="noopener noreferrer">
        <span
          className={pageStyles.btnLink}
        >
          {content.ui.partners.partner_info.button.text}
        </span>
      </Button> */}
		</Container>
	</Layout>
);

export default PartnerPage;
