import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { useDispatch,useSelector } from 'react-redux'
import { popularGamesUrl,upcomingGamesUrl,newGamesUrl } from '../api'
import Games from './Games'

// for  design styled-components and framer-motion
const Container=styled(motion.div)`
padding: 0rem 5rem;
h2{
  padding: 4rem 0rem;
}
`
const GameList=styled(motion.div)`
/* min-height: 80vh; */
display:grid;
grid-template-columns: repeat(auto-fit,minmax(500px,1fr));
grid-column-gap: 2rem;
grid-row-gap: 3rem;
`

const GamesFetch = () => {
const[Data,setData]=useState([{}]);
const dispatch=useDispatch();
// console.log( popularGamesUrl)

useEffect(()=>{
const populargamesData=async()=>{
    try{
        const config={
            headers:{
             "Content-Type": "application/json",
            }
          }
     const res=await axios.get( popularGamesUrl,config);
    //  setData(data.results);
    //  dispatch({type:"Fetch_Games",payload:data.results});
      // console.log(res.data.results)
      dispatch({type:"Fetch_Games",payload:res.data.results});
    }
    catch(err){
        console.log(err.status);
    }
}

populargamesData();
},[])

useEffect(()=>{
const newGamesData=async()=>{
try{
  const res=await axios.get(newGamesUrl);
  // console.log(res.data.results);
  dispatch({type:"newGames",payload:res.data.results})

}catch(err){
  console.log(err);
}

}
newGamesData()
},[])


useEffect(()=>{
  const upcomingGamesData=async()=>{
    try{
  const res=await axios.get(upcomingGamesUrl);
// console.log(res.data.results);
dispatch({type:"upcomingGames",payload:res.data.results});

    }catch(err){
      console.log(err);
    }
  }
  upcomingGamesData();
},[])
// useSelector fetch
const {upcomingGames, popularGames, newGames}=useSelector(state=>state.games)


  return (
     <>
     <Container> 
      <h2>UPCOMING GAMES</h2>
     <GameList>
      {
      upcomingGames.map((game,pos)=>(
        <Games GameData={game} key={pos}/>
      ))  
      }
      </GameList> 
      <h2>POPULAR GAMES</h2>
     <GameList>
      {
        popularGames.map((game,pos)=>(
        <Games GameData={game} key={pos}/>
      ))  
      }
      </GameList> 
      <h2>NEW GAMES</h2>
     <GameList>
      {
        newGames.map((game,pos)=>(
        <Games GameData={game} key={pos}/>
      ))  
      }
      </GameList> 

     </Container>
     </>
  )
}

export default GamesFetch