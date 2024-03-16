import React from 'react';
import chair from "../../../assets/images/chair.png"
import TimeDateSection from '../TimeDateSection/TimeDateSection';
import bg from "../../../assets/images/bg.png"

const AppointmentSection = ({ selected, setSelected, footer }) => {
    return (
        <div className="hero my-16" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <div className="hero-content flex-col lg:flex-row-reverse md:gap-28">
                <img src={chair} alt='' className="md:w-1/2 rounded-lg shadow-2xl" />
                <div className=''>
                    <TimeDateSection selected={selected} setSelected={setSelected} footer={footer}></TimeDateSection>
                </div>
            </div>
        </div >
    );
};

export default AppointmentSection;