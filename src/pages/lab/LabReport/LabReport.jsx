import React, { useContext, useEffect, useState } from 'react'
import { Calendar } from 'react-date-range'
import format from 'date-fns/format' 
import { AiOutlineCalendar, AiOutlinePlus } from 'react-icons/ai';
import {BiFilterAlt} from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi';
import { BsQuestionCircle } from 'react-icons/bs';
import './index.scss'
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
import axios from 'axios';
function LabReport() {

  const {setCurrentPage } = useContext(CurrentPageContext) ;
  const {setMenuPage} = useContext(MenuPageContext) 
  useEffect(()=>{
    setCurrentPage("Lab report") ; 
    setMenuPage(false) ; 
  },[])
      const [pName , setpName] = useState("");
      const [pId , setPid] = useState("") ; 
      const [eNum , seteNum] = useState("") ; 
      
      useEffect(()=>{
        if(pName || pId || eNum){
               axios(`http://13.232.134.127:8000/Patient/OutPatient-List-View?Entry_No=${eNum}&patient_name=${pName}&patient_id=${pId}`)
                .then(resp =>{ console.log(resp.data.results) ; setpatientData(resp.data.results) ; }) // take the results
                .catch(err => console.log(err)) 
        }
      },[pName , pId ,eNum ])
  return (
    <div className='LabReport'>
            <div className='back'>{"< Back"}</div>
            <div>
              <div>
            <p>patient Name</p>
            <input type="text" value={pName} onChange={e => setpName(e.target.value)} />
              </div>
              <div>
            <p>patient id</p>
            <input type="text" value={pId}  onChange={e => setPid(e.target.value)}/>
              </div>
              <div>
            <p>Entry_No</p>
            <input type="text" value={eNum}  onChange={e => seteNum(e.target.value)}/>
              </div>
            </div>
            <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>{"< Filter >"}</th>
            <th>Cash</th>
            <th>Card</th>
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
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
          </tr>  <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
          </tr>  <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 5</td>
            <td>Data 5</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
            </div>
    </div>
  )
}

export default LabReport