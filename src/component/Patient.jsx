import React from 'react';
//import seniorwoman from "../assets/seniorwoman.png";
import dot from '../assets/....svg';
import { NavLink } from 'react-router-dom';

export const Patient = ({ name, age, gender, image, id }) => {
     return (
          <NavLink className='flex items-center justify-between' to={`/patients/${id}`}>
               <div className='flex space-x-2'>
                    <div>
                         <img src={image} alt='' className='w-10 h-10' />
                    </div>
                    <div className='text-sm'>
                         <p className='font-semibold'>{name}</p>
                         <p className='text-xs text-[#707070]'>
                              {gender},<span>{age}</span>
                         </p>
                    </div>
               </div>
               <div></div>
               <div>
                    <img src={dot} alt='' />
               </div>
          </NavLink>
     );
};
