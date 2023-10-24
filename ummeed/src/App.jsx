import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './pages/StudentDashboard/Home/Home'
import Connect from './pages/StudentDashboard/Connect'
import Tasks from './pages/StudentDashboard/Tasks'
import Header from './Components/Header/Header'
import Pricing from './pages/InstituteDashboard/Pricing'
import Analytics from './pages/InstituteDashboard/Analytics'
import RoomPage from './pages/StudentDashboard/Room'
import '../src/App.css'
export default function App() {
  return (
    
    <>

<Header/>
<Home/>

      <Router>

        <Routes>

          {/* Student Dashboard */}

          <Route path='/student/' element={ <Home/> } />
          <Route path='/student/home' element={ <Home/> } />
          <Route path='/student/connect' element={ <Connect/> } />
          <Route path='/student/tasks' element={ <Tasks/> } />
          <Route exact path='/room/:roomId' element={<RoomPage/>}/>

          {/* Institute Dashboard */}

          <Route path='/institute/' element={ <Pricing/> } />
          <Route path='/institute/pricing' element={ <Pricing/> } />
          <Route path='/institute/analytics' element={ <Analytics/> } />

        </Routes>
      </Router>

    </>
  )
}
