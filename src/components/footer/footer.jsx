'use client'
import React from 'react'
import DesktopFooter from './desktop-footer'
import MobileFooter  from './mobile-footer'
import { useMediaQuery } from '@mui/material'

const Footer = () => {
    const matches = useMediaQuery('(min-width:1000px)');
  return (
    <div className='py-10 border-t-2 border-divider mt-16s bg-white'>
       {matches ? <DesktopFooter/> : <MobileFooter/>} 
    </div>
  ) 
}

export default Footer