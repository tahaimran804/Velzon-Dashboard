import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Transactions from './pages/Transactions'
import Setting from './components/Setting'
import { ThemeProvider } from './Context/ThemeContext'
import Contact from './pages/Contact'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/transactions', element: <Transactions /> },
        { path: '/contact', element: <Home /> },
        { path: '/support', element: <Contact /> },
      ],
    },
  ])

  return (
    <div className="w-full h-full">
      <ThemeProvider>
        <RouterProvider router={router} />
        <Setting />
      </ThemeProvider>
    </div>
  )
}
export default App
