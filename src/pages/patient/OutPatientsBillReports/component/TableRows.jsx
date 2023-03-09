import {useState , useEffect} from 'react'
import axios from 'axios'  ;
import { formatDateTime, replaceUnderscores } from '../../../../assets/functions';

const TableRows = ({bill}) => {
            console.log(bill)
  return (
            <tr>
            <td></td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{bill[0]?.total_items  }</td>
          </tr>
  )
}

export default TableRows