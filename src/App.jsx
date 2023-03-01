import { useState } from 'react'
import AdvReg from './pages/inpatient/inpatientAdvReg/AdvReg'
import InpatientBilSum from './pages/inpatient/inpatientBillSum/InpatientBillSum'
import InpatientBillReps from './pages/inpatient/inpatienBillReports/InpatientBillReps'
import InpatientMaster from './pages/inpatient/inpatientMaster/InpatientMaster'
import PageWrapper from './components/wrapper/PageWrapper'
import InpatientBilling from './pages/inpatient/inpatientBilling/InpatientBilling'
import InpatientReg from './pages/inpatient/inpatientReg/InpatientReg'
import Menu from './pages/inpatient/menu/Menu'
import PatientReg from './pages/patient/patient1/Patient'
import { CurrentPageContextProvider } from './contexts/CurrentPage'
import OutPatientsBillReports from './pages/patient/OutPatientsBillReports/OutPatientsBillReports'
import Menu1 from './pages/patient/Menu/Menu'
import OutPatientList from './pages/patient/OutPatientList/OutPatientList'
import OutPatientBilling from './pages/patient/OutPatientBilling/OutPatientBilling'
import OutPatientMaster from './pages/patient/OupatientMaster/OutPatientMaster'
import OutPatientReps from './pages/patient/OutPatientReps/OutPatientReps'
import OutPatientSummary from './pages/patient/OutPatientSummary/OutPatientSummary'
import OutPatientWaitingList from './pages/patient/OutPatientWaitingList/OutPatientWaitingList'
import OutPatientsUncloseList from './pages/patient/OutPatientsUncloseList/OutPatientsUncloseList'
function App() {
  return (
    <CurrentPageContextProvider>
    <div className="App">
      <PageWrapper>
        <OutPatientList/>
      </PageWrapper>
    </div>
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