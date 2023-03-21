import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import image1 from '../../../assets/image1.png' ;
import image7 from '../../../assets/image7.png' ;
import image3 from '../../../assets/image3.png' ;
import image2 from '../../../assets/image2.png' ;
import image4 from '../../../assets/image4.png' ;
import image5 from '../../../assets/image5.png' ;
import image6 from '../../../assets/image6.png' ;
import image8 from '../../../assets/image8.png' ;
import { CurrentPageContext } from '../../../contexts/CurrentPage';
import { MenuPageContext } from '../../../contexts/MenuPage';
const Menu = () => {
  const {setCurrentPage } = useContext(CurrentPageContext) ;
  const {setMenuPage} = useContext(MenuPageContext) 

  useEffect(()=>{
    setCurrentPage("") ;
    setMenuPage(true) ; 
  },[])
  return (
    <div className='menu__container'>
            <ul>
            <li><Link to="/LabMenu/CategoryMaster"><img src={image7}/><p>IN Patient Registration</p></Link></li>
            <li><Link to="/LabMenu/DeparmentMaster"><img src={image1}/><p>In-Patient Billing</p></Link></li>
            <li><Link to="/LabMenu/LabReport"><img src={image3}/><p>In Paitent Master</p></Link></li>
            <li><Link to="/LabMenu/TestEntery"><img src={image2}/><p>Inpatient Advance</p></Link></li>
            <li><Link to="/LabMenu/TestMaster"><img src={image4}/><p>IP List</p></Link></li>
            <li><Link to="/"><img src={image5}/><p>IP Status</p></Link></li>
            <li><Link to="/"><img src={image8}/><p>IP Bill Reports</p></Link></li>
            <li><Link to="/"><img src={image6}/><p>IP Bill Summary</p></Link></li>
            </ul>

    </div>
  )
}

export default Menu