import React, { useContext, useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsQuestionCircle } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import {BiFilterAlt} from 'react-icons/bi' ;

import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
import axios from 'axios';
import TableRows from '../../patient/OutPatientSummary/components/TableRows';

const InpatientBillSum = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
const {MenuPage , setMenuPage} = useContext(MenuPageContext);
  const [FetchingLoading , setFetchingLoading] = useState(true) ; 
  const [data , setdata ] = useState("") ;

  useEffect(()=>{
    setFetchingLoading(true) ; 
    axios("http://13.232.134.127:8000/Patient/Inpatient-List-View")
    .then(resp =>{ console.log(resp.data); setdata(resp.data);setFetchingLoading(false);})
    .catch(err => console.log(err)) ;
  },[])

  useEffect(()=>{
    setCurrentPage("Out Patients Bill Reports ") ; 
    setMenuPage(false)
  },[])
  if(FetchingLoading) return <h1>Loading...</h1>
  return (
            <div className='OutPatientSummary'>
            <div id='back'>{">back"}</div>
            <div className='save '>
            <div className='btn-icons'>
            <button><div><AiOutlinePlus style={{fontSize:25}}/></div></button>
            <button><BiFilterAlt style={{fontSize:25}}/></button>
            <button><FiSearch style={{fontSize:25}}/></button>
            <button><BsQuestionCircle style={{fontSize:25}}/></button>
            </div>
            
            </div>
            <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>{"< Filter >"}</th>
            <th>Cash / Card</th>
            <th>Other</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="table-body">
        {data.results.map((element , index) => <TableRows index={index} key={index} {...element}/>)}
   
        </tbody>
      </table>
    </div>
    <div className={"buttons last-btns"}>
            <button className='def-button'>Excel</button>
            <button className='def-button'>Clear</button>
    </div>
    </div>
  )
}

export default InpatientBillSum