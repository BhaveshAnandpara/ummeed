import React from 'react'
// import '../StudentDashboard/StudentDashboard.css'
import '../Home/Home.css'
import HomePicOne from '../../../assets/Img/HomePicOne.png'
import HomePagePicTwo from '../../../assets/Img/HomePagePicTwo.png'
import HomePgeBlogThree from '../../../assets/Img/HomePgeBlogThree.png'
import PodcastImg from '../../../assets/Img/PodcastImg.png'
import Podcats from '../../../assets/Img/Podcats.png'
import PodcastCard from './PodcastCard/PodcastCard'



export default function Home() {
  return (
    
    <div className="MainHomeContainer">
      <div className="HomeOneImg">
      <img src={HomePicOne} alt="My Image" />
      </div>
      <div className="HomeTwoImg">
      <img src={HomePagePicTwo} alt="My Image" />

      </div>
      <div className="HomeThreeImg">
      <img src={HomePgeBlogThree} alt="My Image" />
      </div>
      <div className="HomeThreeImg">
      {/* <img src={PodcastImg} alt="My Image" /> */}<PodcastCard/>
      </div>
      <div className="HomeThreeImg">
      <img src={Podcats} alt="My Image" />
      
      </div>
    </div>
  )
}
