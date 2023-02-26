import { useState , useEffect} from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format' 
import './index.scss'
const Test = () => {
            const [state, setState] = useState(''); 
            useEffect(()=>{
                        setState(format(new Date() , 'MM/dd/yyyy'))
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