import React from 'react';
import AvailableServices from './AvailableServices/AvailableServices';
import TimeDateSection from './TimeDateSection/TimeDateSection';

const Appointment = () => {
    return (
        <div>
            <AvailableServices></AvailableServices>
            <TimeDateSection></TimeDateSection>
        </div>
    );
};

export default Appointment;