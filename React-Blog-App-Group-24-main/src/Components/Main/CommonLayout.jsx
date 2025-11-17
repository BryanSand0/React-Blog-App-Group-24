import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
import './CommonLayout.css';

function CommonLayout() {
  return (
    <div className='Layout'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default CommonLayout