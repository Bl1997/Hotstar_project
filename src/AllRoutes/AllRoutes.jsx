import React from 'react'
import { Route, Routes } from "react-router-dom"
import BestOfQuix from "../Components/Pages/BestOfQuix"
import DevotionalShow from "../Components/Pages/DevotionalShow"
import Home from "../Components/Pages/Home"
import InternetSuperStar from '../Components/Pages/InternetSuperStar'
import Latest from "../Components/Pages/Latest"
import MostWatched from "../Components/Pages/MostWatched"
import PopularChannel from '../Components/Pages/PopularChannel'
import PopularMovies from "../Components/Pages/PopularMovies"
import PopularShows from "../Components/Pages/PopularShows"
import SuperHero from "../Components/Pages/SuperHero"



const AllRoutes = () => {
  return (
    <div>

        
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/latest" element={<Latest/>}/>
<Route path="/popularshow" element={<PopularShows/>} />
<Route path="/popularmovies" element={<PopularMovies/>}/>
<Route path="/superhero" elemen={<SuperHero/>} />
<Route path="/mostwatched" element={<MostWatched/>} />
<Route path="/devotionalshow" element={<DevotionalShow/>} />
<Route path="/bestofquix" element={<BestOfQuix/>}/>
<Route path='/popularchannel' element={<PopularChannel/>} />
<Route path='/internetsuperstar' element={<InternetSuperStar/>}/>

</Routes>
    </div>
  )
}

export default AllRoutes
