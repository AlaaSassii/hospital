import React, { useContext, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDotsHorizontalRounded, BiFilterAlt } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
import './index.scss'
const OutPatientList = () => {
            const {setMenuPage} = useContext(MenuPageContext) ; 
            const {setCurrentPage} = useContext(CurrentPageContext) ;
            useEffect(()=>{
                        setMenuPage(false) ; 
                        setCurrentPage("")
            },[])

  return (
    <div className='OutPatientList'>
            <div className="back">{"< back"}</div>
            <div className='OutPatientList__container'>
                        <div className="OutPatientList__header">
                                    <div className='OutPatientList__header_total_patient'>Total Patients <span>(487)</span></div> 
                                    <div className='OutPatientList__header_buttons'>
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
            <th >{"Name"}</th>
            <th>Diagnosis</th>
            <th>Status</th>
            <th>Last Appointment</th>
            <th>Next appointment</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td >Mary Joseph</td>
            <td className=''>Malaria</td>
            <td ><span className='status_recoverd'>Recovered</span></td>
            <td>20/10/2022</td>
            <td>1/12/2022</td>
            <td><BiDotsHorizontalRounded color='#777' fontSize={25}/></td>
          </tr>
          <tr>
          <td >Mary Joseph</td>
            <td className=''>Malaria</td>
            <td><span  className='status_on_treatment'>On treatment </span></td>
            <td>20/10/2022</td>
            <td>1/12/2022</td>
            <td><BiDotsHorizontalRounded color='#777' fontSize={25}/></td>
          </tr>
          <tr>
          <td >Mary Joseph</td>
            <td className=''>Malaria</td>
            <td ><span className='status_awaiting_surgery'>Awaiting surgery</span></td>
            <td>20/10/2022</td>
            <td>1/12/2022</td>
            <td><BiDotsHorizontalRounded color='#777' fontSize={25}/></td>
          </tr>
          <tr>
          <td >Mary Joseph</td>
            <td className=''>Malaria</td>
            <td><span  className='status_on_treatment'>On treatment </span></td>
            <td>20/10/2022</td>
            <td>1/12/2022</td>
            <td><BiDotsHorizontalRounded color='#777' fontSize={25}/></td>
          </tr>
          <tr>
            <td >Mary Joseph</td>
            <td className=''>Malaria</td>
            <td ><span className='status_recoverd'>Recovered</span></td>
            <td>20/10/2022</td>
            <td>1/12/2022</td>
            <td><BiDotsHorizontalRounded color='#777' fontSize={25}/></td>
          </tr>
          <tr>
            <td >Mary Joseph</td>
            <td className=''>Malaria</td>
            <td ><span className='status_recoverd'>Recovered</span></td>
            <td>20/10/2022</td>
            <td>1/12/2022</td>
            <td><BiDotsHorizontalRounded color='#777' fontSize={25}/></td>
          </tr>
          <tr>
          <td >Mary Joseph</td>
            <td className=''>Malaria</td>
            <td ><span className='status_awaiting_surgery'>Awaiting surgery</span></td>
            <td>20/10/2022</td>
            <td>1/12/2022</td>
            <td><BiDotsHorizontalRounded color='#777' fontSize={25}/></td>
          </tr>
          <tr>
          <td >Mary Joseph</td>
            <td className=''>Malaria</td>
            <td ><span className='status_awaiting_surgery'>Awaiting surgery</span></td>
            <td>20/10/2022</td>
            <td>1/12/2022</td>
            <td><BiDotsHorizontalRounded color='#777' fontSize={25}/></td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
            </div>

            </div>
    </div>
  )
}

export default OutPatientList