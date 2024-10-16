import React from 'react';
import { DiagnosisHistory } from './DiagnosisHistory';
import { Details } from './Details';


export const PatientFullDetails = () => {
     return (
          <div className='flex  lg:flex-row flex-col-reverse  w-full lg:ps-5 space-x-5 lg:h-[580px]  lg:space-y-0  '>
               <DiagnosisHistory />
               <Details />
          </div>
     );
};
