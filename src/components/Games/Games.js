import axios from 'axios'
import { motion } from 'framer-motion'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

// for  design styled-components and framer-motion
const Card=styled(motion.div)`
box-shadow: 0px 5px 30px rgba(0,0,0,0.2) ;

text-align: center;
border-radius: 1rem;
cursor: pointer;
overflow: hidden;
img{
    width:100%;
    height: 37vh;
    object-fit: cover;
}
`

const Games = ({GameData}) => {
const dispatch=useDispatch();
const gameDetails=async()=>{
try{
  document.body.style.overflow="hidden"
  dispatch({type:'Loading'})
const gameDetailsData=await axios.get(`https://api.rawg.io/api/games/${GameData.id}?key=74ed0a94f1394334ba786a7a30c8a8f2`);
const gameSSData=await axios.get(`https://api.rawg.io/api/games/${GameData.id}/screenshots?key=74ed0a94f1394334ba786a7a30c8a8f2`);
dispatch({type:'gameDetailsandSS',payload:{
  details:gameDetailsData.data,
  screen:gameSSData.data
}
});


}catch(err){
  console.log(err)
}

}


  return (

    <Card onClick={gameDetails}>
    <NavLink to={`/${GameData.id}`}>
      <h3>{GameData.name}</h3>  
      <p>{GameData.released}</p>
      <img src={GameData.background_image}/>
      </NavLink>
      </Card>

  )
}

export default Games