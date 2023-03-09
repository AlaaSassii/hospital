import { useState , useEffect} from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format' 
import './index.scss'
import axios from 'axios';
const Test = () => {
            const [state, setState] = useState(''); 
            useEffect(()=>{
                        setState(format(new Date() , 'MM/dd/yyyy'))
            },[])
            useEffect(()=>{
              axios.post("http://3.110.179.238:8000/Patient/create-Outpatient-billitems", {
                "bill_id": "1",
                "bill_items": [
                {
                "item_id": "1"
                },
                {
                "item_id": "1"
                }
                ]
                }
                )
              .then(resp => console.log(resp.data)) 
              .catch(err => console.log(err)) 
            },[])
     
  return (
    <div>
            <input type="text" readOnly value={state} />
<Calendar
  onChange={item => { setState(format(item , 'MM/dd/yyyy'))}} 
            className="calenderElement time-table"
            date={new Date()}
/>
    </div>
  )
}

export default Test