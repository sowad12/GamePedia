import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Navbar.css';

import {Search} from '@material-ui/icons';

const Navbar = ({value}) => {
//   const dispatch=useDispatch()
//   const[keyword,setKeyword]=useState('');
//   const changeInput=(e)=>{
//     e.preventDefault()
//     dispatch({type:'SearchFood',payload:e.target.value})
//   // console.log(e.target.value)  
//   setKeyword('');
//   }
  return(
  <div className='searchBar-wrap'>

    <Search className='searchBar-icon' />
    <input
     type='text'
     placeholder='Search Game'
     
    //  onChange={changeInput}
/>
    
  </div>
)
};

export default Navbar; 