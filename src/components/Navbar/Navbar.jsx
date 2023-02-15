import React from 'react'
// react-router-dom
import {Link} from 'react-router-dom'
// images 
import logo from '../../assets/logo.png' 
import patient from '../../assets/icons/patient.svg'; 
import dash from '../../assets/icons/dash.svg' 
// icons 
import {BiSearch} from 'react-icons/bi'
// style 
import './index.scss'
const Navbar = () => {
  return (
    <div className='navs'>
            <header>
                        <div className='input'>
                        <input type="text" placeholder='Search'/>
                        <button><BiSearch/></button>
                        </div>
            </header>
            <nav>
            <img src={logo}   />
            <ul>
            <li><Link to="/"><span><img src={dash}/></span><span>Dashboard</span></Link></li>
            <li><Link to="/"><span><img src={patient}/></span><span>Out Patient</span></Link></li>
            <li><Link to="/"><span></span><span>In Patient</span></Link></li>
            <li><Link to="/"><span></span><span>Pharmacy</span></Link></li>
            <li><Link to="/"><span></span><span>Lab</span></Link></li>
            <li><Link to="/"><span></span><span>Accounts</span></Link></li>
            <li><Link to="/"><span></span><span>Settlement</span></Link></li>
            <li><Link to="/"><span></span><span>Department</span></Link></li>
            <li><Link to="/"><span></span><span>Prescription</span></Link></li>
            <li><Link to="/"><span></span><span>Patient </span></Link></li>
            <li><Link to="/"><span></span><span>Doctor</span></Link></li>
            <li><Link to="/"><span></span><span>Follow Up</span></Link></li>
            <li><Link to="/"><span></span><span>HR</span></Link></li>
            </ul>
            </nav>
    </div>
  )
}

export default Navbar