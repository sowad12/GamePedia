import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import motion from 'framer-motion'
import GamesFetch from '../components/Games/GamesFetch'
import GameDetailCard from '../components/Games/GameDetailCard'

import {useLocation} from 'react-router-dom'
const Home = () => {
const location=useLocation();
const pathId=location.pathname.split('/')[1]
// console.log(location.pathname.split('/')[1])


  return (
    <>
  {pathId && <GameDetailCard/> }
    <GamesFetch/> 
    </>
  )
}

export default Home