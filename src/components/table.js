import React from "react";
import { Table } from "reactstrap";
import tableStyles from "./table.module.css";

const TableComponent = (props) => {
  return (
    <div>
      <Table borderless hover>
        <thead className={tableStyles.tableHeader}>
          <tr>
            <th>{props.header1}</th>
            <th>{props.header2}</th>
            <th>{props.header3}</th>
            <th>{props.header4}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{props.position1}</th>
            <td>{props.location1}</td>
            <td>
              <a
                href={props.description1}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.linktext}
              </a>
            </td>
            <td>
              <a
                href={props.application1}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.application_text}
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">{props.position2}</th>
            <td>{props.location2}</td>
            <td>
              <a
                href={props.description2}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.linktext}
              </a>
            </td>
            <td>
              <a
                href={props.application2}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.application_text}
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">{props.position3}</th>
            <td>{props.location3}</td>
            <td>
              <a
                href={props.description3}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.linktext}
              </a>
            </td>
            <td>
              <a
                href={props.application3}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.application_text}
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">{props.position4}</th>
            <td>{props.location4}</td>
            <td>
              <a
                href={props.description4}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.linktext}
              </a>
            </td>
            <td>
              <a
                href={props.application4}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.application_text}
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">{props.position5}</th>
            <td>{props.location5}</td>
            <td>
              <a
                href={props.description5}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.linktext}
              </a>
            </td>
            <td>
              <a
                href={props.application5}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.application_text}
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
