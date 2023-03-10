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
  const {setMenuPage} = useContext(MenuPageContext) 
  const [data1 , setdata1] = useState({Name: '',
  Amount: 0,
  Description: '',
  Category: 1})
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
  const [data , setData] = useState(initial_state) ;

  useEffect(()=>{
    setCurrentPage("Out Pateint Master") ; 
    setMenuPage(false) ; 
  },[])
  useEffect(()=>{
    axios("http://3.110.179.238:8000/Patient/OutPatient-List-View")
    .then(resp => console.log(resp.data))
    .catch(err => console.log(err))
  })
  return (
    <div className='OutPatientMaster'>
            <div className='back'>{"<Back"}</div>
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
            <div className="table-container">
            <table>
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>54125415</td>
            <td>Xray</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>54125415</td>
            <td></td>
            <td>2000</td>
            </tr>
            <tr>
            <td>54125415</td>
            <td></td>
            <td>2000</td>
            </tr>
            <tr>
            <td>54125415</td>
            <td></td>
            <td>2000</td>
            </tr>

        </tbody>
      </table>
      </div>
    
    </div>
  )
}

export default OutPatientMaster