import React from 'react';
import SubscriptionServiceCard from '../SubscriptionServiceCard.jsx/SubscriptionServiceCard';

const SubscriptionServices = ({subsData}) => {
    
    return (
        <div className='max-w-7xl mx-auto my-10 space-y-8'>
            <h3 className='text-3xl text-center font-bold'>Subscription Services</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    subsData.map(subData => <SubscriptionServiceCard key={subData.id} subData={subData} />)
                }
            </div>
        </div>
    );
};

export default SubscriptionServices;