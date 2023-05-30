import React from 'react'
import { Box, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'


const Navbar = () => (
  
  <Stack direction="row" alignItems="center" p={2} sx={{position:"sticky", background:"#000", top:0, justifyContent: "space-between"}}>
<Link to="/" style={{display:"flex", alignItems: "center", paddingLeft:"10px", }}>
  <img src={require('../public/pelilogo.png')} alt="logo" height={60}/>
  <Box sx={{display: { xs: 'none', md: 'block' }}}>
  <img src={require('../public/logotextgrt.png')} alt="logo" height={20} style={{marginLeft:"10px"}}/>
  </Box>

</Link>
<SearchBar/>
  </Stack>
)

export default Navbar