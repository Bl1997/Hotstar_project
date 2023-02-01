
import './App.css';
import Navbar from './Components/Navbar';
import DevotionalShow from './Components/Pages/DevotionalShow';
import Home from './Components/Pages/Home';
import Latest from './Components/Pages/Latest';
import MostWatched from './Components/Pages/MostWatched';
import PopularMovies from './Components/Pages/PopularMovies';
import PopularShows from './Components/Pages/PopularShows';
import ImageSlider from './Components/slider/ImageSlider';
import SuperHeroSlider from './Components/slider/SuperHeroSlider';
import SuperHero from './Components/Pages/SuperHero';
import AllRoutes from './AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
      <div className='navbar'> <Navbar/></div>
   
      <ImageSlider/>
   {/* <SuperHero/>
   <PopularMovies/> */}
   {/* <Latest/> */}
   {/* <PopularShows/> */}
   {/* <DevotionalShow/> */}
   {/* <MostWatched/> */}

   {/* <Home/> */}
   {/* <SuperHeroSlider/> */}
   {/* <SuperHero/> */}
 <AllRoutes/>
   
    
 
  
    </div>
  );
}

export default App;
