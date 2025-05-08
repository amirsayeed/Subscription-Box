import React, { useEffect, useState } from 'react';
import TrustedReviewCard from './TrustedReviewCard';

const TrustedReviews = () => {
    const [trustedReviews, setTrustedReviews] = useState([]);
    useEffect(()=>{
        fetch('/reviews.json')
        .then(res=>res.json())
        .then(data=>setTrustedReviews(data))
    },[])

    return (
        <div className='my-20'>
            <h2 className="text-3xl font-bold text-center" data-aos='zoom-in'>Our Trusted Customers</h2>
            <p className='text-center text-gray-500 mt-6 text-lg'>Trusted feedback from those who choose the best</p>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4 mt-10' data-aos='zoom-in'>
                {
                    trustedReviews.map(review=><TrustedReviewCard key={review.id} review={review}/>)
                }
            </div>
        </div>
    );
};

export default TrustedReviews;