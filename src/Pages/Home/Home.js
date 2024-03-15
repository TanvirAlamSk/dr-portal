import React from 'react';
import Banner from '../../components/Banner/Banner';
import Contract from './Contract/Contract';
import Services from './Services/Services';
import ExceptionalBanner from './ExceptionalBanner/ExceptionalBanner';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Comments from '../Comments/Comments';
import ForContruct from './ForContruct/ForContruct';

const Home = () => {
    return (
        <div className='lg:px-8'>
            <Banner></Banner>
            <Contract></Contract>
            <Services></Services>
            <ExceptionalBanner></ExceptionalBanner>
            <AppointmentBanner></AppointmentBanner>
            <Comments></Comments>
            <ForContruct></ForContruct>
        </div>
    );
};

export default Home;