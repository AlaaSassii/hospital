import React, { useContext, useEffect } from 'react'
import './index.scss'
import {BsQuestionCircle} from 'react-icons/bs' ; 
import {FiSearch} from 'react-icons/fi' ; 
import {AiOutlinePlus} from 'react-icons/ai' ; 
import {BiFilterAlt} from 'react-icons/bi' ;
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
const Patient2 = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  const { setMenuPage } = useContext(MenuPageContext)
  useEffect(()=>{
    setCurrentPage("Out Patients Bill Reports") ; 
    setMenuPage(false)

  },[])
  return (
    <div>
         <div className="back">{"<Back"}</div>
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
    <div className={"buttons last-btns"}>
            <button className='def-button'>Excel</button>
            <button className='def-button'>Clear</button>
    </div>
    </div>
  )
}


export default Patient2