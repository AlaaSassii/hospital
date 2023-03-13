import React, { useContext, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import {MenuPageContext } from '../../../contexts/MenuPage'
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import './index.scss'
import axios from 'axios';

const initial_state ={
  it_code: "" , 
  description:"" , 
  category:""  , 
  amount:0 , 
  save:false , 
  total_patients:"" ,
  category:""
}

const OutPatientMaster = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  const {setMenuPage} = useContext(MenuPageContext) ;
  const [data1 , setdata1] = useState({Name: '',
  Amount: 0,
  Description: '',
  Category: 1})
  const [itemCode, setItemCode] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState("");
  const [category, setcategory] = useState("");

  const handleSubmit = () => {
    const {Name , Amount , Description ,Category } = data1
    axios.post('http://3.110.179.238:8000/Patient/create-outpatient-items', {
      Name,
      Amount , 
      Description, 
      Category 
  })
  .then(response => {
      console.log(response.data);
      setdata1({Name: '',
      Amount: 0,
      Description: '',
      Category: 1})
  })
  .catch(error => {
      console.log(error);
  });
  }
  // states 
  const [data , setdata] = useState([]) ;

  useEffect(()=>{
    setCurrentPage("Out Pateint Master") ; 
    setMenuPage(false) ; 
  },[])
  useEffect(()=>{
    axios("http://3.110.179.238:8000/Patient/OutPatient-List-View")
    .then(resp => console.log(resp.data))
    .catch(err => console.log(err))
  })
  useEffect(()=>{
    if(itemCode || description || amount || category){
      axios(`http://3.110.179.238:8000/Patient/OutPatient-Items-List?name=${description}&Category=${category}&uuid=${itemCode}`)
    .then(resp => {console.log(resp.data.results);setdata(resp.data.results)})
    .catch(err => console.log(err))
    }
  },[itemCode ,description ,amount , category ])
  return (
    <div className='OutPatientMaster'>
            <div id='back'>{"<Back"}</div>
            <form >
            <div className='forms'>
            <div><p>It Code</p><input type="text" value={data1.Name} onChange={e => setdata1({...data1 ,Name1:e.target.value})} /></div>
            <div><p>Description</p><input type="text"value={data1.Description} onChange={e => setdata1({...data1 ,Description:e.target.value})}/></div>
            <div><p>Category</p><input type="text" value={data1.Category } onChange={e => setdata1({...data1 ,Category:Number(e.target.value)})}/></div>
            <div><p>Amount</p><input type="text" value={data1.Amount} onChange={e => setdata1({...data1 ,Amount:Number(e.target.value)})}/></div>
            <button>Save</button>
            </div>
            <div>
            <h3>Total Patients <span>(487)</span></h3>
            <div><input type="text" />
            <button><FiSearch style={{fontSize:20}}/></button>
            <button><AiOutlineQuestionCircle style={{fontSize:20}}/></button>
            </div>
            </div>
            </form>
            <input type="text" placeholder='Item Code	' value={itemCode} onChange={(event) => setItemCode(event.target.value)} />
            <input type="text" placeholder='Description' value={description} onChange={(event) => setDescription(event.target.value)} />
            <input type="text" placeholder='Amount'   value={amount} onChange={(event) => setAmount(event.target.value)}/>
            <select onChange={e => setcategory(e.target.value) } defaultValue={category} ><option value="">category</option><option value="Scan">Scan</option><option value="Something">Something</option></select>

            <div className="table-container">
            <table>
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.length > 0 ? data.map(item => <tr><td>{item.UUID}</td> <td>{item.Description}</td>  <td>{item.Amount}</td><td>{item.Category}</td></tr>): <tr><td></td><td>No data to show</td><td></td><td></td><td></td></tr>}
        </tbody>
      </table>
      </div>
    
    </div>
  )
}

export default OutPatientMaster