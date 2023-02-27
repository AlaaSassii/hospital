import { useState } from 'react'
import AdvReg from './pages/inpatient/inpatientAdvReg/AdvReg'
import InpatientBilSum from './pages/inpatient/inpatientBillSum/InpatientBillSum'
import InpatientBillReps from './pages/inpatient/inpatienBillReports/InpatientBillReps'
import InpatientMaster from './pages/inpatient/inpatientMaster/InpatientMaster'
import PageWrapper from './components/wrapper/PageWrapper'
import InpatientBilling from './pages/inpatient/inpatientBilling/InpatientBilling'
import InpatientReg from './pages/inpatient/inpatientReg/InpatientReg'
import Menu from './pages/inpatient/menu/Menu'
import Patient from './pages/patient/patient1/Patient'
import Patient2 from './pages/patient/patient2/Patient2'
import { CurrentPageContextProvider } from './contexts/CurrentPage'
function App() {
  return (
    <CurrentPageContextProvider>
    <div className="App">
      <PageWrapper>
        <Patient2/>
      </PageWrapper>
    </div>
    </CurrentPageContextProvider>
  
  )
}

export default App
  {/*992px to 1199px
1200px to 1399px
>= 1400px */}