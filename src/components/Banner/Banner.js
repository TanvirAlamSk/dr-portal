import React from 'react';
import './Banner.css';
import chairImage from "../../assets/images/chair.png"

const Banner = () => {
    return (
        <div className="hero py-20 my-8 banner">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-4">
                <div className='lg:w-1/2'>
                    <img src={chairImage} alt='' className="lg:w-4/5 rounded-lg shadow-2xl float-right" />
                </div>
                <div className='lg:w-1/2 lg:px-2'>
                    <h1 className="text-4xl font-bold ">Your New Smile Starts Here</h1>
                    <p className="py-6">A confident smile is important. A smile is much more than just straight, white teeth. When you feel confident in your smile, you feel confident in yourself and are prone to show off your smile frequently. The benefits of smiling and laughing are numerous.</p>
                    <button className="btn btn-secondary text-gray-100">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;