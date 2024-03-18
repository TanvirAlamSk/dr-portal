import React from 'react';
import AppointmentModal from './AppointmentModal/AppointmentModal';

const AppointmentType = ({ availableService, setTreatment }) => {
    const { name, slots } = availableService;
    return (
        <div className='shadow-lg p-10 rounded-lg'>
            <h5 className='text-secondary text-lg font-medium'>{name}</h5>
            <p className='mt-3 text-center'>{`${slots[0]}`}</p>
            <p className='mt-2 mb-4 text-center text-sm'> {`${slots.length}`} SPACES AVAILABLE</p>

            <label htmlFor="appointment_modal" className='btn btn-secondary text-white' onClick={() => setTreatment(availableService)}>Book Appointment</label>
        </div>
    );
};

export default AppointmentType;