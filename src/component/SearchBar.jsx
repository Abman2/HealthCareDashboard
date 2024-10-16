import React from 'react'
import searchBar from "../assets/searchbar.svg"

export const SearchBar = ({setSearchTerm}) => {
   
  return (
 <div className='relative'>
    <input type="text" onChange={(e)=> setSearchTerm(e.target.value)} className='border-black  rounded-3xl px-3 py-1' />
    <img src={searchBar} alt="" className='absolute top-2 right-3'/>
 </div>
  )
}
