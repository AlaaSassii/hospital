import React, { useContext, useEffect, useState } from 'react'
import { Calendar } from 'react-date-range' 
import format from 'date-fns/format' 

import './index.scss'
import { AiOutlineCalendar } from 'react-icons/ai'
import { CurrentPageContext } from '../../../contexts/CurrentPage'
import { MenuPageContext } from '../../../contexts/MenuPage'
import axios from 'axios'
import Items from './component/Items'
const OutPatientBilling = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  const {setMenuPage} = useContext(MenuPageContext) 
  const [bill , setbill] = useState({}) ; 
  const [loading ,setloading] = useState(false) ;
  const [billData , setbillData] = useState({}) ; 
  const [calendarTime1, setcalendarTime1] = useState(''); 
  const [calendarTime2, setcalendarTime2] = useState(''); 
  const [showCalender1 , setShowCalender1] = useState(false) ; 
  const [showCalender2 , setShowCalender2] = useState(false) ; 
  const [number , setnumber] = useState('')
  const [ITEMS , SETITEMS] = useState([]) ;
  useEffect(()=>{
    setloading(true) ; 
    axios("http://3.110.179.238:8000/Patient/Search-OutPatientItems?uuid=33")
    .then(resp =>{ SETITEMS(resp.data.results);setloading(false) ; })
    .catch(err => console.log(err))
  },[])
  useEffect(()=>{
    setcalendarTime1(format(new Date() , 'MM/dd/yyyy')) ; setcalendarTime2(format(new Date() , 'MM/dd/yyyy')) ; 
  },[])

  useEffect(()=>{
    setCurrentPage("OutPatientBilling") ; 
    setMenuPage(false) ; 
  },[])      

            useEffect(()=>{
              axios.post('http://3.110.179.238:8000/Patient/create-Outpatient-bill', {
                "OutPatient": Number(number),
                "Paid": false,
                "Created_by": "someone",
                "Discount":10})
              .then(function (response) {
                console.log(response.data);
                setbillData(response.data)
              })
              .catch(function (error) {
                console.log(error);
              });
              
            },[number])
  if(loading) return <h2>Loading...</h2>
  return (
    <div className='OutPatientBilling'>
            <h5 id='back'>{"<Back"}</h5>
            <h3>New Bill</h3>
            <div className="form1">
            <div>
            <div><p>Bill No</p><input type="text"  value={billData?.a} /></div>
            <div><p>outpatient number</p><input type="text"  value={number} onChange={e => setnumber(e.target.value)} /></div>
            <div><p>Patient  Name</p><input type="text"  value={billData?.Created_by}/></div>
            </div>

            <div>
            <div className='calendar-wrapper'>
              <p>Date</p>
              <div className="date">
                <button className="btn-date" onClick={()=>setShowCalender1(Calendar => !Calendar)}><AiOutlineCalendar style={{fontSize:19 }}/></button>
                <input type="text" readOnly value={billData?.Created_by}    />
              {showCalender1 && <Calendar className='calenderElement' onChange={item => { setcalendarTime1(format(item , 'MM/dd/yyyy'))}}/>}
            </div>
            </div>
            <div><p>UHID</p><input type="text"  value={billData?.Created_by}/></div>
          
            </div>
            </div>
            <Items ITEMS={ITEMS} bill_id={billData.id} Discount={billData.Discount}/>
          
</div>
  )
}

export default OutPatientBilling

//             useEffect(()=>{
//               axios.post('http://3.110.179.238:8000/Patient/create-Outpatient-bill', {
//                 "OutPatient": 19,
//                 "Paid": false,
//                 "Created_by": "someone",
//                 "Discount":10
// })
//               .then(function (response) {
//                 console.log(response.data);
//                 setbillData(response.data)
//               })
//               .catch(function (error) {
//                 console.log(error);
//               });
              
//             },[])