import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
import TableRows from './Component/TableRows';
import './index.scss'
const OutPatientWaitingList = () => {
            const {setMenuPage} = useContext(MenuPageContext) ; 
            const {setCurrentPage} = useContext(CurrentPageContext) ;
            const [FetchingLoading , setFetchingLoading] = useState(true) ; 
            const [data , setdata ] = useState("") ;
            useEffect(()=>{
                        setMenuPage(false) ; 
                        setCurrentPage("Out Patients Waiting List")
            },[])
            useEffect(()=>{
              setFetchingLoading(true) ; 
              axios("http://3.110.179.238:8000/Patient/OutPatient-List-View")
              .then(resp =>{ console.log(resp.data) ; setdata(resp.data); setFetchingLoading(false)})
              .catch(err => console.log(err)) ;
            },[]) ; 
  if (FetchingLoading) return <h1>Loading...</h1>
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
        {data?.results?.map((element , index) => <TableRows key={index} index={index}{...element}/>)}
          {/* </tr>  <tr>
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
          </tr> */}
          {/* Add more rows here */}
        </tbody>
      </table>
     
    </div>
    </div>
  )
}

export default OutPatientWaitingList