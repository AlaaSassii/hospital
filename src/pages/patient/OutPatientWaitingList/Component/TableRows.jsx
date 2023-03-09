import {useState , useEffect} from 'react'
import axios from 'axios'  ;
import { formatDateTime, replaceUnderscores } from '../../../../assets/functions';

const TableRows = ({patient , doctor , Status , Created , index}) => {
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

export default TableRows