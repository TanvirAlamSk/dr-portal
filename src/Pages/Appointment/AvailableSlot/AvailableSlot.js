import React, { useEffect, useState } from 'react';
import AppointmentType from './AppointmentType/AppointmentType';
import AppointmentModal from './AppointmentType/AppointmentModal/AppointmentModal';
import { format } from 'date-fns';

const AvailableSlot = ({ selected }) => {
    const [availableServices, setAvailableServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch("appointmentOptions.json")
            .then((response) => response.json())
            .then((data) => setAvailableServices(data))
    }, [])
    return (
        <div className='text-center my-20'>
            <p className='text-secondary font-medium'>Available Services on {selected}</p>
            <p className='text-neutral'>Please select a service.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    availableServices.map((availableService) => <AppointmentType
                        availableService={availableService}
                        key={availableService.id}
                        setTreatment={setTreatment}
                    >

                    </AppointmentType>)
                }
            </div>
            {treatment &&
                <AppointmentModal
                    setTreatment={setTreatment}
                    treatment={treatment}
                    selected={selected}
                >

                </AppointmentModal>
            }
        </div>
    );
};

export default AvailableSlot;