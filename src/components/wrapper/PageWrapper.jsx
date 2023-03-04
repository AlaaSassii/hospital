import React, { useContext, useEffect } from 'react'
import Navbar from '../Navbar/Navbar' ; 
import { CurrentPageContextProvider , CurrentPageContext} from '../../contexts/CurrentPage';
import './index.scss'
import { MenuPageContext, MenuPageProvider } from '../../contexts/MenuPage';
const PageWrapper = ({children}) => {
  const {MenuPage , setMenuPage} = useContext(MenuPageContext) ;
  const {currentPage} = useContext(CurrentPageContext) ; 
  useEffect(()=>{

      if(currentPage !== "asd"){
        setMenuPage(false)
      }
  },[currentPage])
  console.log(MenuPage)
  return (
    <>
    <CurrentPageContextProvider>
    <Navbar page={"page"}/>
    <div className={`red ${MenuPage ?'menu' : ''}`}>
            {children} 
    </div>
    </CurrentPageContextProvider>
    </>
  )
}

export default PageWrapper