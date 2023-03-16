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
  const [data , setdata ] = useState([]) ;
  const [name , setname] = useState("") ; 
  const [reg  ,setReg] = useState("")
  useEffect(()=>{
    if(name || reg){
    axios(`http://13.232.134.127:8000/Patient/Inpatient-List-View?patient_name=${name}&Registration_Nos=${reg}`)
    .then(resp =>{ console.log(resp.data.results); setdata(resp.data.results)})
    .catch(err => console.log(err)) ;}
  },[name , reg])

  useEffect(()=>{
    setCurrentPage("Out Patients Bill Reports ") ; 
    setMenuPage(false)
  },[])
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
            <div><p>name</p><input type="text" value={name} onChange={e=>setname(e.target.value)} /></div>
            <div><p>reg</p><input type="text" value={reg} onChange={e=>setReg(e.target.value)} /></div>
            <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>{"< Filter >"}</th>
            <th>Cash / Card</th>
            <th>Credit</th>
            <th>Other</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="table-body">
            {
              data.map((element , index) => <tr key={index}><td>{element?.Registration_Nos}</td><td>{element?.bill?.[0]?.Paid_Through}</td><td>{element?.bill?.[0]?.Remaining_Amount}</td><td>{element?.bill?.[0]?.Remaining_Amount}</td><td>{element?.bill?.[0]?.Total_Amount_Paid}</td></tr>)
            }
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