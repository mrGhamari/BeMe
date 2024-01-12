'use client'
import React from 'react'
import { DesktopFooter, MobileFooter } from '.'
import { useMediaQuery } from '@mui/material'

const Footer = () => {
    const matches = useMediaQuery('(min-width:1000px)');
    console.log('matches=',matches);
  return (
    <div className='py-10 border-t-2 border-divider mt-16s'>
       {matches ? <DesktopFooter/> : <MobileFooter/>} 
    </div>
  ) 
}

export default Footer