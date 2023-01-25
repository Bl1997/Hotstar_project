import React from 'react'
import InternetSuperStarSlider from '../slider/InternetSuperStar'
import LatestSlider from '../slider/LatestSlider'
import MostWatchedSlider from '../slider/MostWatchedSlider'
import PopularChannelSlider from '../slider/PopularChannelSlider'
import PopularMoviesSlider from '../slider/PopularMoviesSlider'
import PopularShowSlider from '../slider/PopularShowSlider'
import QuixSlider from '../slider/QuixSlider'
import SuperHeroSlider from '../slider/SuperHeroSlider'

const Home = () => {
  return (
    <div>
  <div>
    <LatestSlider/>
    <PopularShowSlider/>
    <PopularMoviesSlider/>
    <SuperHeroSlider/>
    <InternetSuperStarSlider/>
    <MostWatchedSlider/>
    <QuixSlider/>
    <PopularChannelSlider/>
   
  </div>


    </div>
  )
}

export default Home