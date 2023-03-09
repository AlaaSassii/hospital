import React from 'react'
import { formatDateTime } from '../../../../assets/functions'

const TableRow = ({patient , doctor , Status , Created , index}) => {
  return (
    <tr>
            <td>{index + 1 }</td>
            <td>{patient[0]["Name"]}</td>
            <td>{doctor["Name"]}</td>
            <td>{Status}</td>
            <td>{formatDateTime(Created).split(" ")[0]}</td>
    </tr>
  )
}

export default TableRow