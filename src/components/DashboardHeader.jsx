import React, { useContext } from 'react'
import { Link } from 'react-router'
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { ThemeContext } from '../Context/ThemeContext';

const DashboardHeader = ({ title }) => {
  const { switchTheme, ToggleTheme, openAsideBar, setOpenAsideBar } = useContext(ThemeContext);
  return (
    <div className='bg-white dark:bg-[#292e32] border-b-1 border-gray-100 dark:border-[#212529] py-4 px-6 flex items-center justify-between w-full'>
      <div className="flex items-center gap-2">
        <span onClick={() => setOpenAsideBar(!openAsideBar)} className="text-2xl block lg:hidden cursor-pointer"><RiMenuUnfold4Fill /></span>
        <h1
          style={{ fontFamily: '"Momo Trust Sans", sans-serif' }}
          className="text-3xl text-black dark:text-white font-semibold"
        >
          {title}
        </h1>
      </div>
      <div className='text-4xl text-black dark:text-white'>
        <Link to="#"><IoPersonCircleOutline /></Link>
      </div>
    </div>
  )
}

export default DashboardHeader