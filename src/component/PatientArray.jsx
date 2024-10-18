import { Patient } from './Patient';
import { useFetch } from './Fetcher';

import { SearchBar } from './SearchBar';
import { useState } from 'react';

export const PatientArray = () => {
     const { data: patients, loading } = useFetch('https://fedskillstest.coalitiontechnologies.workers.dev/');
     const [searchTerm, setSearchTerm] = useState('');
     const filteredPatients = patients?.filter((patient) => patient.name.toLowerCase().includes(searchTerm.toLowerCase()));
     if(loading) {
          return <div className='md:max-w-sm rounded-3xl lg:h-[580px]  bg-slate-200 transition'></div>;
     }
     if (!loading) {
          return (
               <div className='bg-white p-3 md:overflow-y-scroll rounded-2xl lg:h-[580px] h-full  md:max-w-sm '>
                    <div className='mb-4 flex justify-between'>
                         <h3 className='font-semibold text-2xl'>Patients</h3>
                         <SearchBar setSearchTerm={setSearchTerm} />
                    </div>

                    <div className='space-y-4 '>
                         {filteredPatients?.map((patient, index) => {
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
     }
  
};
