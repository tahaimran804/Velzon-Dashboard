import React, { useContext } from 'react'
import { Link } from 'react-router'
import { MdSpaceDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { ThemeContext } from '../Context/ThemeContext';
import { MdClose } from "react-icons/md";


const AsideBar = () => {
  const { switchTheme, ToggleTheme, openAsideBar, setOpenAsideBar } = useContext(ThemeContext);

  const NavLink = [
    {
      id: 1,
      url: "/",
      title: "Dashboard",
      icon: <MdSpaceDashboard />
    },
    {
      id: 2,
      url: "/transactions",
      title: "Transactions",
      icon: <GrTransaction />
    },
  ]
  return (
    <div
      className={`
    fixed lg:static top-0 left-0 
    h-full 
    bg-white dark:bg-[#212529] shadow-xl 
    border-r border-gray-100 dark:border-[#292e32]
    transition-transform duration-300 ease-in-out
    z-50
    w-[16rem]
    ${openAsideBar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  `}>
      <span
        onClick={() => setOpenAsideBar(!openAsideBar)}
        className='absolute top-2 right-2 text-2xl cursor-pointer block lg:hidden'
      >
        <MdClose />
      </span>
      <div className='flex py-6 px-3 flex-col items-start justify-between h-full'>
        <div className='flex flex-col gap-8'>
          <Link to={'/'} onClick={() => setOpenAsideBar(false)}>
            <img
              className='w-[150px] h-[30px]'
              src={
                switchTheme === "light"
                  ? "/logo-dark.png"
                  : "/logo-light.png"
              }
              alt="Logo"
            />
          </Link>
          <ul className='flex flex-col gap-2'>
            {NavLink.map((elemItem) => (
              <li
                onClick={() => setOpenAsideBar(false)}
                className='flex items-center gap-2 sm:text-lg text-black dark:text-white text-sm'
                key={elemItem.id}
              >
                <span>{elemItem.icon}</span>
                <Link to={elemItem.url}>{elemItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-2'>
          <button onClick={() => setOpenAsideBar(!openAsideBar)} className='flex items-center gap-2 sm:text-lg text-black dark:text-white text-sm'>
            <span><BiSupport /></span>
            <Link to='/support'>Support</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AsideBar