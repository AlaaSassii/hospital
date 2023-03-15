import React, {useState , useEffect, useContext} from 'react'
import { Calendar } from 'react-date-range' 
import format from 'date-fns/format' 
import { AiOutlineCalendar } from 'react-icons/ai';
import './index.scss'
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import axios from 'axios';
const AdvReg = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  const [number , setnumber] = useState('') ;
  const [patientData , setpatientData] = useState([]) ;  
  const [show , setShow] = useState(false) ; 

  useEffect(()=>{
    setCurrentPage("In Patient Advance Register ")
  },[])
  const [calendarTime1, setcalendarTime1] = useState(''); 
  const [showCalender1 , setShowCalender1] = useState(false) ; 
  console.log(showCalender1) ;  
  useEffect(()=>{
    setcalendarTime1(format(new Date() , 'MM/dd/yyyy')) ; 
  },[])
  useEffect(()=>{
    if(number.length === 0){
      setShow(false)
    }
    if(number.length >= 1 ){
      setShow(true)
      axios(`http://13.232.134.127:8000/Patient/Inpatient-List-View?Registration_Nos=${number}`)
      .then(resp =>{ console.log(resp.data.results) ; setpatientData(resp.data.results) ; })
      .catch(err => console.log(err)) 
    }
  },[number])
  return (
    <div className='inpatient_adv_reg'>
            <div className='back'>{"<Back"}</div>
            <form >
              <h5>New Bill</h5>
              <div>
              <div>
              <div className='signle_form'><p>Bill No</p> <input type="text" /></div>
              <div className='signle_form'><p>IP number</p> <input type="text"  value={number} onChange={e => setnumber(e.target.value)}/></div>
            {show && <>{patientData.length > 0 && <ul className={`items_data_ul`}><li>{patientData.map(item => <div  >{item.Registration_Nos}</div>)}</li></ul>}</>} 

              
              <div className='signle_form'><p>Payment mode</p> <input type="text" /></div>
              </div>
              <div>
              <div className='calendar-wrapper'>
            <p>Date of birth</p>
            <div className="date">
            <button className="btn-date" onClick={(e)=>{ e.preventDefault();setShowCalender1(Calendar => !Calendar)}}><AiOutlineCalendar style={{fontSize:19 }}/></button>
            <input type="text" readOnly value={calendarTime1}   />
            {showCalender1 && <Calendar className='calenderElement' onChange={item => { setcalendarTime1(format(item , 'MM/dd/yyyy'))}}/>}
{/* calendar when the button hits is re-render everything */}
            </div></div>
              <div className='signle_form'><p>Amount</p> <input type="text" /></div>
              <div className='signle_form'><p>Prepared by:</p> <input type="text" /></div>
              </div>
              </div>
            </form>
            <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>UHID</th>
            <th>Patient Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Purpose</th>
            <th>Admision date and time</th>
            <th>Ward and floor number</th>
            <th>Admission type</th>
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

        </tbody>
      </table>
    </div>
    <div className="btns">
      <button>Save</button>
      <button>Last Entry</button>
      <button>Next Entry</button>
      <button>View</button>
      <button>Clear</button>
    </div>
    </div>
  )
}

export default AdvReg