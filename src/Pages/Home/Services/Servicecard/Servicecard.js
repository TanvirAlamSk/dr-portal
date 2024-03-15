import React from 'react';

const Servicecard = ({ service }) => {
    const { title, subtitle, icon } = service
    return (
        <div className='flex flex-col items-center p-4 shadow-lg rounded-md'>
            <img src={icon} alt=''></img>
            <h4 className='font-semibold text-neutral' >{title}</h4>
            <p>{subtitle}</p>
        </div>
    );
};

export default Servicecard;