import React from 'react';
import treatmentImage from '../../../assets/images/treatment.png';

const ExceptionalBanner = () => {
    return (
        <div className='flex flex-col lg:flex-row mt-16'>
            <div className='lg:w-1/2 flex items-center justify-center'>
                <img src={treatmentImage} className='w-full lg:w-1/2 float-right rounded-lg lg:ms-16' alt=''></img>
            </div>
            <div className='lg:w-1/2 flex flex-col justify-center items-start mt-5'>
                <h2 className='font-bold text-3xl lg:pr-24'>Exceptional Dental Care, on Your Terms</h2>
                <p className='my-6'>With a combination of quality treatment, friendly efficiency and a few laughs along the way, we make your dental visit both pleasant and comfortable. The staff at Spearwood Dental prides itself on treating the person, not just the mouth, and working in partnership with you to improve and maintain your oral health.</p>
                <button className='btn btn-secondary'>GET STARTED</button>
            </div>
        </div>
    );
};

export default ExceptionalBanner;