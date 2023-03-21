import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
import './index.scss' ; 

function TestMaster() {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  const {setMenuPage} = useContext(MenuPageContext) ;
  const [id  , setid] = useState("") ; 
  const [Code , setCode ] = useState("") ;
  const [Name , setName ] = useState("") ;
  const [Units , setUnits ] = useState("") ;
  const [Ref_value_1 , setRef_value_1 ] = useState("") ;
  const [Ref_value_2 , setRef_value_2 ] = useState("") ;
  const [Ref_value_3 , setRef_value_3 ] = useState("") ;
  const [Ref_value_4 , setRef_value_4 ] = useState("") ; 

  const [name2 , setName2] = useState("") ; 
  const [category ,setcategory] = useState(""); 
  useEffect(()=>{
    setCurrentPage("Test Master") ; 
    setMenuPage(false) ; 
  },[]) ;
  const post = ()=>{
   if(  Name && Units && Ref_value_1 && Ref_value_2 && Ref_value_3 && Ref_value_4){
    axios.post("http://13.232.134.127:8000/lab/Create-LabTests-View",{
    Name,
    Units,
    Ref_value_1,
    Ref_value_2,
    Ref_value_3,
    Ref_value_4}).then(resp =>{ console.log(resp.data);alert("done")}).catch(err => {console.log(err);console.log({
      
      Name,
      Units,
      Ref_value_1,
      Ref_value_2,
      Ref_value_3,
      Ref_value_4})})
  }else{
    alert("fill the Form")
  }
   }
   useEffect(()=>{
    if(name2 || category){
      // patient naem and category category not found
      axios(`http://13.232.134.127:8000/lab/LabReport-List-View?patient_name=${name2}`)
        .then(resp => {console.log(resp.data);alert("done")}) // => results take it and fetch it 
        .catch(err => {console.log(err)})
    }
   },[name2, category])
  return (
    <div className='TestMaster'>
            <div className='back'>{"< back"}</div>
            <div className="form">
            <div><p>Sno</p> <input type="text" value={id} onChange={e => setid(e.target.value)} /></div>
            <div><p>Category</p> <input type="text"  value={Code} onChange={e => setCode(e.target.value)}/></div>
            <div><p>Test name</p> <input type="text"  value={Name} onChange={e => setName(e.target.value)}/></div>
            <div><p>Units</p> <input type="text" value={Units} onChange={e => setUnits(e.target.value)}/></div>
            <button>Save</button>
            <div><p>{"Ref values 1"}</p> <input value={Ref_value_1} onChange={e => setRef_value_1(e.target.value)} type="text" /></div>
            <div><p>Ref values 2</p> <input  value={Ref_value_2}onChange={e => setRef_value_2(e.target.value)} type="text" /></div>
            <div><p>Ref values 3</p> <input value={Ref_value_3}onChange={e => setRef_value_3(e.target.value)}type="text" /></div>
            <div><p>Ref values 4</p> <input value={Ref_value_4}onChange={e => setRef_value_4(e.target.value)}type="text" /></div>
            <button onClick={post}>{"POst"}</button>
            </div>
            <div className='second_form'>
            <div>
              <div><p>Name</p><input type="text"  value={name2} onChange={e => setName2(e.target.value)} /></div>
            <div><div>category</div>
            <select onChange={e => setcategory(e.target.value)}>
            <option value="Scan">Scan</option><option value="Something">Something</option>
            </select>
            </div>
            <div>
            <button className='btn-icons'><FiSearch style={{fontSize:25}}/></button>
            <button className='btn-icons'><AiOutlineQuestionCircle style={{fontSize:25}}/></button>
            </div>
            </div>
            </div>
            <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>{"Sno"}</th>
            <th>Test Name</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>1</td>
            <td>Xray</td>
            <td>gb/ml</td>
          </tr>
          <tr>
            <td>2</td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
            </div>
            <div className='last_btnss'>
            <div>
            <button>Delete</button>
            <button>Clear</button>
            </div>
            </div>
    </div>
  )
}

export default TestMaster