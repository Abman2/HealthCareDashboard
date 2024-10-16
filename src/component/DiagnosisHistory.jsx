import React, { useState } from 'react';
import heartBPM from '../assets/HeartBPM.svg';
import respRate from '../assets/respiratory rate.svg';
import temperature from '../assets/temperature.svg';
import { useParams } from 'react-router';
import { useFetch } from './Fetcher';
import BloodPressureChart from './BloodPresureChart';

export const DiagnosisHistory = () => {
    const { id } = useParams();
    const { data: patients, loading, error } = useFetch("https://fedskillstest.coalitiontechnologies.workers.dev/");
    
    // State to manage the selected number of months
    

    // Display loading state
    if (loading) {
        return <div className='md:w-3/5 bg-slate-200 transition rounded-3xl'></div>;
    }

    // Display error if data fails to load
    if (error) {
        return <div className='md:w-3/4 bg-red-200 text-red-600 p-4'>Failed to load data. Please try again.</div>;
    }

    const selectedPatient = patients[id];

    // Safeguard in case the selected patient or their diagnosis history doesn't exist
    if (!selectedPatient || !selectedPatient.diagnosis_history || selectedPatient.diagnosis_history.length === 0) {
        return <div className='w-3/4 bg-yellow-200 p-4'>No diagnosis history available for this patient.</div>;
    }

    // Extract the most recent diagnosis from the selected patient's history
    const latestDiagnosis = selectedPatient.diagnosis_history.slice(-1)[0];

   

    return (
        <div className='w-full bg-white rounded-3xl p-5 flex flex-col overflow-hidden space-y-2'>
            <h1 className='text-2xl font-bold -mt-3'>Diagnosis History</h1>

          

            <div className='flex md:flex-row flex-col   bg-[#F4F0FE] rounded-2xl'>
                {/* Pass the selectedMonths as a prop to BloodPressureChart */}
                <BloodPressureChart data={selectedPatient.diagnosis_history}  />
                
                <div className='py-4 flex md:flex-col justify-around '>
                    <div className='md:border-b-2 space-y-3 pb-3 '>
                        
                    <p className='font-semibold flex items-center'><span className='h-3 w-3 rounded-full block bg-[#E66FD2] mr-3'></span> Systolic</p>
                    <h2 className='text-2xl font-bold'>{latestDiagnosis.blood_pressure.systolic.value}</h2>
                    <p className='text-sm'>{latestDiagnosis.blood_pressure.systolic.levels}</p>
                    </div>
                    <div className=' space-y-3 md:py-3'>
                        
                        <p className='font-semibold flex items-center'><span className='h-3 w-3 block rounded-full  bg-[#8C6FE6] mr-3'></span> Diastolic</p>
                        <h2 className='text-2xl font-bold'>{latestDiagnosis.blood_pressure.diastolic.value}</h2>
                        <p className='text-sm'>{latestDiagnosis.blood_pressure.diastolic.levels}</p>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-3  gap-10'>
                {/* Respiratory Rate */}
                <div className='bg-[#E0F3FA] p-3 px-5 rounded-2xl'>
                    <img src={respRate} alt='' className='w-20 h-20' />
                    <p className='pt-2'>Respiratory Rate</p>
                    <h3 className='font-bold text-2xl mb-1'>{latestDiagnosis.respiratory_rate.value}</h3>
                    <p className='text-sm'>{latestDiagnosis.respiratory_rate.levels}</p>
                </div>
                
                {/* Temperature */}
                <div className='bg-[#FFE6E9] p-3 px-5 rounded-2xl'>
                    <img src={temperature} alt='' className='w-20 h-20' />
                    <p className='pt-2'>Temperature</p>
                    <h3 className='font-bold text-2xl mb-1'>{latestDiagnosis.temperature.value}</h3>
                    <p className='text-sm'>{latestDiagnosis.temperature.levels}</p>
                </div>
                
                {/* Heart Rate */}
                <div className='bg-[#FFE6F1] p-3 px-5 rounded-2xl'>
                    <img src={heartBPM} alt='' className='w-20 h-20' />
                    <p className='pt-2'>Heart Rate</p>
                    <h3 className='font-bold text-2xl mb-1'>{latestDiagnosis.heart_rate.value}</h3>
                    <p className='text-sm'>{latestDiagnosis.heart_rate.levels}</p>
                </div>
            </div>
        </div>
    );
};
