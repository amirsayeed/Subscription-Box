import React from 'react';
import { toast } from 'react-toastify';

const SubscriptionServiceDetailsCard = ({serviceInfo}) => {
    const {name,banner,frequency,number_of_reviews,ratings,subscription_benefits,features,tech_category,description,price} = serviceInfo;

    const handleSubscribe = () =>{
        toast.success("Congratulations! Subscribed successfully.")
    }
    return (
        <div className="py-10">
        <div className="flex flex-col lg:flex-row gap-7 items-start px-1">
            <div className='lg:w-1/2'>
                <img
                src={banner}
                className="min-h-screen object-cover rounded-lg shadow-2xl"
                />
            </div>
            <div className='lg:w-1/2 flex flex-col gap-2'>
            <h1 className="text-3xl md:text-5xl font-bold">{name}</h1>
            <div className='flex gap-5'>
                <p className='font-semibold'>Rating: {ratings}/5</p>
                <p className='font-semibold'>Reviews: {number_of_reviews}</p>
            </div>
            
            <div className='flex gap-5'>
                <p className='text-2xl font-semibold'>${price}</p>
                <span className='text-2xl'> / </span>
                <p className='text-2xl font-semibold'> {frequency}</p>
            </div>
            <p className='font-medium'>Category: {tech_category}</p>
            <p className="py-4">
                {description}
            </p>
            <div className='flex flex-col md:flex-row justify-between gap-4'>
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
              
            <div className='flex justify-center mt-4'>
                <button onClick={handleSubscribe} className="btn btn-primary max-w-60 px-8">Subscribe</button>
            </div>
            
            </div>
        </div>
        </div>
    );
};

export default SubscriptionServiceDetailsCard;