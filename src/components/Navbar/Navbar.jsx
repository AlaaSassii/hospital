import React, { useState } from 'react'
// react-router-dom
import {Link} from 'react-router-dom'
// images 
import logo from '../../assets/logo.png' 

// icons 
import {BiSearch} from 'react-icons/bi'
// style 
import './index.scss'
const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  }
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
            <li ><Link to="/" className={activeIndex === 0 ? 'active' : ''}  onClick={() => handleLinkClick(0)}><span></span><span>Dashboard</span></Link></li>
            <li><Link to="/" className={activeIndex === 1 ? 'active' : ''}  onClick={() => handleLinkClick(1)}><span></span><span>Out Patient</span></Link></li>
            <li><Link to="/" className={activeIndex === 2 ? 'active' : ''}  onClick={() => handleLinkClick(2)}><span></span><span>In Patient</span></Link></li>
            <li><Link to="/" className={activeIndex === 3 ? 'active' : ''} onClick={() => handleLinkClick(3)}><span></span><span>Pharmacy</span></Link></li>
            <li><Link to="/" className={activeIndex === 4 ? 'active' : ''} onClick={() => handleLinkClick(4)}><span></span><span>Lab</span></Link></li>
            <li><Link to="/" className={activeIndex === 5 ? 'active' : ''} onClick={() => handleLinkClick(5)}><span></span><span>Accounts</span></Link></li>
            <li><Link to="/" className={activeIndex === 6  ? 'active' : ''} onClick={() => handleLinkClick(6)}><span></span><span>Settlement</span></Link></li>
            <li><Link to="/" className={activeIndex === 7 ? 'active' : ''} onClick={() => handleLinkClick(7)}><span></span><span>Department</span></Link></li>
            <li><Link to="/"  className={activeIndex === 8 ? 'active' : ''}  onClick={() => handleLinkClick(8)} ><span></span><span>Prescription</span></Link></li>
            <li><Link to="/"  className={activeIndex === 9 ? 'active' : ''}  onClick={() => handleLinkClick(9)}><span></span><span>Patient </span></Link></li>
            <li><Link to="/"  className={activeIndex === 10 ? 'active' : ''}  onClick={() => handleLinkClick(10)}><span></span><span>Doctor</span></Link></li>
            <li><Link to="/"  className={activeIndex === 11? 'active' : ''}  onClick={() => handleLinkClick(11)}><span></span><span>Follow Up</span></Link></li>
            <li><Link to="/"  className={activeIndex === 12 ? 'active' : ''}  onClick={() => handleLinkClick(12)}><span></span><span>HR</span></Link></li>
            </ul>
            </nav>
    </div>
  )
}

export default Navbar