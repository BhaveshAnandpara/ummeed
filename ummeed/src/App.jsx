import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './pages/StudentDashboard/Home'
import Connect from './pages/StudentDashboard/Connect'
import Tasks from './pages/StudentDashboard/Tasks'

import Pricing from './pages/InstituteDashboard/Pricing'
import Analytics from './pages/InstituteDashboard/Analytics'

export default function App() {
  return (
    <>

      <Router>
        <Routes>

          {/* Student Dashboard */}

          <Route path='/student/' element={ <Home/> } />
          <Route path='/student/home' element={ <Home/> } />
          <Route path='/student/connect' element={ <Connect/> } />
          <Route path='/student/tasks' element={ <Tasks/> } />

          {/* Institute Dashboard */}

          <Route path='/institute/' element={ <Pricing/> } />
          <Route path='/institute/pricing' element={ <Pricing/> } />
          <Route path='/institute/analytics' element={ <Analytics/> } />

        </Routes>
      </Router>

    </>
  )
}
