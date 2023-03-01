import React, { useContext, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
import './index.scss'
const OutPatientWaitingList = () => {
            const {setMenuPage} = useContext(MenuPageContext) ; 
            const {setCurrentPage} = useContext(CurrentPageContext) ;
            useEffect(()=>{
                        setMenuPage(false) ; 
                        setCurrentPage("Out Patients Waiting List")
            },[])
  return (
    <div className='OutPatientWaitingList'>
            <div className="back">{"< back"}</div>
            <div className='save '>
            <span style={{display:"inline-block", fontWeight:700 , fontSize:17}}>Waiting patient <span style={{color:"#ccc"}}>(5)</span></span>
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
            <th>S.No</th>
            <th>Name</th>
            <th>Consultant</th>
            <th>Status</th>
            <th>Reg time</th>
          </tr>
        </thead>
        <tbody className="table-body">
        <tr>
            <td>1</td>
            <td>Mary Joseph</td>
            <td>Dr. someone</td>
            <td><span className='status_recoverd'>In</span></td>
            <td>12:48  PM</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Amala Jones</td>
            <td>Stroke</td>
            <td><span className='status_awaiting_surgery'>Waiting</span></td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Selim jubril</td>
            <td>Typhoid</td>
            <td><span className='status_awaiting_surgery'>Waiting</span></td>
            <td>12/10/2022</td>
          </tr>  <tr>
            <td>4</td>
            <td>Damilola Oyin</td>
            <td>Liver failure</td>
            <td><span className='status_awaiting_surgery'>Waiting </span></td>
            <td>9/10/2022</td>
          </tr>  <tr>
            <td>5</td>
            <td>Paul christian</td>
            <td>Gonorrhea</td>
            <td><span className='status_awaiting_surgery'>Waiting</span></td>
            <td>22/10/2022</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td><span className='status_recoverd'>Date 4</span></td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Data 5</td>
            <td>Data 5</td>
            <td><span className='status_recoverd'>Date 4</span></td>
            <td>Data 6</td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
     
    </div>
    </div>
  )
}

export default OutPatientWaitingList