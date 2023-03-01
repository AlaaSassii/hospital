import React, { useContext, useEffect } from 'react'
import './index.scss'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MenuPageContext } from '../../../contexts/MenuPage'
import { CurrentPageContext } from '../../../contexts/CurrentPage'
const OutPatientReps = () => {
            const {setMenuPage} = useContext(MenuPageContext) ; 
            const {setCurrentPage} = useContext(CurrentPageContext) ;
            useEffect(()=>{
                        setMenuPage(false) ; 
                        setCurrentPage("Out Patients Bill Reports")
            },[])
  return (
    <div className='OutPatientReps'>
            <div className="back">{"<Back"}</div>
            <div className='Bill_reports_outpatient'>
                        <h3>Bill reports</h3>
                        <div>
                        <button><AiOutlinePlus style={{fontSize:25}}/></button>
                        <button><FiSearch style={{fontSize:25}}/></button>
                        <button><AiOutlineQuestionCircle style={{fontSize:25}}/></button>
                        </div>
            </div>
            <div className="table-container">
                        {/* table needs to have y scroll but there is no more data to show so there is no scroll */}
            <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Ref. No</th>
            <th>Date</th>
            <th>OP No</th>
            <th>Patient No</th>
            <th>Pt Name</th>
            <th>Consultant</th>
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
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
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
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 2</td>
            <td>Data 3</td>
            </tr>
            <tr>
            <td>Data 1</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 2</td>
            <td>Data 3</td>
            </tr>
            <tr>
            <td>Data 1</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 2</td>
            <td>Data 3</td>
            </tr>
            <tr>
            <td>Data 1</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 2</td>
            <td>Data 3</td>
            </tr>
        </tbody>
      </table>
      
</div>
      <div className='button-end'>
            <button>View</button>
            <button>Excel</button>
            <button>Clear</button>
      </div>
    </div>
  )
}

export default OutPatientReps