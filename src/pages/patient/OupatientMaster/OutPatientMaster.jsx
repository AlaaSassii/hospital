import React, { useContext, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import {MenuPageContext } from '../../../contexts/MenuPage'
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import './index.scss'
const OutPatientMaster = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  const {setMenuPage} = useContext(MenuPageContext)
  useEffect(()=>{
    setCurrentPage("Out Pateint Master") ; 
    setMenuPage(false) ; 
  },[])
  return (
    <div className='OutPatientMaster'>
            <div className='back'>{"<Back"}</div>
            <form >
            <div className='forms'>
            <div><p>It Code</p><input type="text" /></div>
            <div><p>Description</p><input type="text" /></div>
            <div><p>Category</p><input type="text" /></div>
            <div><p>Amount</p><input type="text" /></div>
            <button>Save</button>
            </div>
            <div>
            <h3>Total Patients <span>(487)</span></h3>
            <div><input type="text" />
            <button><FiSearch style={{fontSize:20}}/></button>
            <button><AiOutlineQuestionCircle style={{fontSize:20}}/></button>
            </div>
            </div>
            </form>
            <div className="table-container">
            <table>
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>54125415</td>
            <td>Xray</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>54125415</td>
            <td></td>
            <td>2000</td>
            </tr>
            <tr>
            <td>54125415</td>
            <td></td>
            <td>2000</td>
            </tr>
            <tr>
            <td>54125415</td>
            <td></td>
            <td>2000</td>
            </tr>

        </tbody>
      </table>
      </div>
    
    </div>
  )
}

export default OutPatientMaster