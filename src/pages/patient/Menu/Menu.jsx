import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MenuPageContext } from '../../../contexts/MenuPage';

import image1 from '../../../assets/image1.png' ;
import image7 from '../../../assets/image7.png' ;
import image3 from '../../../assets/image3.png' ;
import image2 from '../../../assets/image2.png' ;
import image4 from '../../../assets/image4.png' ;
import image5 from '../../../assets/image5.png' ;
import image6 from '../../../assets/image6.png' ;
import image8 from '../../../assets/image8.png' ;
import image9 from '../../../assets/image9.png' ;
import image10 from '../../../assets/image10.png' ;

import './index.scss'
import { CurrentPageContext } from '../../../contexts/CurrentPage';
const Menu = () => {
            const {setMenuPage} = useContext(MenuPageContext) ; 
            const {setCurrentPage} = useContext(CurrentPageContext) ;
            useEffect(()=>{
                        setMenuPage(true) ; 
                        setCurrentPage("")
            },[])
  return (
    <div className='Out_patient_menu'>
            <ul>
            <li>
            <Link to="/"><img src={image7}/><p>Out-Patient Registration</p></Link>
            </li>
            <li>
            <Link to="/"><img src={image1}/><p>Out-Patient 
Billing</p></Link>
            </li>
            <li>
            <Link to="/"><img src={image3}/><p>OPD
Master</p></Link>
            </li>
            <li>
            <Link to="/"><img src={image2}/><p>OPD
Bulk Upload</p></Link>
            </li>
            </ul>
            <ul>
            <li>
            <Link to="/"><img src={image4}/><p>OP List</p></Link>
            </li>
            <li>
            <Link to="/"><img src={image5}/><p>OP Waiting List</p></Link>
            </li>
            <li>
            <Link to="/"><img src={image9}/><p>OP close List</p></Link>
            </li>
            </ul>
            <ul>
            <li>
            <Link to="/"><img src={image8}/><p>OP Bill Reports</p></Link>
            </li>
            <li>
            <Link to="/"><img src={image6}/><p>OP Bill Summary</p></Link>
            </li>
            <li>
            <Link to="/"><img src={image10}/><p>OP List</p></Link>
            </li>
            </ul>
    </div>
  )
}

export default Menu