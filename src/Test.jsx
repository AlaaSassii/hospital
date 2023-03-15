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
            axios("http://13.232.134.127:8000/admin/patient/outpaitient/")
            .then(resp => console.log(resp))
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