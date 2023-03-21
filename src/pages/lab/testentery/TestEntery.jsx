import React, { useContext, useEffect, useState } from 'react'
import { Calendar } from 'react-date-range' 
import format from 'date-fns/format' 
import { AiOutlineCalendar } from 'react-icons/ai'
import { CurrentPageContext } from '../../../contexts/CurrentPage'
import { MenuPageContext } from '../../../contexts/MenuPage' ;
import axios from 'axios'
const TestEntery = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  const {setMenuPage} = useContext(MenuPageContext) 
  useEffect(()=>{
    setCurrentPage("Out Pateint Master") ; 
    setMenuPage(false) ; 
  },[])     
            const [labRegNum , setlabRegNum] = useState("") ;
            const [labData , setlabData] = useState([]) ; 
            const [calendarTime1, setcalendarTime1] = useState(''); 
            const [calendarTime2, setcalendarTime2] = useState(''); 
            const [showCalender1 , setShowCalender1] = useState(false) ; 
            const [showCalender2 , setShowCalender2] = useState(false) ; 
            const [show , setShow] = useState(false) ; 


            useEffect(()=>{
              setcalendarTime1(format(new Date() , 'MM/dd/yyyy')) ; 
              setcalendarTime2(format(new Date() , 'MM/dd/yyyy')) ; 
          
            },[])
            console.log(calendarTime1 , calendarTime2)
             useEffect(()=>{
              if(labRegNum.length === 0){
                setShow(false) ;
                console.log("SASDSDSDDSDA")
              }
              if(labRegNum.length >= 1 ){
                setShow(true)
                axios(`http://13.232.134.127:8000/labLabReport-List-View?Registration_Nos=${labRegNum}`)
                .then(resp =>{ console.log(resp.data.results) ; setlabData(resp.data.results) ; })
                .catch(err => console.log(err)) 
              }
            },[labRegNum])
  return (
    <div className='InpatientBilling'>
            <h5 className='back'>{"<Back"}</h5>
            <h3>New Bill</h3>
            <div className="form1" style={{marginBottom:30}}>
            <div>
            <div><p>Bill No</p><input type="text" onChange={e => setlabRegNum(e.target.value)} /></div>
            {show && <>{labData.length > 0 && <div className={`items_data_ul`}><>{labData.map(item => <div onClick={(e) => {setShow(false);}} >{item.Registration_Nos}</div>)}</></div>}</>} 
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
            <div><p>Ref Doctor</p><input type="text" /></div>

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
            <th>Code</th>
            <th>Test Name</th>
            <th>Test Values</th>
            <th>Units</th>
            <th>Ref Values 1</th>
            <th>Ref Values 2</th>
            <th>Ref Values 3</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>54125415</td>
            <td>Hemoglobin</td>
            <td>15</td>
            <td>g/dl</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
            <div className="form3_buttons" style={{width:"80%",margin:"auto"}}>
            <div style={{marginLeft:"auto",width:"fit-content",display:"flex",gap:"0.5rem"}}>
            <button style={{padding:"5px 5px",minWidth:70,border:"none",background:"#ccc"}}>Save</button>
            <button style={{padding:"5px 5px",minWidth:70,border:"none",background:"#ccc"}}>Draft</button>
            <button style={{padding:"5px 5px",minWidth:70,border:"none",background:"#ccc"}}>Load Draft</button>
            <button style={{padding:"5px 5px",minWidth:70,border:"none",background:"#ccc"}}>Remove</button>
            <button style={{padding:"5px 5px",minWidth:70,border:"none",background:"#ccc"}}>Apply</button>
            <button style={{padding:"5px 5px",minWidth:70,border:"none",background:"#ccc"}}>Clear</button>
            </div>
            </div>
            </div>
  )
}

export default TestEntery