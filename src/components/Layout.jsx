import React, { useContext } from 'react'
import Asidebar from './AsideBar'
import { Outlet } from 'react-router-dom' // ensure correct import
import DashboardFooter from './DashboardFooter'
import { ThemeContext } from '../Context/ThemeContext'

const Layout = () => {
  const { switchTheme, ToggleTheme, openAsideBar, setOpenAsideBar } = useContext(ThemeContext);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {<Asidebar />}
      <main className="flex-1 h-full overflow-auto bg-orange-400">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
