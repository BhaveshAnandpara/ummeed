import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './pages/StudentDashboard/Home/Home'
import Connects from './pages/StudentDashboard/Connects'
import Connect from './pages/StudentDashboard/Connect'
import Tasks from './pages/StudentDashboard/Tasks'
import Header from './Components/Header/Header'
import Pricing from './pages/InstituteDashboard/Pricing'
import Analytics from './pages/InstituteDashboard/Analytics'
import RoomPage from './pages/StudentDashboard/Room'
import BookSlot from './pages/StudentDashboard/BookSlot/BookSlot'
import '../src/App.css'
import Assessment from './pages/StudentDashboard/Assessment'
export default function App() {
  return (
    
    <>


      <Router>

        <Routes>

          {/* Student Dashboard */}

          <Route path='/student/' element={ <Home/> } />
          <Route path='/student/home' element={ <Home/> } />
          <Route path='/student/Connects' element={ <Connects/> } />
          <Route path='/student/assesment' element={ <Assessment/> } />
          <Route path='/student/Connect' element={ <Connect/> } />
          <Route path='/student/BookSlot' element={ <BookSlot/> } />


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
