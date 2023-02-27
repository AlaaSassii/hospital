import React, { useContext, useEffect, useState } from 'react'
import { Calendar } from 'react-date-range' 
import format from 'date-fns/format' 

import './index.scss'
import { AiOutlineCalendar } from 'react-icons/ai'
import { CurrentPageContext } from '../../../contexts/CurrentPage'
const InpatientBilling = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  useEffect(()=>{
    setCurrentPage("In-Patient Billing ")
  },[])
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
    <div className='InpatientBilling'>
            <h5 className='back'>{"<Back"}</h5>
            <h3>New Bill</h3>
            <div className="form1">
            <div>
            <div><p>Bill No</p><input type="text" /></div>
            <div><p>Ip number</p><input type="text" /></div>
            <div><p>Patient  Name</p><input type="text" /></div>
            </div>

            <div>
            <div className='calendar-wrapper'>
              <p>Date of birth</p>
              <div className="date">
                <button className="btn-date" onClick={()=>setShowCalender1(Calendar => !Calendar)}><AiOutlineCalendar style={{fontSize:19 }}/></button>
                <input type="text" readOnly value={calendarTime1}   />
              {showCalender1 && <Calendar className='calenderElement' onChange={item => { setcalendarTime1(format(item , 'MM/dd/yyyy'))}}/>}
            </div>
            </div>
            <div className='calendar-wrapper'>
              <p>Date and Time </p>
               <div className="date">
                <button className='def-button' onClick={()=>setShowCalender2(Calendar => !Calendar)}><AiOutlineCalendar style={{fontSize:19 }}/></button>
                <input type="text" readOnly value={calendarTime2}   />
              {showCalender2 && <Calendar className='calenderElement' onChange={item => { setcalendarTime2(format(item , 'MM/dd/yyyy'))}} />}
            </div>
            </div>
            </div>
            </div>
            <div className="form2">
            <div><p>Item Code</p><input type="text" /></div>
            <div><p>Item </p><input type="text" /></div>
            <div><p>Amount</p><input type="text" /></div>
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
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
            <div className="form3">
            <div>
            <div><p>Total Items</p><input type="text" /></div>
            <div><p>SubToal</p><input type="text" /></div>
            <div><p>Discount%</p><input type="text" /></div>
            <div><p>Net Total</p><input type="text" /></div>
            </div>
            
            <div>
            <div><div><p>Pay Mode</p><input type="text" /></div>
            <div><p>Advance</p><input type="text" /></div>
            <div><p>Prepared by</p><input type="text" /></div></div>
            <div>
            <button>Save</button>
            <button>Draft</button>
            <button>Load Draft</button>
            <button>Remove</button>
            <button>Apply</button>
            <button>Clear</button>
            </div>
            </div>
            </div>
</div>
  )
}

export default InpatientBilling