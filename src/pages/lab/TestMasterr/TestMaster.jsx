import React, { useContext, useEffect } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
import './index.scss' ; 

function TestMaster() {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  const {setMenuPage} = useContext(MenuPageContext) 
  useEffect(()=>{
    setCurrentPage("Test Master") ; 
    setMenuPage(false) ; 
  },[])
  return (
    <div className='TestMaster'>
            <div className='back'>{"< back"}</div>
            <div className="form">
            <div><p>Sno</p> <input type="text" /></div>
            <div><p>Category</p> <input type="text" /></div>
            <div><p>Test name</p> <input type="text" /></div>
            <div><p>Units</p> <input type="text" /></div>
            <button>Save</button>
            <div><p>{"Ref values"}</p> <input type="text" /></div>
            <div><p>Ref values 2</p> <input type="text" /></div>
            <div><p>Ref values 3</p> <input type="text" /></div>
            <div><p>Ref values 4</p> <input type="text" /></div>
            </div>
            <div className='second_form'>
            <div>
            <div><div>category</div>
            <select >
                        <option value=""></option>
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