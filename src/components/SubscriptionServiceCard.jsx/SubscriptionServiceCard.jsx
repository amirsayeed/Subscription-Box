import React from 'react';
import { Link } from 'react-router';

const SubscriptionServiceCard = ({subData}) => {
    const {thumbnail,name,tech_category,price,frequency} = subData;
    return (
        <div data-aos="fade-down" className="card bg-base-100 shadow-md">
        <figure>
            <img className='p-4 w-full h-[300px] object-cover'
            src={thumbnail}
            alt="Shoes" />
        </figure>
        <div className="card-body space-y-2">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p>Category: {tech_category}</p>
            <p>Price: ${price}</p>
            <p>Frequency: {frequency}</p>
            <div className="card-actions">
            <Link to={`/subscriptionService/${subData.id}`} className="btn btn-primary w-full">View More</Link>
            </div>
        </div>
        </div>
    );
};

export default SubscriptionServiceCard;