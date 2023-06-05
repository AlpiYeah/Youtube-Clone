import React from 'react'
import { Box, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SearchBar from './SearchBar'
import Switch from './Switch'


function Navbar ({ isChecked, handleToggle,theme, value }) {
  
  return (
  
  <Stack direction="row" alignItems="center" p={2} sx={{position:"sticky", background:"primary", top:0, justifyContent: "space-between", zIndex:"10", backgroundColor:"primary.main"}}>
    
<Link to="/" style={{display:"flex", alignItems: "center", paddingLeft:"10px", }}>
  <img src={require('../public/pelilogo.png')} alt="logo" height={60}/>
  <Box sx={{display: { xs: 'none', md: 'block' }}}>
  <img src={require('../public/logotextgrt.png')} alt="logo" height={20} style={{marginLeft:"10px"}}/>
  </Box>

</Link>
<input
        checked={isChecked}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: value && "" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
<SearchBar/>
  </Stack>
)
  }

export default Navbar