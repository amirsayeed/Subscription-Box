import React from 'react';
import SubscriptionServices from '../../components/SubscriptionServices/SubscriptionServices';
import { useLoaderData } from 'react-router';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    const subsData = useLoaderData();
    console.log(subsData);
    return (
        <div>
            <Slider/>
            <SubscriptionServices subsData={subsData}/>
        </div>
    );
};

export default Home;