import React, { use, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';


const CustomerReview = () => {
    const {user} = use(AuthContext);
    const [reviewCus,setReviewCus] = useState([]);
   
    const handleReview = e =>{
        e.preventDefault();
        const rating = e.target.rating.value;
        const review = e.target.review.value;

        const reviewInfo = {
            rating,
            review
        }

        setReviewCus([...reviewCus,reviewInfo]);
    }
    return (
        <div className='flex flex-col md:flex-row items-start justify-center gap-5'>
            <div className='flex-1 max-w-md p-6 bg-base-100 shadow-lg rounded-md'>
            <form onSubmit={handleReview} className='fieldset'>
                <label className='text-sm'>Rating</label>
                <select id="rating" name="rating" className="max-w-60 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required>
                    <option value="" disabled selected>Select a rating</option>
                    <option value="1">1 - Very Poor</option>
                    <option value="2">2 - Poor</option>
                    <option value="3">3 - Average</option>
                    <option value="4">4 - Good</option>
                    <option value="5">5 - Excellent</option>
                </select>
                
                <label className='text-sm mt-2'>Add a review</label>
                <textarea name="review" rows='4' className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" placeholder='Add your review' id=""></textarea>
                <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form>
            </div>
            <div className='flex flex-col gap-3'>
                {reviewCus.map((review,idx) => (
                <div key={idx} className='p-2 space-y-1'>
                    {user?.photoURL ? 
                        <img src={user.photoURL} alt="user" className='w-8 h-8 rounded-full' />
                     : <FaUserCircle size={20} />
                     }
                    <p className='text-sm'>{review.rating}/5</p>
                    <p className='text-base'>{review.review}</p>
                </div>
                ))}
            </div>
        </div>
        
    );
};

export default CustomerReview;