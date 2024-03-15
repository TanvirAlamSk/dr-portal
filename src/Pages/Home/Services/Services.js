import React from 'react';
import fluoride from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import whitening from "../../../assets/images/whitening.png"
import Servicecard from './Servicecard/Servicecard';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Fluoride Treatment",
            subtitle: "Fluoride decreases breakdown of teeth by acids, promotes remineralisation, and decreases the activity of bacteria. Fluoride works primarily through direct contact with teeth.",
            icon: fluoride
        },
        {
            id: 2,
            title: "Cavity Filling",
            subtitle: "A filling is used to treat a small hole, or cavity, in a tooth. To repair a cavity, a dentist removes the decayed tooth tissue and then fills the space with a filling material.",
            icon: cavity
        },
        {
            id: 3,
            title: "Tooth Whitening",
            subtitle: "Tooth whitening or tooth bleaching is the process of lightening the color of human teeth. Whitening is often desirable when teeth become yellowed over time for a number of reasons",
            icon: whitening
        },
    ]
    return (
        <div className='text-center'>
            <h5 className='mt-16 text-secondary font-bold'>OUR SERVICES</h5>
            <h2 className='mb-16 text-2xl'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 justify-center'>
                {
                    services.map((service) => <Servicecard service={service} key={service.id}></Servicecard>)
                }
            </div>
        </div>
    );
};

export default Services;