import React from 'react'
import Navbar from '../Navbar/Navbar' ; 
import { CurrentPageContextProvider } from '../../contexts/CurrentPage';
import './index.scss'
const PageWrapper = ({children}) => {
  return (
    <>
    <CurrentPageContextProvider>
    <Navbar page={"page"}/>
    <div className='red'>
            {children} 
    </div>
    </CurrentPageContextProvider>
    </>
  )
}

export default PageWrapper