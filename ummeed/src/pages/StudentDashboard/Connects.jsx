import React from 'react'
import Header from '../../Components/Header/Header'
import HeroSectionConnect from '../../assets/Img/HeroSectionConnect.png'
import Connect_with_Counsellors from '../../assets/Img/Connect_with_Counsellors.png'
import Card from '../../assets/Img/Card.png'
import CardOne from '../../assets/Img/CardOne.png'
import CardTwo from '../../assets/Img/CardTwo.png'
import CardThree from '../../assets/Img/CardThree.png'
import CardFour from '../../assets/Img/CardFour.png'
import { useNavigate } from 'react-router-dom';
import BookSlot from './BookSlot/BookSlot'



import '../StudentDashboard/Connects.css' 
export default function Connects() {
    const navigate = useNavigate();
  return (
    <div>
      <Header/>
      <div className="HeroSection">
        <div className="Connect_Container">
      <img className='HeroSectionImg' src={HeroSectionConnect} alt="My Image" />
        </div>
        <div className="ConnectWithConHeading">
      <img className='ConnectWithHeadingImg' src={Connect_with_Counsellors} alt="My Image" />
        </div>
        <div className="ConnectCardsContainer" >
      <img className='CardsConnects' onClick={() => navigate('/student/BookSlot')} src={Card} alt="My Image" />
      <img className='CardsConnect' src={CardOne} alt="My Image" />
      <img className='CardsConnect' src={CardTwo} alt="My Image" />
      <img className='CardsConnect' src={CardThree} alt="My Image" />
      <img className='CardsConnect' src={CardFour} alt="My Image" />


        </div>

      </div>
    </div>
  )
}
