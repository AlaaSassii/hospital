import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-date-range'
import format from 'date-fns/format' 
import { AiOutlineCalendar, AiOutlinePlus } from 'react-icons/ai';
import {BiFilterAlt} from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi';
import { BsQuestionCircle } from 'react-icons/bs';
import './index.scss'
function LabReport() {
            const [calendarTime1, setcalendarTime1] = useState(''); 
            const [calendarTime2, setcalendarTime2] = useState(''); 
            const [showCalender1 , setShowCalender1] = useState(false) ; 
            const [showCalender2 , setShowCalender2] = useState(false) ; 
            useEffect(()=>{
              setcalendarTime1(format(new Date() , 'MM/dd/yyyy')) ; 
              setcalendarTime2(format(new Date() , 'MM/dd/yyyy')) ; 
          
            },[])
  return (
    <div className='LabReport'>
            <div className='back'>{"< Back"}</div>
            <div className='form1'>
            <div className='calendar-wrapper'>
              <p>Date and Time  from</p>
              <div className="date">
                <button className="btn-date" onClick={()=>setShowCalender1(Calendar => !Calendar)}><AiOutlineCalendar style={{fontSize:19 }}/></button>
                <input type="text" readOnly value={calendarTime1}   />
              {showCalender1 && <Calendar className='calenderElement' onChange={item => { setcalendarTime1(format(item , 'MM/dd/yyyy'))}}/>}
            </div>
            </div>
            <div className='calendar-wrapper'>
              <p>Date and Time to</p>
              <div className="date">
                <button className="btn-date" onClick={()=>setShowCalender2(Calendar => !Calendar)}><AiOutlineCalendar style={{fontSize:19 }}/></button>
                <input type="text" readOnly value={calendarTime1}   />
              {showCalender1 && <Calendar className='calenderElement' onChange={item => { setcalendarTime2(format(item , 'MM/dd/yyyy'))}}/>}
            </div>
            </div>
            <div className='btn'>
            <button><BiFilterAlt style={{fontSize:25}}/></button>
            <button>Go</button>
            </div>
            </div>
            <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>{"< Filter >"}</th>
            <th>Cash</th>
            <th>Card</th>
            <th>Credit</th>
            <th>Other</th>
            <th>Total</th>
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
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
          </tr>  <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
          </tr>  <tr>
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
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 5</td>
            <td>Data 5</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
            </div>
    </div>
  )
}

export default LabReport