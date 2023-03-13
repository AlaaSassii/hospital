import {useState , useEffect} from 'react'
import axios from 'axios'  ;
import { formatDateTime, replaceUnderscores } from '../../../../assets/functions';

const TableRows = ({Created , patient , Registration_Nos , doctor}) => {

  return (
            <tr>
            <td></td>
            <td></td>
            <td>{formatDateTime(Created).split(" ")[0]}</td>
            <td>{Registration_Nos}</td>
            <td>{patient[0]?.uuid}</td>
            <td>{patient[0]?.Name}</td>
            <td>{doctor.Name}</td>
          </tr>
  )
}

export default TableRows