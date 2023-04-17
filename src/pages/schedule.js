import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import { Container, Row, Table } from "reactstrap";
import content from "../content/content.json";
import * as scheduleStyles from "./schedule.module.css";
// import * as pageStyles from "./pages.module.css";

const SchedulePage = () => (
	<Layout>
		<Header>
			<NavComponent />
			<JumbotronComponent
				heading={content.ui.schedule.schedule_jumbotron.heading}
			/>
		</Header>
		<SEO title="Schedule" />
		<Container fluid className={scheduleStyles.tableContainer}>
			<Row>
				<Table borderless striped>
					<thead className={scheduleStyles.tableHeader}>
						<tr>
							<th>
								{content.ui.schedule.schedule_main_content.table.header_date}
							</th>
							<th>
								{content.ui.schedule.schedule_main_content.table.header_time}
							</th>
							<th>
								{content.ui.schedule.schedule_main_content.table.header_event}
							</th>
						</tr>
					</thead>
					<tbody>
						{/* ROW 1 */}
						<tr>
							<th scope="row">
								{content.ui.schedule.schedule_main_content.table.event1.date}
							</th>
							<td>
								{content.ui.schedule.schedule_main_content.table.event1.time}
							</td>
							<td>
								{content.ui.schedule.schedule_main_content.table.event1.event}
							</td>
						</tr>
						{/* ROW 2 */}
						<tr>
							<th scope="row">
								{content.ui.schedule.schedule_main_content.table.event2.date}
							</th>
							<td>
								{content.ui.schedule.schedule_main_content.table.event2.time}
							</td>
							<td>
								{content.ui.schedule.schedule_main_content.table.event2.event}
							</td>
						</tr>
						{/* ROW 3 */}
						<tr>
							<th scope="row">
								{content.ui.schedule.schedule_main_content.table.event3.date}
							</th>
							<td>
								{content.ui.schedule.schedule_main_content.table.event3.time}
							</td>
							<td>
								<a
									href={
										content.ui.schedule.schedule_main_content.table.event3.link
									}
									target="_blank"
									rel="noopener noreferrer"
								>
									{content.ui.schedule.schedule_main_content.table.event3.event}
								</a>
							</td>
						</tr>
						{/* ROW 4 */}
						<tr>
							<th scope="row">
								{content.ui.schedule.schedule_main_content.table.event4.date}
							</th>
							<td>
								{content.ui.schedule.schedule_main_content.table.event4.time}
							</td>
							<td>
								{content.ui.schedule.schedule_main_content.table.event4.event}
							</td>
						</tr>
						{/* ROW 5 */}
						<tr>
							<th scope="row">
								{content.ui.schedule.schedule_main_content.table.event5.date}
							</th>
							<td>
								{content.ui.schedule.schedule_main_content.table.event5.time}
							</td>
							<td>
								{content.ui.schedule.schedule_main_content.table.event5.event}{" "}
								<a
									href={
										content.ui.schedule.schedule_main_content.table.event5.link
									}
									target="_blank"
									rel="noopener noreferrer"
								>
									{
										content.ui.schedule.schedule_main_content.table.event5
											.linkText
									}
								</a>
							</td>
						</tr>
						{/* ROW 6 */}
						<tr>
							<th scope="row">
								{content.ui.schedule.schedule_main_content.table.event6.date}
							</th>
							<td>
								{content.ui.schedule.schedule_main_content.table.event6.time}
							</td>
							<td>
								<a
									href={
										content.ui.schedule.schedule_main_content.table.event6.link
									}
									target="_blank"
									rel="noopener noreferrer"
								>
									{content.ui.schedule.schedule_main_content.table.event6.event}
								</a>
							</td>
						</tr>
						{/* ROW 7 */}
						<tr>
							<th scope="row">
								{content.ui.schedule.schedule_main_content.table.event7.date}
							</th>
							<td>
								{content.ui.schedule.schedule_main_content.table.event7.time}
							</td>
							<td>
								<a
									href={
										content.ui.schedule.schedule_main_content.table.event7.link
									}
									target="_blank"
									rel="noopener noreferrer"
								>
									{content.ui.schedule.schedule_main_content.table.event7.event}
								</a>
							</td>
						</tr>
						{/* ROW 8 */}
						<tr>
							<th scope="row">
								{content.ui.schedule.schedule_main_content.table.event8.date}
							</th>
							<td>
								{content.ui.schedule.schedule_main_content.table.event8.time}
							</td>
							<td>
								<a
									href={
										content.ui.schedule.schedule_main_content.table.event8.link
									}
									target="_blank"
									rel="noopener noreferrer"
								>
									{content.ui.schedule.schedule_main_content.table.event8.event}
								</a>
							</td>
						</tr>
						{/* ROW 9 */}
						<tr>
							<th scope="row">
								{content.ui.schedule.schedule_main_content.table.event9.date}
							</th>
							<td>
								{content.ui.schedule.schedule_main_content.table.event9.time}
							</td>
							<td>
								<a
									href={
										content.ui.schedule.schedule_main_content.table.event9.link
									}
									target="_blank"
									rel="noopener noreferrer"
								>
									{content.ui.schedule.schedule_main_content.table.event9.event}
								</a>
							</td>
						</tr>
					</tbody>
				</Table>
			</Row>
		</Container>

		{/* <Button>
      <a
        href={content.ui.schedule.schedule_main_content.table.event7.link}
        target="_blank"
        rel="noopener noreferrer"
        className={pageStyles.btnLink}
      >
        outcomes
      </a>
    </Button> */}
	</Layout>
);

export default SchedulePage;
