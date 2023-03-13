import React, { useState , useEffect} from 'react'
import axios from 'axios';
const Items = ({ITEMS , bill_id , Discount}) => {
  const [itemCode, setItemCode] = useState("");
  const [itemName, setItemsName] = useState("");
  const [amount, setAmount] = useState("");
  const [items , setItems] = useState(ITEMS); 
  const [items2 , setItems2] = useState(ITEMS); 
  const [itemTable , setItemTable] = useState([]) ; 
  const [loading2 ,setLoading2] = useState(false); 
  const [show , setshow] = useState(false) ; 
  const [finalRes , setFinalresp] = useState({});
  useEffect(()=>{
      if(itemName.length > 1){
        setshow(true);
        setItems(items2.filter(item => item.Name.includes(itemName)))
        console.log('asdasd')
      }else{
        setshow(false)
      }
  },[itemName])
  console.log({items , items2}) ;
  const applyFunction = () => {
    console.log('3asbaaaaaa')
    const data = {
      "bill_id":bill_id,
                "bill_items": itemTable.map(item => {return{"item_id":item.id}})
    }
    axios.post("http://3.110.179.238:8000/Patient/create-Outpatient-billitems" , data)
      .then(resp => {console.log(resp.data);setItemTable([]);setFinalresp(resp.data)})
      .catch(err => console.log(err))
      
  }
  const removeItem = (itemId) => {
    return items2.filter(item => item.UUID !== itemId)
  } 
  return (
    <>
      <div className="form2 FORM_">
            <div><p>Item Code</p><input type="text" value={itemCode} onChange={e => setItemCode(e.target.value)}/></div>
            <div><p>Item </p><input type="text"  value={itemName} onChange={e => setItemsName(e.target.value)}/></div>
            <div><p>Amount</p><input type="text" value={amount} onChange={e => setAmount(e.target.value)}  /></div>
            <button onClick={e => handleSubmit(e) }>Save</button>
            {show &&  <ul className='items_data_ul' onBlur={()=>show(false)}>
              {items.map(item => <li key={item.uuid} onClick={()=>{setItemTable([...itemTable, item]);setshow(false);setItems2(removeItem(item.UUID));setItemsName("")}}>{item.Name}</li>)}
            </ul>}
            </div>
           
            <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Item  name</th>
            <th>Amount </th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {itemTable.map((item, index) => <tr>
            <td>{index + 1}</td>
            <td>{item.Name}</td>
            <td>{item.Amount}</td>
            <td>{item.Category}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
            <div className="form3">
            <div>
            <div><p>Total Items</p><input type="text" value={finalRes?.total_items} readOnly /></div>
            <div><p>SubToal</p><input type="text" value={finalRes?.Total_price}  readOnly/></div>
            <div><p>Discount%</p><input type="text" value={finalRes?.Discount} readOnly/></div>
            <div><p>Net Total</p><input type="text"  value={finalRes?.discounted_price} readOnly/></div>
            </div>
            
            <div>
            <div><div><p>Pay Mode</p><input type="text" value={finalRes?.Paid_Through}readOnly /></div>
            <div><p>Advance</p><input type="text" value={finalRes?.total_items}readOnly  /></div>
            <div><p>Prepared by</p><input type="text" value={finalRes?.Created_by} readOnly /></div></div>
            <div>
            <button>Save</button>
            <button>Draft</button>
            <button>Load Draft</button>
            <button>Remove</button>
            <button onClick={applyFunction}>Apply</button>
            <button>Clear</button>
            </div>
            </div>
            </div></>
  )
}

export default Items