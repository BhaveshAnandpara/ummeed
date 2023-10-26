import React from 'react'
import CollegeHeader from '../../Components/CollegeHeader/CollegeHeader'
import AnalyticsHeroSection from '../../assets/Img/AnalyticsHeroSection.png'
import InstitutionDashboardImg from '../../assets/Img/InstitutionDashboardImg.png'
import ActivePlanImg from '../../assets/Img/ActivePlanImg.png'
import CurrentSlot from '../../assets/Img/CurrentSlot.png'
import Allocated_Consellor from '../../assets/Img/Allocated_Consellor.png'
import Analysis from '../../assets/Img/Analysis.png'


import CurrentSlotCard from '../InstituteDashboard/CurrentSlotCard'



import '../InstituteDashboard/Analytics.css'
export default function Analytics() {
  return (
    <div>
      <CollegeHeader />
      <div className="AnalyticsHeroSection">
        <div>
          <img src={AnalyticsHeroSection} alt="My Image" />
        </div>
        <div className="InstDashBoardImg">
          <img src={InstitutionDashboardImg} alt="My Image" />
        </div>
        <div className="ActivePlanImg">
          <img src={ActivePlanImg} alt="My Image" />
        </div>
        <div className="CurrentSlotImg">
          <img src={CurrentSlot} alt="My Image" />
        </div>
        <div className="slots">
        <CurrentSlotCard/>
        </div>
        <div className="AllocatedCon">
          <img src={Allocated_Consellor} alt="My Image" />
        </div>
        <div className="Analysis">
          <img src={Analysis} alt="My Image" />
        </div>

      </div>
    </div>
  )
}
