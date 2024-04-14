import React from 'react'
import { useState, useEffect } from 'react';
import {Box, Stack, Typography} from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New')

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
  }, [selectedCategory])
  return (
    <Stack sx={{flexDirection: { sx: "column", md: "row"}}}>
      <Box sx={{ height: {sx: "auto", md: "92vh"}, borderRight: '3px solid #3d3d3d', px: { sx: 0, md: 2 }}}>
        <Sidebar />

        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2022 Awanmedia Media
        </Typography>
      </Box>

      <Box p={2} sx={{overflow: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{
          color: 'white'
        }}>
          New <span style={{color: '#F31503'}}>Videos</span>
        </Typography>

        <Videos videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed