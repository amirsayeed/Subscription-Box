import React from 'react';
import { FaStar } from 'react-icons/fa';

const TrustedReviewCard = ({review}) => {
    const {product,reviewer,rating,comment} = review;
    return (
        <div className="card shadow-md bg-base-200 px-2 py-4">
        <div className="card-body">
          <h3 className="card-title">{product}</h3>
          <div className='flex justify-between'>
          <p className="text-sm text-gray-500">by {reviewer}</p>
          <div className='text-orange-300 font-bold flex items-start'>
            <span>{rating}/5</span> 
            <span><FaStar size={15} /></span>
          </div>
          </div>
          <p className="mt-4 text-gray-700 text-justify">{comment}</p>
        </div>
      </div>
    );
};

export default TrustedReviewCard;