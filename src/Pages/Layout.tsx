import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'

export const Layout = () => {
  return (
    <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer></Footer>
    </>
  )
}

export default Layout
