import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MenuPageContext } from '../../../contexts/MenuPage'
import { CurrentPageContext } from '../../../contexts/CurrentPage' 
import TableRows from './component/TableRows'
import axios from 'axios'
const OutPatientReps = () => {
            const {setMenuPage} = useContext(MenuPageContext) ; 
            const {setCurrentPage} = useContext(CurrentPageContext) ;
            const [FetchingLoading , setFetchingLoading] = useState(true) ; 
            const [data , setdata ] = useState("") ;

            useEffect(()=>{
              setFetchingLoading(true) ; 
              axios("http://3.110.179.238:8000/Patient/OutPatient-List-View")
              .then(resp =>{ console.log(resp.data); setdata(resp.data);setFetchingLoading(false);})
              .catch(err => console.log(err)) ;
            },[])
            useEffect(()=>{
                        setMenuPage(false) ; 
                        setCurrentPage("Out Patients Bill Reports")
            },[])
  if (FetchingLoading) return <h1>Loading...</h1>
  return (
    <div className='OutPatientReps'>
            <div className="back">{"<Back"}</div>
            <div className='Bill_reports_outpatient'>
                        <h3>Bill reports</h3>
                        <div>
                        <button><AiOutlinePlus style={{fontSize:25}}/></button>
                        <button><FiSearch style={{fontSize:25}}/></button>
                        <button><AiOutlineQuestionCircle style={{fontSize:25}}/></button>
                        </div>
            </div>
            <div className="table-container">
                        {/* table needs to have y scroll but there is no more data to show so there is no scroll */}
            <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Ref. No</th>
            <th>Date</th>
            <th>OP No</th>
            <th>Patient No</th>
            <th>Pt Name</th>
            <th>Consultant</th>
          </tr>
        </thead>
        <tbody className="table-body">
        {data.results.map((element , index) => <TableRows key={index} {...element}/>)}
          

        </tbody>
      </table>
      
</div>
      <div className='button-end'>
            <button>View</button>
            <button>Excel</button>
            <button>Clear</button>
      </div>
    </div>
  )
}

export default OutPatientReps