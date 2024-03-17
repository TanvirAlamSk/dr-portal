import React, { useEffect, useState } from 'react';
import AppointmentType from './AppointmentType/AppointmentType';

const AvailableSlot = ({ selected }) => {
    const [availableServices, setAvailableServices] = useState([]);

    useEffect(() => {
        fetch("appointmentOptions.json")
            .then((responce) => responce.json())
            .then((data) => setAvailableServices(data))
    }, [])
    return (
        <div className='text-center'>
            <p className='text-secondary font-medium'>Available Services on {selected}</p>
            <p className='text-neutral'>Please select a service.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    availableServices.map((availableService) => <AppointmentType
                        availableService={availableService}
                        key={availableService.id}>

                    </AppointmentType>)
                }
            </div>
        </div>
    );
};

export default AvailableSlot;