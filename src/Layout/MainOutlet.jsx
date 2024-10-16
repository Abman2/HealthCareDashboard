import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../component/Navbar'

export const MainOutlet = () => {
  return (
    <div className='md:p-5 w-full  bg-[#F6F7F8]'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
