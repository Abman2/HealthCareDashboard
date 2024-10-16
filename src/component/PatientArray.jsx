import React from 'react';
import { Patient } from './Patient';
import { useFetch } from './Fetcher';

export const PatientArray = () => {
     const { data: patients, loading } = useFetch('https://fedskillstest.coalitiontechnologies.workers.dev/');

     if (!loading) {
          return (
               <div className='bg-white p-3 md:overflow-y-scroll rounded-2xl lg:h-[580px] h-full  md:max-w-sm '>
                    <div className='mb-4'>
                         <h3 className='font-semibold text-2xl'>Patients</h3>
                    </div>

                    <div className='space-y-4 '>
                         {patients.map((patient, index) => {
                              return (
                              
                                        <Patient
                                             key={patient.name}
                                             name={patient.name}
                                             age={patient.age}
                                             gender={patient.gender}
                                             image={patient.profile_picture}
                                             id={index}
                                        />
    
                              );
                         })}
                    </div>
               </div>
          );
     } else {
          return <div className='w-1/5 bg-slate-200 transition'></div>;
     }
};
