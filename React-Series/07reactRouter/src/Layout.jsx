import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Outlet/> is a placeholder for the child routes, it will render the child components */}
      <Footer />

    </>
  )
}

export default Layout



// write rfsc to import all files in the src folder
