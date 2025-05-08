import React from 'react';
import SubscriptionServiceCard from '../SubscriptionServiceCard.jsx/SubscriptionServiceCard';


const SubscriptionServices = ({subsData}) => {

    return (
        <div className='max-w-7xl mx-auto my-10 space-y-8' data-aos="fade-up">
            <h3 className='text-3xl text-center font-bold' data-aos="fade-left">Subscription Services</h3>
            <p className='text-lg text-center text-gray-500'>Your gateway to exclusive content and benefits.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    subsData.map(subData => <div key={subData.id} data-aos="fade-down">
                        <SubscriptionServiceCard subData={subData}/>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SubscriptionServices;