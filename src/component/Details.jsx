import React from 'react'
import phoneIcon from "../assets/PhoneIcon.png"
import birthIcon from "../assets/BirthIcon.png"
import insuranceIcon from "../assets/InsuranceIcon.png"
import femaleIcon from "../assets/FemaleIcon.png"
import { useFetch } from './Fetcher'
import { useParams } from 'react-router'


export const Details = () => {
    const {data:patients,loading} = useFetch("https://fedskillstest.coalitiontechnologies.workers.dev/")
    const {id} = useParams()
    const patient = patients[id]
 
 if (!loading){   
  return (
    <div className='lg:w-2/5 bg-white  rounded-3xl p-3  space-y-8 '>
        <div className='flex flex-col items-center space-y-2 '>
            <img src={patient.profile_picture} alt="" className='w-44 lg:w-36 lg:h-36' />
            <h4 className='font-bold text-2xl'>{patient.name}</h4>
        </div>
        <div className='space-y-4 text-sm'>
            <div className='flex items-center space-x-2'>
                <img src={birthIcon} alt="" />
                <div>
                    <p>Date of Birth</p>
                    <p className='font-semibold'>{patient.date_of_birth}</p>
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <img src={femaleIcon} alt="" />
                <div>
                    <p>Gender</p>
                    <p className='font-semibold'>{patient.gender}</p>
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <img src={phoneIcon} alt="" />
                <div>
                    <p>Contact Info</p>
                    <p className='font-semibold'>{patient.phone_number}</p>
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <img src={phoneIcon} alt="" />
                <div>
                    <p>Emergency Contact</p>
                    <p className='font-semibold'>{patient.emergency_contact}</p>
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <img src={insuranceIcon} alt="" />
                <div>
                    <p>Insurance Provider</p>
                    <p className='font-semibold'>{patient.insurance_type}</p>
                </div>
            </div>

        </div>
        <div className='text-center'>
        <button className='bg-[#01F0D0] font-medium font-sm px-8 rounded-3xl  py-1'>Show All Information</button>

        </div>
    </div>
  )
}
else{
    return <div className='w-1/4 bg-slate-200 transition'></div>
  }
}