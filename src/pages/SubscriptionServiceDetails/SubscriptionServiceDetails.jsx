import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Loading from '../../components/Loading/Loading'
const SubscriptionServiceDetails = () => {
    const {id} = useParams();
    const detailsData = useLoaderData()
    const [serviceInfo, setServiceInfo] = useState();

    useEffect(()=>{
        
        const serviceDetail = detailsData.find(detail=>detail.id == id);
        setServiceInfo(serviceDetail);
        
    },[detailsData,id])

    if(!serviceInfo){
        return <Loading/>;
    }
    
    const {name,banner,frequency,number_of_reviews,ratings,subscription_benefits,features,tech_category,description,price} = serviceInfo;

    return (
        <div className="hero bg-base-200 min-h-screen py-10">
        <div className="hero-content flex-col lg:flex-row gap-5 items-start">
            <div>
                <img
                src={banner}
                className="max-w-lg min-h-screen object-cover rounded-lg shadow-2xl"
                />
            </div>
            <div className='flex flex-col gap-2'>
            <h1 className="text-5xl font-bold">{name}</h1>
            <div className='flex gap-5'>
                <p>{ratings}/5</p>
                <p>Reviews: {number_of_reviews}</p>
            </div>
            
            <div className='flex gap-5'>
                <p>${price}</p>
                <span> / </span>
                <p>{frequency}</p>
            </div>
            <p>Category: {tech_category}</p>
            <p className="py-4">
                {description}
            </p>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='space-y-1'>
                    <p className='text-lg font-semibold'>Features:</p>
                    <ul className='list-disc list-inside'>
                    {
                        features.map((feature,idx)=><li key={idx}>{feature}</li>)
                    }
                </ul>
                </div>
                <div className='space-y-1'>
                    <p className='text-lg font-semibold'>Benefits:</p>
                    <ul className='list-disc list-inside'>
                    {
                        subscription_benefits.map((benefit,idx)=><li key={idx}>{benefit}</li>)
                    }
                </ul>
                </div>
            </div>
            
            
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default SubscriptionServiceDetails;