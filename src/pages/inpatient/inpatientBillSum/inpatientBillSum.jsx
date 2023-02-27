import React, { useContext } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsQuestionCircle } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import {BiFilterAlt} from 'react-icons/bi' ;

import './index.scss'
import { CurrentPageContext } from '../../../contexts/CurrentPage';

const InpatientBilSum = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  useEffect(()=>{
    setCurrentPage("In Patients Bill Reports")
  },[])
  return (
            <div>
            <h5 className='back'>{">back"}</h5>
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
    <div className={"buttons last-btns"}>
            <button className='def-button'>Excel</button>
            <button className='def-button'>Clear</button>
    </div>
    </div>
  )
}

export default InpatientBilSum