import React, { useContext, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsQuestionCircle } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import {BiFilterAlt} from 'react-icons/bi' ;

import './index.scss'
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';

const OutPatientSummary = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
const {MenuPage , setMenuPage} = useContext(MenuPageContext);

  useEffect(()=>{
    setCurrentPage("Out Patients Bill Reports ") ; 
    setMenuPage(false)
  },[])
  return (
            <div className='OutPatientSummary'>
            <div className='back'>{">back"}</div>
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
            <th>Credit</th>
            <th>Other</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
          </tr>
       
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

export default OutPatientSummary