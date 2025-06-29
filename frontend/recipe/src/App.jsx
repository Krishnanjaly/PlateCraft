import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Home/Home.jsx'
import Login from './Login/Login.jsx'
import Trending from './Recipes/Trending.jsx'
import Spicy from './Recipes/Spicy.jsx'
import Sugary from './Recipes/Sugary.jsx'
import SnackRecipes from './Recipes/Snacks.jsx'
import AmericanClassics from './Recipes/America.jsx'
import KoreanCuisine from './Recipes/Korea.jsx'
import ChineseCuisine from './Recipes/Chinese.jsx'
import BreakfastRecipes from './Recipes/Breakfast.jsx'
import DinnerRecipes from './Recipes/Dinner.jsx'
import SouthIndianDishes from './Recipes/SouthIndia.jsx'
import NorthIndianDishes from './Recipes/NorthIndia.jsx'
import CoolDrinks from './Recipes/CoolDrink.jsx'
import Home1 from './Home/Home1.jsx'
import Signup from './Login/Signup.jsx'

function App() {
 

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home1/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/TrendingRecipes" element={<Trending/>} />
        <Route path="/SpicyFoods" element={<Spicy/>} />
        <Route path="/Sugary" element={<Sugary/>} />
        <Route path="/Snacks" element={<SnackRecipes/>} />
        <Route path="/American" element={<AmericanClassics/>} />
        <Route path="/Korean" element={<KoreanCuisine/>} />
        <Route path="/Chinese" element={<ChineseCuisine/>} />
        <Route path="/Breakfast" element={<BreakfastRecipes/>} />
        <Route path="/Dinner" element={<DinnerRecipes/>} />
        <Route path="/NorthIndian" element={<NorthIndianDishes/>} />
        <Route path="/SouthIndian" element={<SouthIndianDishes/>} />
        <Route path="/CoolDrinks" element={<CoolDrinks/>} />
      </Routes>
      
    </>
  )
}

export default App
