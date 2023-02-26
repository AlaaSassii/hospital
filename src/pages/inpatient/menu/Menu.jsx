import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../../../assets/image1.png' ;
import './style.scss'
const Menu = () => {
  return (
    <div className='menu__container'>
            <ul>
            <li><Link to="/"><img src={image1}/><p>IN Patient Registration</p></Link></li>
            <li><Link to="/"><img src={image1}/><p>In-Patient Billing</p></Link></li>
            <li><Link to="/"><img src={image1}/><p>In Paitent Master</p></Link></li>
            <li><Link to="/"><img src={image1}/><p>Inpatient Advance</p></Link></li>
            <li><Link to="/"><img src={image1}/><p>IP List</p></Link></li>
            <li><Link to="/"><img src={image1}/><p>IP Status</p></Link></li>
            <li><Link to="/"><img src={image1}/><p>IP Bill Reports</p></Link></li>
            <li><Link to="/"><img src={image1}/><p>IP Bill Summary</p></Link></li>
            </ul>

    </div>
  )
}

export default Menu