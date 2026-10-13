import React from 'react'
import { TooltipProvider } from "@/components/ui/tooltip"
import Home from './Pages/Home'
import Dashborad from './Pages/dashboard/Dashboard'
import Counter from './Pages/Counter'
import { Route, Routes } from 'react-router'
import DashboardLayout from './layout/DashboardLayout'

const App = () => {
  return (
    <TooltipProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Dashboard' element={<DashboardLayout/>}>
        <Route index element={<Dashborad/>}/>

        </Route>
      </Routes>
<p></p>

      {/* <Dashborad/> */}
      {/* <Counter/> */}
    {/* <Home/> */}
    </TooltipProvider>
  )
}

export default App