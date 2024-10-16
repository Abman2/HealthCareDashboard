import React, { useState } from 'react';
import logo from "../assets/TestLogo.svg";
import setting from "../assets/settings.svg";
import more from "../assets/more.svg";
import seniorwoman from "../assets/seniorwoman.png";
import { NavLink } from 'react-router-dom';
import { OverviewPage } from '../Pages/OverviewPage';
import { PatientHome } from '../Pages/PatientHome';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='w-full rounded-3xl flex justify-between items-center md:px-5 bg-white p-2 lg:mb-5 sticky top-0  '>
            <div className='flex items-center'>
                <NavLink to={"/"}><img src={logo} alt='Logo' className='h-10 w-36' /></NavLink>
            </div>
            <div className='hidden md:flex space-x-8 text-[#072635] font-medium'>
                <NavLink to={"/overview"}  >Overview</NavLink>
                <NavLink to={'/'}>Patients</NavLink>
                <a href=''>Schedule</a>
                <a href=''>Messages</a>
                <a href="">Transactions</a>
            </div>
            <div className='flex items-center space-x-5'>
                <div className='flex items-center border-r pr-2'>
                    <img src={seniorwoman} alt="Profile" className='h-8 w-8 rounded-full' />
                    <div className='ml-2'>
                        <p className='text-xs md:text-sm font-medium'>Dr. Jose Simmons</p>
                        <p className='text-xs text-gray-500'>General Practitioner</p>
                    </div>
                </div>
                <div className='md:flex hidden space-x-1 md:space-x-3'>
                    <img src={setting} alt="Settings" className='h-4 md:h-6 w-6' />
                    <img src={more} alt="More" className='md:h-6 h-4 w-6' />
                </div>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='focus:outline-none'>
                    <svg className='h-6 w-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className='absolute top-16 right-5 bg-white rounded-lg shadow-lg md:hidden w-40'>
                    <NavLink  className='block px-4 py-2 text-sm text-[#072635]' to={"/overview"} onClick={toggleMenu}>Overview</NavLink>
                    <NavLink  className='block px-4 py-2 text-sm text-[#072635]' to={"/"} onClick={toggleMenu}>Patients</NavLink>
                    <a href='' className='block px-4 py-2 text-sm text-[#072635]'>Schedule</a>
                    <a href='' className='block px-4 py-2 text-sm text-[#072635]'>Messages</a>
                    <a href='' className='block px-4 py-2 text-sm text-[#072635]'>Transactions</a>
                </div>
            )}
        </nav>
    );
};
