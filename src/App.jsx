import { useState } from 'react'
import { BrowserRouter , Routes ,Route, Link } from 'react-router-dom'
import { CurrentPageContextProvider } from './contexts/CurrentPage'
import PageWrapper from './components/wrapper/PageWrapper'
import  Menu from './pages/patient/Menu/Menu'
import OutPatientMaster from './pages/patient/OupatientMaster/OutPatientMaster'
import OutPatientBilling from './pages/patient/OutPatientBilling/OutPatientBilling'
import OutPatientReps from './pages/patient/OutPatientReps/OutPatientReps'
import OutPatientsBillReports from './pages/patient/OutPatientsBillReports/OutPatientsBillReports'
import OutPatientsUncloseList from './pages/patient/OutPatientsUncloseList/OutPatientsUncloseList';
import OutPatientSummary from './pages/patient/OutPatientSummary/OutPatientSummary'
import OutPatientWaitingList from './pages/patient/OutPatientWaitingList/OutPatientWaitingList';
import OutPatientReg from './pages/patient/patient1/Patient'

function App() {
  return (
    <CurrentPageContextProvider>
      
      <PageWrapper>
        <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/OutPatientMenu/OutPatientMaster' element={<OutPatientMaster/>}/>
        <Route path='/OutPatientMenu/OutPatientBilling' element={<OutPatientBilling/>}/>
        <Route path='/OutPatientMenu/OutPatientReps' element={<OutPatientReps/>}/>
        <Route path='/OutPatientMenu/OutPatientSummary' element={<OutPatientSummary/>}/>
        <Route path='/OutPatientMenu/OutPatientWaitingList' element={<OutPatientWaitingList/>}/>
        <Route path='/OutPatientMenu/OutPatientsUncloseList' element={<OutPatientsUncloseList/>}/>
        <Route path='/OutPatientMenu/OutPatientsBillReports' element={<OutPatientsBillReports/>}/>
        <Route path='/OutPatientMenu/OutPatientReg' element={<OutPatientReg/>}/>

        </Routes>
      </PageWrapper>
   
    </CurrentPageContextProvider>
  
  )
}

export default App
  {/*992px to 1199px
1200px to 1399px
>= 1400px */}
// const {MenuPage , setMenuPage} = useContext(MenuPageContext);
// const {setMenuPage} = useContext(MenuPageContext) ; 
//             const {setCurrentPage} = useContext(CurrentPageContext) ;
//             useEffect(()=>{
//                         setMenuPage(false) ; 
//                         setCurrentPage("")
//             },[])