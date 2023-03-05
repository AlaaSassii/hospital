import React, { useContext, useEffect } from 'react'
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
import './index.scss'
function DeparmentMaster() {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  const {setMenuPage} = useContext(MenuPageContext) 
  useEffect(()=>{
    setCurrentPage("Department Master") ; 
    setMenuPage(false) ; 
  },[])
  return (
    <div className='DeparmentMaster'>
      <div className='back'>{"< back"}</div>
      <div className="form">
        <div><p>Sno</p> <input type="text" /></div>
        <div><p>Department</p> <input type="text" /></div>
        <button>Save</button>
      </div>
      <div className="table-container">
                        {/* table needs to have y scroll but there is no more data to show so there is no scroll */}
            <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Ref. No</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>Sno</td>
            <td>Department</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>

        </tbody>
      </table>
      
</div>
      <div className='final_btnss'>
          <div>
            <button>Delete</button>
            <button>Clear</button>
          </div>
      </div>
    </div>
  )
}

export default DeparmentMaster