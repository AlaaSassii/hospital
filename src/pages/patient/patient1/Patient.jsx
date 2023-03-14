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
  const [showReg , setshowReg] = useState(false) ;
  const [showidoatient , setshowidoatient] = useState(false) ;
  console.log(showReg)
  const [patientId , setpatientId] = useState(""); 
  const [direct , setdirect]=useState({value:false , id:""})
  // states 
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [mobileNos, setMobileNos] = useState('');
  const [altMobileNos, setAltMobileNos] = useState('');
  const [email, setEmail] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [profession, setProfession] = useState('');
  const [income, setIncome] = useState('');
  const [aadhaarNos, setAadhaarNos] = useState('');
  const [doctor, setDoctor] = useState('');
  const [purpose, setPurpose] = useState('');
  const [referral, setReferral] = useState('');
  const [preparedBy, setPreparedBy] = useState('');
  const [remarks, setRemarks] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [anotherId , setAnotherId] = useState(""); 
  const [patientIDS , setpatientIDS] = useState([]) ; 
  // after we choose 
  useEffect(()=>{
    if(singlePatientData){
      if(Object.keys(singlePatientData).length > 0 ){
        setAadhaarNos(singlePatientData.Aadhaar_Nos);
        setAddress(singlePatientData.Address) ; 
        setAge(singlePatientData.Age) ; 
        setMobileNos(singlePatientData.Alt_Mobile_nos) ;
        setEmail(singlePatientData.Email) ; 
        setIncome(singlePatientData.Income) ; 
        setMaritalStatus(singlePatientData.Marital_Status) ; 
        setMobileNos(singlePatientData.Mobile_nos);
        setName(singlePatientData.Name);
        setProfession(singlePatientData.Profession) ; 
        setSex(singlePatientData.Sex); 
        setAnotherId(singlePatientData.id)
    }
   
      // setChosse(false) ; 
      // console.log(singlePatientData) ;
      // axios(`http://3.110.179.238:8000/Patient/get-Outpatient/${singlePatientData.Registration_Nos}`)
      //                   .then(resp =>{console.log({...resp.data.data , ...singlePatientData});setsinglePatientData(prevData => {return({...resp.data.data , ...prevData})})})
      //                   .catch(err => console.log(err))
    }
  },[singlePatientData])
  // as we type we make req
  useEffect(()=>{
    if(opRegNo.length === 0){
      setshowidoatient(false)
    }
    if(opRegNo.length >= 1 ){
      setshowReg(true)
      console.log({length:opRegNo.length })
      axios(`http://3.110.179.238:8000/Patient/Patient-List-View?Registration_nos=${opRegNo}`)
      .then(resp =>{ console.log(resp.data) ; setpatientData(resp.data.results) ; })
      .catch(err => console.log(err)) 
    }
  },[opRegNo])
  useEffect(()=>{
    setdirect({value:false , id:""})
    if(patientId.length === 0){
      
    }
    if(patientId.length >= 1){
      setshowidoatient(true)
      axios(`http://3.110.179.238:8000/Patient/Patient-List-View?UUID=${patientId}`)
    .then(resp => {console.log(resp.data.results);setpatientIDS(resp.data.results) ; setdirect({value:true , id:patientId}) })
    .catch(err => {console.log(err)})
    }
  },[patientId]) ; 
  useEffect(()=>{

  },[])
  const createPatient = () =>{
    if(name &&address  &&age &&sex &&mobileNos &&altMobileNos &&email &&maritalStatus &&profession &&income &&aadhaarNos && doctor && purpose && referral && preparedBy && remarks && status&& category){
      if(anotherId){
        axios.post("http://3.110.179.238:8000/Patient/create-Outpatient" , {Patient:anotherId ,
        Doctor:doctor , Purpose:purpose , Referral:referral , Prepared_by:preparedBy , Remarks:remarks , Status:status , Category:category
      })
          .then(resp => {console.log(resp.data);  })
          .catch(err => console.log(err))
      }
      else{
        const data = {
          Name:name, 
          Address:address,
          Age:Number(age),
          Sex:sex,
          Mobile_nos:Number(mobileNos),
          Alt_Mobile_nos:Number(altMobileNos),
          Email:email,
          Marital_Status:maritalStatus,
          Profession:profession,
          Income:Number(income),
          Aadhaar_Nos:aadhaarNos.toString()
        };
        let id = "" ; 
        axios.post('http://3.110.179.238:8000/Patient/create-patient', data)
          .then(response => {console.log(response.data); id=response.data.id ; 
            axios.post("http://3.110.179.238:8000/Patient/create-Outpatient" , {Patient:response.data.id  ,
            Doctor:doctor , Purpose:purpose , Referral:referral , Prepared_by:preparedBy , Remarks:remarks , Status:status , Category:category
          }).then(resp => { console.log(resp.data ); })
            .catch(err => {console.log(err);console.log({Patient:id ,
              Doctor:doctor , Purpose:purpose , Referral:referral , Prepared_by:preparedBy , Remarks:remarks , Status:status , Category:category
            })}) 
          
          })
          .catch(error => console.log({error,data}));
        
      }
    }
    else{
      alert("continue data");
      console.log(singlePatientData)
    }
  }

  console.log(status)

  return (
    <div >
            <div id='back'>{"<Back"}</div>
            <div className='save '>
            <h6>Add New Patient</h6>
            <div>
            <button className='def-button'>Cancel</button>
            <button className='def-button' onClick={createPatient}>Save</button>
            </div>
            </div>
            <div className='grid'>
            <div>
            <div><p>id pateint</p><input type="text" value={patientId}  onChange={e =>setpatientId(e.target.value)}/></div>
            {showidoatient && <>{patientIDS.length > 0 && <ul>
              {patientIDS.map((item , index) => <li key={index} onClick={()=>{setsinglePatientData({...singlePatientData , ...item });setshowidoatient(false)}}>{item.uuid}</li>)}
              </ul>}</>}
            <div className='op_reg FORM_ ' onClick={()=>setHide(true)} ><p>OP Reg. No</p><input type="text" onChange={e => setOpRegNo(e.target.value)} />
            {showReg && <>{patientData.length > 0 && <div className={`items_data_ul`}><>{patientData.map(item => <div onClick={(e) => {setsinglePatientData({...singlePatientData , ...item });setChosse(true);setshowReg(false)}} >{item.uuid}</div>)}</></div>}</>} </div>
            <div><p>Category</p><select onChange={e => setCategory(e.target.value) } defaultValue={category} ><option value="Review Patient">Review Patient</option> <option value="New Patient">New Patient</option></select></div>
            <div><p>Patient  Name</p><input type="text" value={name} onChange={e => setName(e.target.value)}/></div>
            <div className='calendar-wrapper'>
              <p>Date of birth</p>
              <div className="date">
                <button className="btn-date" onClick={()=>setShowCalender1(Calendar => !Calendar)}><AiOutlineCalendar style={{fontSize:19 }}/></button>
                <input type="text" readOnly value={calendarTime1}   />
              {showCalender1 && <Calendar className='calenderElement' onChange={item => { setcalendarTime1(format(item , 'MM/dd/yyyy'))}}/>}


            </div></div>
            <div><p>Sex</p><div><button  onClick={e => setSex("Male")} className='def-button' style={{backgroundColor:`${sex === "Male" ? '#222831' : 'rgb(214, 214, 214)'}`,color:`${sex=== "Male" && '#fff'}`}}>Male</button><button onClick={e => setSex("Female")} style={{backgroundColor:`${sex === "Female" ? '#222831' : 'rgb(214, 214, 214)'}`,color:`${sex === "Female" && '#fff'}`}} className='def-button'>Female</button></div></div>
            <div><p>Phone No.</p><input type="text" value={mobileNos}  onChange={e => setMobileNos(e.target.value)}/></div>
            <div><p>Address</p><textarea type="text" value={address} onChange={e => setAddress(e.target.value)} rows={7} cols={30} /></div>
            <div><p>Profession</p><select  onChange={e => setProfession(e.target.value) } defaultValue={profession} ><option value="Nurse">Nurse</option><option  value="Doctor">Doctor</option></select></div>

            <div><p>Income</p><input type="text" onChange={e => setIncome( e.target.value)} value={income} /></div>
            <div><p>Prepared by</p><input type="text" value={preparedBy} onChange={e => setPreparedBy(e.target.value)}  /></div>
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
            <div><p>UHID</p><input type="text"  /></div>
            <div><p>Age</p><input type="text" value={age} onChange={e => setAge(e.target.value)} /></div>
            <div><p>Marital</p><div><button  onClick={e => setMaritalStatus("Married")} style={{backgroundColor:`${maritalStatus=== "Married" ? '#222831' : 'rgb(214, 214, 214)'}`,color:`${maritalStatus === "Married" && '#fff'}`}}   className='def-button'>Married</button><button  onClick={e => setMaritalStatus("Divorced")} style={{backgroundColor:`${maritalStatus === "Divorced" ? '#222831' : 'rgb(214, 214, 214)'}`,color:`${maritalStatus === "Divorced" && '#fff'}`}} className='def-button'>Divorced</button></div></div>
            <div><p>Email</p><input type="text" value={email} onChange={e => setEmail(e.target.value)} /></div>
            <div><p>Alternate Mobile Number </p><input type="text"  value={ altMobileNos  }  onChange={e => setAltMobileNos(Number(e.target.value))}/></div>
            <div><p>Aadhar number</p><input type="text"  value={ aadhaarNos  }  onChange={e => setAadhaarNos(e.target.value)}/></div>
            <div><p>Doctor</p><input type="number"  onChange={e => setDoctor(e.target.value)}   value={doctor}  /></div>
            <div><p>Remarks/ Diagnosis</p><input      value={remarks}  type="text" onChange={e => setRemarks(e.target.value)} /></div>
            <div><p>Status</p><select onChange={e => setStatus(e.target.value) } defaultValue={status} ><option value="waiting_patient">waiting patient</option><option value="Completed">Completed</option></select></div>
            <div><p>Purpose</p><select  onChange={e => setPurpose(e.target.value) } defaultValue={purpose} ><option value="Consulation">Consulation</option><option  value="Operation">Operation</option></select></div>

            <div><p>Referral</p><input type="text" onChange={e => setReferral(e.target.value)} value={referral} /></div>

            </div>
            </div>
    </div>
  )
}

export default Patient
// {Registration_Nos:data.Registration_Nos , ...data.patient}