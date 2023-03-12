import React , {useState , useEffect, useContext}from 'react'
import './index.scss'
import {AiOutlineCalendar} from 'react-icons/ai' ; 
import { Calendar } from 'react-date-range';
import format from 'date-fns/format' 
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import axios from 'axios';
import { MenuPageContext } from '../../../contexts/MenuPage';

const intial_state = {
  Patient: 0,
  Doctor: 0,
  Purpose: "",
  Referral: "",
  Prepared_by: "",
  Remarks: "",
  Status: "",
  Category: "",
}

const Patient = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ; 
  const {setMenuPage} = useContext(MenuPageContext) ;
  const [hide , setHide] = useState(false) ; 
  // state
  const [data , setData] = useState(intial_state) ;

  const changeValue = (value) =>{
    setData({...data , ...value})
  }
  useEffect(()=>{
    setCurrentPage("Out-Patient Registeration ") ;
    setMenuPage(false) ; 
  },[])
  const [calendarTime1, setcalendarTime1] = useState(''); 
  const [calendarTime2, setcalendarTime2] = useState(''); 
  const [showCalender1 , setShowCalender1] = useState(false) ; 
  const [showCalender2 , setShowCalender2] = useState(false) ; 
  useEffect(()=>{
    setcalendarTime1(format(new Date() , 'MM/dd/yyyy')) ; 
    setcalendarTime2(format(new Date() , 'MM/dd/yyyy')) ; 
  },[])
  const [opRegNo , setOpRegNo] = useState("") ; 
  const [patientData , setpatientData] = useState([]) ;  
  const [singlePatientData , setsinglePatientData] = useState({}) ;
  const [choose , setChosse] = useState(false) ;
  const [show , setshow] = useState(false)
  // after we choose 
  useEffect(()=>{
    if(Object.keys(singlePatientData).length > 0 && choose){
      setChosse(false) ; 
      console.log(singlePatientData) ;
      axios(`http://3.110.179.238:8000/Patient/get-Outpatient/${singlePatientData.Registration_Nos}`)
                        .then(resp =>{console.log({...resp.data.data , ...singlePatientData});setsinglePatientData(prevData => {return({...resp.data.data , ...prevData})})})
                        .catch(err => console.log(err))
    }
  },[singlePatientData])
  // as we type we make req
  useEffect(()=>{
    setshow(true)
    console.log('asdasdasdasd')
    if(opRegNo.length >= 1 ){
      axios(`http://3.110.179.238:8000/Patient/search-outpatients/?Registration_Nos=${opRegNo}`)
      .then(resp =>{ console.log(JSON.stringify(resp.data)) ; setpatientData(resp.data) ; })
      .catch(err => console.log(err)) 
    }
  },[opRegNo])
  // useEffect(()=>{
  //   const data = {
      
  //     Patient: 1,
  //     Doctor: 1,
  //     Purpose: "Consulation",
  //     Referral: "someone",
  //     Prepared_by: "don't care",
  //     Remarks: "he is not good",
  //     Status: "Waiting_Patient",
  //     Category: "New Patient",
  //   };
    
  //   axios.post('http://3.110.179.238:8000/Patient/create-Outpatient', data)
  //     .then(response => console.log(response.data))
  //     .catch(error => console.error(error));
  // }
  // ,[])
  console.log(calendarTime1 , calendarTime2)

  return (
    <div >
            <div id='back'>{"<Back"}</div>
            <div className='save '>
            <h6>Add New Patient</h6>
            <div>
            <button className='def-button'>Cancel</button>
            <button className='def-button'>Save</button>
            </div>
            </div>
            <div className='grid'>
            <div>
           
            <div className='op_reg FORM_ ' onClick={()=>setHide(true)} ><p>OP Reg. No</p><input type="text" onChange={e => setOpRegNo(e.target.value)} />
            <div className={`items_data_ul`}>{patientData.length > 0 && <>{patientData.map(data => <div onClick={(e) => {setsinglePatientData({Registration_Nos:data.Registration_Nos , ...data.patient});setChosse(true);setHide(false)}} >{data.Registration_Nos}</div>)}</>}</div> </div>
            <div><p>Category</p><select defaultValue={singlePatientData.Category} ><option value="">{singlePatientData.Category}</option></select></div>
            <div><p>Patient  Name</p><input type="text" value={singlePatientData.Name} /></div>
            <div className='calendar-wrapper'>
              <p>Date of birth</p>
              <div className="date">
                <button className="btn-date" onClick={()=>setShowCalender1(Calendar => !Calendar)}><AiOutlineCalendar style={{fontSize:19 }}/></button>
                <input type="text" readOnly value={calendarTime1}   />
              {showCalender1 && <Calendar className='calenderElement' onChange={item => { setcalendarTime1(format(item , 'MM/dd/yyyy'))}}/>}


            </div></div>
            <div><p>Sex</p><div><button className='def-button' style={{backgroundColor:`${singlePatientData.Sex === "Male" && '#222831'}`,color:`${singlePatientData.Sex === "Male" && '#fff'}`}}>Male</button><button style={{backgroundColor:`${singlePatientData.Sex === "Female" && '#222831'}`,color:`${singlePatientData.Sex === "Female" && '#fff'}`}} className='def-button'>Female</button></div></div>
            <div><p>Phone No.</p><input type="text" value={singlePatientData.Mobile_nos} /></div>
            <div><p>Address</p><textarea type="text" value={singlePatientData.Address} rows={7} cols={30} /></div>
            <div><p>Department</p><input type="text" value={singlePatientData.Category} /></div>
            <div><p>Prepared by</p><input type="text" value={singlePatientData.Prepared_by} /></div>
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
            <div><p>UHID</p><input type="text" value={singlePatientData.uuid} /></div>
            <div><p>Age</p><input type="text" value={singlePatientData.Age} /></div>
            <div><p>Guardian </p><input type="text" value={singlePatientData.Aadhaar_Nos} /></div>
            <div><p>Marital</p><div><button  className='def-button'>Married</button><button className='def-button'>Unmarried</button></div></div>
            <div><p>Email</p><input type="text" value={singlePatientData.Email} /></div>
            <div><p>Aadhar number</p><input type="text"  value={singlePatientData.Aadhaar_Nos}/></div>
            <div><p>Diagnosis</p><input type="text" value={singlePatientData.Category} /></div>
            <div><p>Doctor</p><input type="text"     value={singlePatientData.Doctor} onChange={e => e.target.value ? changeValue({Doctor:1}) : changeValue({Doctor:0})} /></div>
            <div><p>Remarks/ Diagnosis</p><input      value={singlePatientData.Remarks}  type="text" onChange={e => changeValue({Remarks:e.target.value})} /></div>

            </div>
            </div>
    </div>
  )
}

export default Patient