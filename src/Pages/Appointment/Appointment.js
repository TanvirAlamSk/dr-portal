import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import AvailableSlot from './AvailableSlot/AvailableSlot';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    let footer = "Please pick a date";
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}</p>
    }

    return (
        <div>
            <AppointmentSection
                selected={selected} setSelected={setSelected} footer={footer}>
            </AppointmentSection>
            <AvailableSlot selected={format(selected, 'PP')}></AvailableSlot>

        </div>
    );
};

export default Appointment;