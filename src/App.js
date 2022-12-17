import React from 'react'
import Home from './pages/Home'
import GlobalStyles from './components/Games/GlobalStyles'
import GameDetailCard  from './components/Games/GameDetailCard'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
const App = () => {

  return (
    <>
    <GlobalStyles/>
    <Navbar/>
    <Routes>
    <Route path="/" element={ <Home/>} />
    <Route path="/:id" element={ <Home/> } />
</Routes>
    </>
  )
}

export default App