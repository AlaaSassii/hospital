import React from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import './index.scss'
function CategoryMaster() {
  return (
    <div className='CategoryMaster'>
            <div className="back">{"< back"}</div>
            <div className='form'>
                        <div><p>Sno</p><input type="text" /></div>
                        <div><p>Department</p><input type="text" /></div>
                        <div><p>Category</p><input type="text" /></div>
                        <button>Save</button>
            </div>
            <div className='second_form'>
            <div>
            <select >
                        <option value=""></option>
            </select>
            <div className='btns_icons_CategoryMaster'>
            <button className='btn-icon'><FiSearch fontSize={25}/></button>
            <button className='btn-icon'><AiOutlineQuestionCircle fontSize={25}/></button>
            </div>
            </div>
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
            <div className='last_btnss'>
            <div>
            <button>Delete</button>
            <button>Clear</button>
            </div>
            </div>
    </div>
  )
}

export default CategoryMaster