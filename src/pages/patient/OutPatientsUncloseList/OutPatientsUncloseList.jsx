import axios from 'axios';
import React, { useContext, useEffect , useState} from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
import TableRow from './component/TableRow';
import './index.scss'
const OutPatientsUncloseList = () => {
            const {setMenuPage} = useContext(MenuPageContext) ; 
            const {setCurrentPage} = useContext(CurrentPageContext) ;
            const [data , setdata] = useState({}) ;
            const [loading ,setLoading] = useState(false) ;
            useEffect(()=>{
              
                        setMenuPage(false) ; 
                        setCurrentPage("Out Patients Waiting List")
            },[])
            useEffect(()=>{
              setLoading(true) ; 
              axios("http://3.110.179.238:8000/Patient/OutPatient-List-View")
              .then(resp =>{ console.log(resp.data) ; setdata(resp.data); setLoading(false)})
              .catch(err => console.log(err)) ;
            },[]) ; 

            if(loading) return <h1>Loading...</h1>
  return (
    <div className='OutPatientsUncloseList'>
            <div className="back">{"< back"}</div>
            <div className='save '>
            <span style={{display:"inline-block", fontWeight:700 , fontSize:17}}>Waiting patient <span style={{color:"#777"}}>(5)</span></span>
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
        {data?.results?.map((element , index) => <TableRow key={index} index={index}{...element}/>)}
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
    <div className="last_btn">
            <button>Close</button>
            <button>View</button>
            <button>Excel</button>
            <button>Clear</button>
      </div>
    </div>
  )
}

export default OutPatientsUncloseList