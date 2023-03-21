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

import InpatientReg from './pages/inpatient/inpatientReg/InpatientReg'
import InpatientBillSum from './pages/inpatient/inpatientBillSum/inpatientBillSum' ;
import InpatientMaster from './pages/inpatient/inpatientMaster/InpatientMaster' ; 
import InpatientBilling from './pages/inpatient/inpatientBilling/InpatientBilling'
import AdvReg from './pages/inpatient/inpatientAdvReg/AdvReg'
import InpatientBillReps from './pages/inpatient/inpatienBillReports/InpatientBillReps'
import InPatientMenu from './pages/inpatient/menu/Menu' ;

import MenuLab from './pages/lab/MenuLab/MenuLab' ;
import CategoryMaster from './pages/lab/CategoryMaster/CategoryMaster'
import DeparmentMaster from './pages/lab/DeparmentMaster/DeparmentMaster' ; 
import LabReport from './pages/lab/LabReport/LabReport' ; 
import TestEntery from './pages/lab/testentery/TestEntery' ;
import TestMaster from './pages/lab/TestMasterr/TestMaster' ; 

function App() {
  return (
    <CurrentPageContextProvider>
      
      <PageWrapper>
        <Routes>
        <Route path='/' element={<LINKS/>} />
        <Route path='/OutPatientMenu' element={<Menu/>}/>
        <Route path='/OutPatientMenu/OutPatientMaster' element={<OutPatientMaster/>}/>
        <Route path='/OutPatientMenu/OutPatientBilling' element={<OutPatientBilling/>}/>
        <Route path='/OutPatientMenu/OutPatientReps' element={<OutPatientReps/>}/>
        <Route path='/OutPatientMenu/OutPatientSummary' element={<OutPatientSummary/>}/>
        <Route path='/OutPatientMenu/OutPatientWaitingList' element={<OutPatientWaitingList/>}/>
        <Route path='/OutPatientMenu/OutPatientsUncloseList' element={<OutPatientsUncloseList/>}/>
        <Route path='/OutPatientMenu/OutPatientsBillReports' element={<OutPatientsBillReports/>}/>
        <Route path='/OutPatientMenu/OutPatientReg' element={<OutPatientReg/>}/>

        <Route path='/InPatientMenu' element={<InPatientMenu/>}/>
        <Route path='/InPatientMenu/InpatientReg' element={<InpatientReg/>}/>
        <Route path='/InPatientMenu/InpatientBillSum' element={<InpatientBillSum/>}/>
        <Route path='/InPatientMenu/InpatientMaster' element={<InpatientMaster/>}/>
        <Route path='/InPatientMenu/InpatientBilling' element={<InpatientBilling/>}/>
        <Route path='/InPatientMenu/InpatientBillReps' element={<InpatientBillReps/>}/>
        <Route path='/InPatientMenu/AdvReg' element={<AdvReg/>}/>

        <Route  path='/LabMenu' element={<MenuLab/>}/>
        <Route  path='/LabMenu/CategoryMaster' element={<CategoryMaster/>}/>
        <Route  path='/LabMenu/DeparmentMaster' element={<DeparmentMaster/>}/>
        <Route  path='/LabMenu/LabReport' element={<LabReport/>}/>
        <Route  path='/LabMenu/TestEntery' element={<TestEntery/>}/>
        <Route  path='/LabMenu/TestMaster' element={<TestMaster/>}/>
        </Routes>
        {/* <InpatientBilling/> */}
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
const LINKS = () => {
  console.log('asdasdasdasdasdsd')
  return (<>
  <Link to="/OutPatientMenu">OutPatientMenu</Link>
  <br />
  <Link to="/InPatientMenu">InPatientMenu</Link>
  <br />

  <Link to="/LabMenu">Lab</Link>
  </>)
}