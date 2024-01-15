import Link from 'next/link'
import React from 'react'

const MobileFooter = () => {
  return (
    <footer>
      <ul className='flex text-xs flex-row flex-wrap justify-center'>
        <li className='text-footer-link p-2'><Link href={'#'}>Terms of Service</Link></li>
        <li className='text-footer-link p-2'><Link href={'#'}>Privacy Policy</Link></li>
        <li className='text-footer-link p-2'><Link href={'#'}>Guest Refund</Link></li>
        <li className='text-footer-link p-2'><Link href={'#'}>About Us</Link></li>
        <li className='text-footer-link p-2'><Link href={'#'}>Cancellation Policy</Link></li>
        <li className='text-footer-link p-2'><Link href={'#'}>How It Works</Link></li>
        <li className='text-footer-link p-2'><Link href={'#'}>Contact Us</Link></li>
      </ul>
    </footer>
  )
}

export default MobileFooter