import React, {useState , useEffect, useContext} from 'react'
import { Calendar } from 'react-date-range' 
import format from 'date-fns/format' 
import { AiOutlineCalendar } from 'react-icons/ai';
import './index.scss'
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import axios from 'axios';
import { formatDateTime } from '../../../assets/functions';
const AdvReg = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  const [patientData , setpatientData] = useState([]) ;  
  const [show , setShow] = useState(false) ; 
  const [data ,setsingledata] = useState({})

  const [billNo , setbillNo] = useState("") ;
  const [number , setnumber] = useState('') ;
  const [paymentMode , setpatmentMode] = useState("") ; 
  const [amount , setamount] = useState("") ; 
  const [preparedby ,setPreapredby] = useState("")

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
  useEffect(() =>{
    if(Object.values(data).length > 0){
      console.log("ASDASDASDSDSDSD")
      setbillNo("") ; 
      setnumber(data.Registration_Nos) ; 
      setpatmentMode(""); 
      setamount("") ; 
      setPreapredby(data.Prepared_by) ;
      setShowCalender1(formatDateTime(data.Created).split(" ")[0]) ; 
    }
  },[data])
  return (
    <div className='inpatient_adv_reg'>
            <div className='back'>{"<Back"}</div>
            <form >
              <h5>New Bill</h5>
              <div>
              <div>
              <div className='signle_form'><p>Bill No</p> <input type="text" value={billNo} /></div>
              <div className='signle_form'><p>IP number</p> <input type="text"  value={number} onChange={e => setnumber(e.target.value)}/></div>
            {show && <>{patientData.length > 0 && <div className={`items_data_ul`}><ul>{patientData.map(item => <li onClick={()=>setsingledata(item)} >{item.Registration_Nos}</li>)}</ul></div>}</>} 

              
              <div className='signle_form'><p>Payment mode</p> <input value={paymentMode} type="text" /></div>
              </div>
              <div>
              <div className='calendar-wrapper'>
            <p>Date of birth</p>
            <input type="text" placeholder='date' value={calendarTime1} />
           </div>
              <div className='signle_form'><p>Amount</p> <input value={amount} type="text" /></div>
              <div className='signle_form'><p>Prepared by:</p> <input  value={preparedby} type="text" /></div>
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
            <td>{}</td>
            <td>{data?.patient?.[0]?.Name}</td>
            <td>{data?.patient?.[0]?.Sex}</td>
            <td>{data?.patient?.[0]?.Age}</td>
            <td>{data?.Purpose}</td>
            <td>{formatDateTime(data?.Created)}</td>
            <td>{data?.Ward}</td>
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