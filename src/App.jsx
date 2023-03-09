import { useState } from 'react'
// import AdvReg from './pages/inpatient/inpatientAdvReg/AdvReg'
// import InpatientBilSum from './pages/inpatient/inpatientBillSum/InpatientBillSum'
// import InpatientBillReps from './pages/inpatient/inpatienBillReports/InpatientBillReps'
// import InpatientMaster from './pages/inpatient/inpatientMaster/InpatientMaster'
import PageWrapper from './components/wrapper/PageWrapper'
// import InpatientBilling from './pages/inpatient/inpatientBilling/InpatientBilling'
// import InpatientReg from './pages/inpatient/inpatientReg/InpatientReg'
// import Menu from './pages/inpatient/menu/Menu'
// import OutPatientReg from './pages/patient/patient1/Patient'
import { CurrentPageContextProvider } from './contexts/CurrentPage'
// import OutPatientMenu from './pages/patient/Menu/Menu'
// import OutPatientList from './pages/patient/OutPatientList/OutPatientList'
import OutPatientBilling from './pages/patient/OutPatientBilling/OutPatientBilling' 
// import OutPatientsBillReports from './pages/patient/OutPatientsBillReports/OutPatientsBillReports'
// import OutPatientMaster from './pages/patient/OupatientMaster/OutPatientMaster'
import OutPatientReps from './pages/patient/OutPatientReps/OutPatientReps'
import OutPatientSummary from './pages/patient/OutPatientSummary/OutPatientSummary'
// import OutPatientWaitingList from './pages/patient/OutPatientWaitingList/OutPatientWaitingList'
import OutPatientsUncloseList from './pages/patient/OutPatientsUncloseList/OutPatientsUncloseList'
// // routes 
// import { BrowserRouter , Routes ,Route, Link } from 'react-router-dom'
// import TestEntery from './pages/lab/testentery/TestEntery'
// import DeparmentMaster from './pages/lab/DeparmentMaster/DeparmentMaster'
// import CategoryMaster from './pages/lab/CategoryMaster/CategoryMaster'
// import LabReport from './pages/lab/LabReport/LabReport' 
// import TestMaster from './pages/lab/TestMasterr/TestMaster'
// import MenuLab from './pages/lab/MenuLab/MenuLab'
import Patient from './pages/patient/patient1/Patient'
// import Test from './Test'
import OutPatientsBillReports from './pages/patient/OutPatientsBillReports/OutPatientsBillReports'
import OutPatientWaitingList from './pages/patient/OutPatientWaitingList/OutPatientWaitingList'
function App() {
  return (
    <CurrentPageContextProvider>
      
      <PageWrapper>
        {/* <Routes>
        <Route path='/' element={<Link to="/OutPatientMenu">go to outpatientMenu</Link>}/>
        <Route path='/OutPatientMenu' element={<OutPatientMenu/>}/>
        <Route path='/OutPatientMenu/OutPatientList' element={<OutPatientList/>}/>
        <Route path='/OutPatientMenu/OutPatientBilling' element={<OutPatientBilling/>}/>
        <Route path='/OutPatientMenu/OutPatientMaster' element={<OutPatientMaster/>}/>
        <Route path='/OutPatientMenu/OutPatientReps' element={<OutPatientReps/>}/>
        <Route path='/OutPatientMenu/OutPatientSummary' element={<OutPatientSummary/>}/>
        <Route path='/OutPatientMenu/OutPatientWaitingList' element={<OutPatientWaitingList/>}/>
        <Route path='/OutPatientMenu/OutPatientsUncloseList' element={<OutPatientsUncloseList/>}/>
        <Route path='/OutPatientMenu/OutPatientsBillReports' element={<OutPatientsBillReports/>}/>
        <Route path='/OutPatientMenu/OutPatientReg' element={<OutPatientReg/>}/>

        </Routes> */}
        <OutPatientBilling />
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