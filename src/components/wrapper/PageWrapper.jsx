import React from 'react'
import Navbar from '../Navbar/Navbar'
import './index.scss'
const PageWrapper = ({children}) => {
  return (
    <>
    <Navbar page={"page"}/>
    <div className='red'>
            {children} 
    </div>
    </>
  )
}

export default PageWrapper