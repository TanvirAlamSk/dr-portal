import React from 'react';

const AppointmentType = ({ availableService }) => {
    const { name, slots } = availableService
    return (
        <div className='shadow-lg p-10 rounded-lg'>
            <h5 className='text-secondary text-lg font-medium'>{name}</h5>
            {/* <input></input> */}
            <select>
                {
                    slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                }
            </select><br></br>
            <button className='btn btn-secondary'>Book Appointment</button>
        </div>
    );
};

export default AppointmentType;