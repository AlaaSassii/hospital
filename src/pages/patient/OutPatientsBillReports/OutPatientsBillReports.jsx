import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import {BsQuestionCircle} from 'react-icons/bs' ; 
import {FiSearch} from 'react-icons/fi' ; 
import {AiOutlinePlus} from 'react-icons/ai' ; 
import {BiFilterAlt} from 'react-icons/bi' ;
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
import axios from 'axios';
import TableRows from './component/TableRows';
const Patient2 = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
const {MenuPage , setMenuPage} = useContext(MenuPageContext);
  const [FetchingLoading , setFetchingLoading] = useState(true) ; 
  const [data , setdata ] = useState("") ;

  useEffect(()=>{
    setFetchingLoading(true) ; 
    axios("http://3.110.179.238:8000/Patient/OutPatient-List-View")
    .then(resp =>{ console.log(resp.data); setdata(resp.data);setFetchingLoading(false);})
    .catch(err => console.log(err)) ;
  },[])
  useEffect(()=>{
    setCurrentPage("Out Patients Bill Reports") ; 
    setMenuPage(false)

  },[])
  if(FetchingLoading) return <h1>Loading...</h1>
  return (
    <div>
         <div id='back'>{"<Back"}</div>
            <div className='save '>
            <h6>Bill reports</h6>
            <div className='btn-icons'>
            <button><BsQuestionCircle style={{fontSize:25}}/></button>
            <button><BiFilterAlt style={{fontSize:25}}/></button>
            <button><FiSearch style={{fontSize:25}}/></button>
            <button><div><AiOutlinePlus style={{fontSize:25}}/></div></button>
            </div>
            
            </div>
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
        {data.results.map((element , index) => <TableRows index={index} key={index} {...element}/>)}
          {/* Add more rows here */}
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


export default Patient2