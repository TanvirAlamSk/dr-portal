import React from 'react';
import AppointmentModal from './AppointmentModal/AppointmentModal';

const AppointmentType = ({ availableService }) => {
    const { name, slots, id } = availableService;
    const handelModal = (event) => {
        // event.preventDefault();
        // const name = event.target.name.value;
        // console.log(name);
    }
    return (
        <div className='shadow-lg p-10 rounded-lg'>
            <h5 className='text-secondary text-lg font-medium'>{name}</h5>
            <p className='mt-3 text-center'>{`${slots[0]}`}</p>
            <p className='mt-2 mb-4 text-center text-sm'> {`${slots.length}`} SPACES AVAILABLE</p>

            <label htmlFor={`my_modal_${id}`} className="btn">open modal</label>
            {/* <label className='btn btn-secondary text-white' onClick={() => document.getElementById(`my_modal_${id}`).showModal()}>Book Appointment</label> */}

            <AppointmentModal availableService={availableService} ></AppointmentModal>
        </div>
    );
};

export default AppointmentType;