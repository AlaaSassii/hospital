import React from 'react'
import { FiSearch } from 'react-icons/fi'
import './index.scss'
const InpatientMaster = () => {
  return (
    <div className='InpatientMaster'>
            <div className='back'>{"<Back"}</div>
            <form >
            <div className='forms'>
            <div><p>It Code</p><input type="text" /></div>
            <div><p>Description</p><input type="text" /></div>
            <div><p>Category</p><input type="text" /></div>
            <div><p>Amount</p><input type="text" /></div>
            <button>Save</button>
            </div>
            <div>
            <div><p></p><input type="text" /></div>
            <button><FiSearch/></button>
            <button><FiSearch/></button>
            </div>
            </form>
            <div className="table-container">
            <table>
        <thead>
          <tr>
            <th>Cash</th>
            <th>Card</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            </tr>

        </tbody>
      </table>
      </div>
      <div className="btns">
            <button>Delete</button>
            <button>Clear</button>
      </div>
    </div>
  )
}

export default InpatientMaster