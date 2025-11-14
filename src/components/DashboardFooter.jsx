import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';

const DashboardFooter = () => {
  const date = new Date().getFullYear();
  return (
    <div className='bg-white mt-8 dark:bg-[#292e32] border-b-1 border-gray-100 dark:border-[#212529] py-4 px-6 gap-2  w-full flex flex-wrap items-center justify-between'>
      <h4 className='text-black text-sm dark:text-white'>Copyright ©{date} Velzon. All Rights Reserved.</h4>
      <div className='flex items-center gap-3 text-lg text-black cursor-pointer dark:text-white'>
        <Link to={'#'}> <span className='hover:text-purple-600'><FaFacebookF /></span></Link>
        <Link to={'#'}> <span className='hover:text-purple-600'><FaInstagram /></span></Link>
        <Link to={'#'}> <span className='hover:text-purple-600'><FaLinkedin /></span></Link>
        <Link to={'#'}> <span className='hover:text-purple-600'><FaSquareXTwitter /></span></Link>
      </div>
    </div>
  )
}

export default DashboardFooter