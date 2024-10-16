import React from 'react';

import { Outlet } from 'react-router';
import { PatientArray } from '../component/PatientArray';

export const DetailsOutlet = () => {
     return (
          <div className='flex  items-start w-full '>
               <div className='hidden md:block w-1/4'>
                    <PatientArray />
               </div>
               <Outlet />
          </div>
     );
};
