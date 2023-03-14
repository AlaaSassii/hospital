import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { formatDateTime } from '../../../assets/functions';
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
import TableRows from './Component/TableRows';
import './index.scss'
const OutPatientWaitingList = () => {
            const {setMenuPage} = useContext(MenuPageContext) ; 
            const {setCurrentPage} = useContext(CurrentPageContext) ;
            const [FetchingLoading , setFetchingLoading] = useState(true) ; 
            const [data , setdata ] = useState("") ;
            const [samedata , setsamedata] = useState([])
            const [searchTerm, setSearchTerm] = useState('');
            const [name, setName] = useState('');
            const [consultant, setconsultant] = useState('');
            const [status, setstatus] = useState('');
            const [dateTime , setdateTime] = useState('') ; 
            useEffect(()=>{
              let globalarray = samedata ; 
              globalarray = samedata.filter(item => item.patient[0].Name.toLowerCase().includes(name.toLowerCase())) ; 
              globalarray = globalarray.filter(item => item.doctor["Name"].toLowerCase().includes(consultant.toLowerCase())) ; 
              globalarray = globalarray.filter(item => item.Status.toLowerCase().includes(status.toLowerCase())) ; 
              globalarray = globalarray.filter(item => formatDateTime(item.Created).split(" ")[0].toLowerCase().includes(dateTime.toLowerCase())) ; 
              console.log({globalarray})
              setdata(globalarray)
          },[name ,consultant ,status])
          
            useEffect(()=>{
                        setMenuPage(false) ; 
                        setCurrentPage("Out Patients Waiting List")
            },[])
            useEffect(()=>{
              if(name || consultant || status ||dateTime ){
                axios(`http://3.110.179.238:8000/Patient/OutPatient-List-View?patient_name=${name}&doctor=${consultant}&Status=${status}`)
              .then(resp => {console.log(resp.data.results);setdata(resp.data.results)})
              .catch(err => console.log(err))
              }
            },[name ,consultant ,status ])
            console.log(samedata)
  return (
    <div className='OutPatientWaitingList'>
            <div id='back'>{"< back"}</div>
            <div className='save '>
            <span style={{display:"inline-block", fontWeight:700 , fontSize:17}}>Waiting patient <span style={{color:"#ccc"}}>(5)</span></span>
            <div className='btn-icons'>
            <button><BsQuestionCircle style={{fontSize:25}}/></button>
            <button><BiFilterAlt style={{fontSize:25}}/></button>
            <button><FiSearch style={{fontSize:25}}/></button>
            <button><div><AiOutlinePlus style={{fontSize:25}}/></div></button>
            </div>

            </div>
            <input type="text" placeholder='Name' onChange={e => setName(e.target.value)} />
            <input type="text" placeholder='Consultut' onChange={e => setconsultant(e.target.value)} />
            <select onChange={e => setstatus(e.target.value) } defaultValue={status} ><option value="">Status</option><option value="Waiting_Patient">waiting patient</option><option value="Completed">Completed</option></select>
            <input type="text" placeholder='MM/dd/yyyy' onChange={e => setdateTime(e.target.value)}/>

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
        {data.length  > 0 ?data?.map((element , index) => <TableRows key={index} index={index}{...element}/>) : <tr><td></td><td></td><td>No data to show</td><td></td><td></td><td></td></tr>}
        </tbody>
      </table>
     
    </div>
    </div>
  )
}

export default OutPatientWaitingList