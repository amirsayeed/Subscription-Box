import React from 'react';
import SubscriptionServices from '../../components/SubscriptionServices/SubscriptionServices';
import { useLoaderData } from 'react-router';

const Home = () => {
    const subsData = useLoaderData();
    console.log(subsData);
    return (
        <div>
            <SubscriptionServices subsData={subsData}/>
        </div>
    );
};

export default Home;