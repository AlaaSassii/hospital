import React , {useState , useEffect}from 'react'
import './index.scss'
import {AiOutlineCalendar} from 'react-icons/ai' ; 
import { Calendar } from 'react-date-range';
import format from 'date-fns/format' 

const Patient = () => {
  const [calendarTime1, setcalendarTime1] = useState(''); 
  const [calendarTime2, setcalendarTime2] = useState(''); 
  const [showCalender1 , setShowCalender1] = useState(false) ; 
  const [showCalender2 , setShowCalender2] = useState(false) ; 
  useEffect(()=>{
    setcalendarTime1(format(new Date() , 'MM/dd/yyyy')) ; 
    setcalendarTime2(format(new Date() , 'MM/dd/yyyy')) ; 

  },[])
  console.log(calendarTime1 , calendarTime2)
  return (
    <div >
            <p>{"< Back"}</p>
            <div className='save '>
            <h6>Add New Patient</h6>
            <div>
            <button className='def-button'>Cancel</button>
            <button className='def-button'>Save</button>
            </div>
            </div>
            <div className='grid'>
            <div>
            <div><p>OP Reg. No</p><input type="text" /></div>
            <div><p>Category</p><select ><option value="">default Value</option></select></div>
            <div><p>Patient  Name</p><input type="text" /></div>
            <div className='calendar-wrapper'>
              <p>Date of birth</p>
              <div className="date">
                <button className="btn-date" onClick={()=>setShowCalender1(Calendar => !Calendar)}><AiOutlineCalendar style={{fontSize:19 }}/></button>
                <input type="text" readOnly value={calendarTime1}   />
              {showCalender1 && <Calendar className='calenderElement' onChange={item => { setcalendarTime1(format(item , 'MM/dd/yyyy'))}}/>}


            </div></div>
            <div><p>Sex</p><div><button className='def-button'>Male</button><button className='def-button'>Female</button></div></div>
            <div><p>Phone No.</p><input type="text" /></div>
            <div><p>Address</p><textarea type="text" rows={7} cols={30} /></div>
            <div><p>Department</p><input type="text" /></div>
            <div><p>Prepared by</p><input type="text" /></div>
            </div>
            <div>
            <div className='calendar-wrapper'>
              <p>Date and Time </p>
               <div className="date">
                <button className='def-button' onClick={()=>setShowCalender2(Calendar => !Calendar)}><AiOutlineCalendar style={{fontSize:19 }}/></button>
                <input type="text" readOnly value={calendarTime2}   />
              {showCalender2 && <Calendar className='calenderElement' onChange={item => { setcalendarTime2(format(item , 'MM/dd/yyyy'))}} />}

            </div>
            </div>
            <div><p>UHID</p><input type="text" /></div>
            <div><p>Age</p><input type="text" /></div>
            <div><p>Guardian </p><input type="text" /></div>
            <div><p>Marital</p><div><button  className='def-button'>Married</button><button className='def-button'>Unmarried</button></div></div>
            <div><p>Email</p><input type="text" /></div>
            <div><p>Aadhar number</p><input type="text" /></div>
            <div><p>Diagnosis</p><input type="text" /></div>
            <div><p>Doctor</p><input type="text" /></div>
            <div><p>Remarks/ Diagnosis</p><input type="text" /></div>

            </div>
            </div>
    </div>
  )
}

export default Patient