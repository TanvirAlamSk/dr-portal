import React from 'react';
import "./AppointmentBanner.css"
import doctorImage from "../../../assets/images/doctor-small.png"

const AppointmentBanner = () => {
    return (
        <div className="hero bg-base-200  mt-20 appointmentbanner cover">
            <div className="hero-content flex-col lg:flex-row gap-x-20 items-center p-0">
                <div className='w-1/2 hidden lg:flex justify-end'>
                    <img src={doctorImage} className="rounded-lg -mt-20 h-96" alt='' />
                </div>
                <div className='w-5/6 lg:w-1/2 py-20 lg:py-0'>
                    <h1 className="text-md font-medium my-4 text-secondary ">Appointment</h1>
                    <h2 className='text-3xl font-medium text-white'>Make an appointment Today</h2>
                    <p className="my-4 text-white lg:pr-20">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;