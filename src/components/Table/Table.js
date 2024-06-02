import React from "react";
// import TableRow from "../TableRow/TableRow";
import "./Table.css";

function Table(props) {
  const { heading, body } = props;
  return (
    <div className="table-head">
      <table>
        <tr>
          {heading.map((head, headID) => (
            <th key={headID}>{head}</th>
          ))}
        </tr>
        <tbody>
          {body.map((rowContent, rowID) => (
            <tr >
              {rowContent.map((val, rowID) => (
                <td key={rowID}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
