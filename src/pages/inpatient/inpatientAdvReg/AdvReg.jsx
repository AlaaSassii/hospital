import React, {useState , useEffect, useContext} from 'react'
import { Calendar } from 'react-date-range' 
import format from 'date-fns/format' 
import { AiOutlineCalendar } from 'react-icons/ai';
import './index.scss'
import { CurrentPageContext } from '../../../contexts/CurrentPage';
const AdvReg = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  useEffect(()=>{
    setCurrentPage("In Patient Advance Register ")
  },[])
  const [calendarTime1, setcalendarTime1] = useState(''); 
  const [showCalender1 , setShowCalender1] = useState(false) ; 
  console.log(showCalender1) ;  
  useEffect(()=>{
    setcalendarTime1(format(new Date() , 'MM/dd/yyyy')) ; 
  },[])
  return (
    <div className='inpatient_adv_reg'>
            <div className='back'>{"<Back"}</div>
            <form >
              <h5>New Bill</h5>
              <div>
              <div>
              <div className='signle_form'><p>Bill No</p> <input type="text" /></div>
              <div className='signle_form'><p>IP number</p> <input type="text" /></div>
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