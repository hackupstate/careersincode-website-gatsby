import React from "react"
import { Table } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
// import tableStyles from "./jumbotron.module.css"

const TableComponent = props => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>{props.header1}</th>
            <th>{props.header2}</th>
            <th>{props.header3}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>###</td>
            <td>###</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>###</td>
            <td>###</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>###</td>
            <td>###</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default TableComponent
