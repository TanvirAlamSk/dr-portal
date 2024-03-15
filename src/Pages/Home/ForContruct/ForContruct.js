import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import "./ForContruct.css"

const ForContruct = () => {
    return (
        <div className='contract py-20 my-20 flex flex-col justify-center items-center' style={{ backgroundImage: `url(${appointment})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <h4 className='text-lg text-secondary font-semibold'>Contact Us</h4>
            <h2 className='text-2xl text-white'>Stay connected with us</h2>
            <input placeholder='Email Address' className='h-10 p-3 mt-6 md:w-72 rounded-md'></input>
            <input placeholder='Subject' className='my-4 h-10 p-3 md:w-72 rounded-md'></input>
            <textarea placeholder='Your Massage' className='md:w-72 rounded-md h-24 p-6 lg:p-3 mb-10'></textarea>
            <button className='btn btn-secondary px-8 text-white'>Submit</button>
        </div>
    );
};

export default ForContruct;