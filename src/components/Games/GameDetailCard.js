import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const CardShadow=styled(motion.div)`
width:100%;
min-height: 100vh;
overflow-y:scroll ;
background: rgba(0,0,0,0.5);
position: fixed;
left: 0;
top: 0;
&::-webkit-scrollbar{
            width: 0.5rem;
        }
&::-webkit-scrollbar-thumb{
          background-color: #ff7676;
        } 
        &::-webkit-scrollbar-track {
    background: white;
  } 
`
const Detail=styled(motion.div)`
width: 80%;
border-radius: 1rem;
padding: 2rem 5rem;
position: absolute;
left: 10%;
background: white;
color: black;
img{
  width: 100%;
}
`
const Stats=styled(motion.div)`
display: flex;
justify-content: space-between;
align-items: center;
`
const Info=styled(motion.div)`
text-align: center;
`
const Platform=styled(motion.div)`
display: flex;
justify-content: space-evenly;
img{
  margin-left: 3rem;
}
`
const Media=styled(motion.div)`
margin-top: 5rem;
img{
  width: 100%;
}
`
const Description=styled(motion.div)`
margin: 5rem 0rem;
`

const GameDetailCard = () => {
  const navigate = useNavigate();
  const {gamedetails,screenshots,isLoading}=useSelector(state=>state.gameDetails);
  // console.log(gamedetails)
  // console.log(screenshots)
const exit=(e)=>{
  // console.log(e.target)

if(e.target.classList.contains("shadow")){
  document.body.style.overflow="auto";
  navigate('/')
}
}

  return (  
    <>
    {!isLoading &&(
    <CardShadow className='shadow' onClick={exit}>
      <Detail>
        <Stats>
          <div className="rating">
            <h3>{gamedetails.name}</h3>
            <p>Rating:{gamedetails.rating}</p>
          </div>
          <Info>
            <h3>Platforms</h3>
            <Platform>
              {gamedetails.platforms.map(data=>(
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </Platform>
          </Info>
        </Stats>
        <Media>
          <img src={gamedetails.background_image}/>
        </Media>
        <Description>
          <p>{gamedetails.description_raw}</p>
        </Description>
        <div className="gallery">
          {screenshots.results.map(data=>(
            <img key={data.id} src={data.image}/>
          ))}
        </div>
      </Detail>
    </CardShadow>
    )}
   </>
  )
}

export default GameDetailCard