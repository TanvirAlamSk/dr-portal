import React from 'react';
import { DayPicker } from 'react-day-picker';


const TimeDateSection = ({ selected, setSelected, footer }) => {
    return (
        <div className='shadow-lg rounded-lg P-5'>
            <DayPicker
                mode='single'
                selected={selected}
                onDayClick={setSelected}
                footer={footer}
            ></DayPicker>

        </div>
    );
};

export default TimeDateSection;
