import React from 'react';
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"
import ContractCard from './ContractCard';

const Contract = () => {
    const items = [{
        id: 1,
        title: "Opening Hours",
        subtitle: "Sunday to Thursday from 9 am to 5 pm",
        icons: clock
    },
    {
        id: 2,
        title: "Visit our location",
        subtitle: "Brooklyn, NY 10036, United States",
        icons: marker
    },
    {
        id: 3,
        title: "Contact us now",
        subtitle: "+000 123 456789",
        icons: phone
    },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                items.map((item) => <ContractCard item={item} key={item.id}></ContractCard>)
            }
        </div>
    );
};

export default Contract;