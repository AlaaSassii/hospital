import {useState , useEffect} from 'react'
import axios from 'axios'  ;
import { formatDateTime, replaceUnderscores } from '../../../../assets/functions';

const TableRows = ({bill , index }) => {
            console.log(bill)
  return (
            <tr>
            <td>{index}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{bill[0]?.Created_by}</td>
            <td>{bill[0]?.total_items  }</td>
          </tr>
  )
}

export default TableRows