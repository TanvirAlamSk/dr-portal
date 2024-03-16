import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const TimeDateSection = () => {
    const [selected, setSelected] = useState()

    let footer = "Please pick a date";
    if (selected) {
        // footer = <p>You picked {format(selected, 'PPP')}</p>
    }

    return (
        <div>
            <DayPicker
            // mode='single'
            // selected={selected}
            // onSelect={setSelected}
            // footer={footer}
            ></DayPicker>
        </div>
    );
};

export default TimeDateSection;