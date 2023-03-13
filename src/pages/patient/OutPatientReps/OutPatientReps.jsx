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
            const [data , setdata ] = useState([]) ;
            const [samedata , setsamedata] = useState([])
            const [searchTerm, setSearchTerm] = useState('');
            const [name, setName] = useState('');
            const [opNo, setOpNo] = useState('');
            const [patientNumber, setPatientNumber] = useState('');
            useEffect(()=>{
              if(name || opNo || patientNumber){
                axios(`http://3.110.179.238:8000/Patient/OutPatient-List-View?Registration_Nos=${opNo}&patient_name=${name}&patient_id=${patientNumber}`)
              .then(resp => {console.log(resp.data.results);setdata(resp.data.results)})
              .catch(err => console.log(err))
              }
            },[name ,opNo ,patientNumber])
            let repeatdata= [] ;

            useEffect(()=>{
                        setMenuPage(false) ; 
                        setCurrentPage("Out Patients Bill Reports")
            },[])
            console.log({name , opNo , patientNumber  })
  return (
    <div className='OutPatientReps'>
            <div id='back'>{"<Back"}</div>
            <div className='Bill_reports_outpatient'>
                        <h3>Bill reports</h3>
                        <div>
                        <button><AiOutlinePlus style={{fontSize:25}}/></button>
                        <button><FiSearch style={{fontSize:25}}/></button>
                        <button><AiOutlineQuestionCircle style={{fontSize:25}}/></button>
                        </div>
            </div>
            <input type="text" placeholder='Name' onChange={e => setName(e.target.value)} />
            <input type="text" placeholder='OP No	' onChange={e => setOpNo(e.target.value)} />
            <input type="text" placeholder='Patient No'  onChange={e => setPatientNumber(e.target.value)} />
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
        {
          data.length > 0 ? data.map((element , index) => <TableRows key={index} {...element}/>) : <tr><td></td><td></td><td>No data to show</td><td></td><td></td><td></td></tr>
        }
          

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

                // let globalarray = samedata ; 
                // globalarray = samedata.filter(item => item.patient[0].Name.toLowerCase().includes(name.toLowerCase())) ; 
                // globalarray = globalarray.filter(item => item.Registration_Nos.toLowerCase().includes(opNo.toLowerCase())) ; 
                // globalarray = globalarray.filter(item => item.patient[0].uuid.toLowerCase().includes(patientNumber.toLowerCase())) ; 
                // console.log({globalarray})
                // setdata(globalarray)


                // useEffect(()=>{
                //   setFetchingLoading(true) ; 
                //   axios("http://3.110.179.238:8000/Patient/OutPatient-List-View")
                //   .then(resp =>{ console.log(resp.data.results[0]); setdata(resp.data.results);setFetchingLoading(false);setsamedata(resp.data.results); repeatdata=[...resp.data.results]})
                //   .catch(err => console.log(err)) ;
                // },[])
                // OutPatient-Items-List