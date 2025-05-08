import React, { use, useState } from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

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
        toast.success("Thank you for your feedback!");
    }
    return (
        <div className='flex flex-col md:flex-row items-center justify-center md:items-start md:justify-around gap-5 mt-5'>
            <div className='flex-1 max-w-md p-6 bg-base-100 shadow-lg rounded-md'>
            <form onSubmit={handleReview} className='fieldset'>
                <span className='text-2xl font-bold text-center'>Feedback</span>
                <label className='text-sm'>Rating</label>
                <select id="rating" name="rating" className="max-w-60 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required>
                    <option value="">Select a rating</option>
                    <option value="1">1 - Very Poor</option>
                    <option value="2">2 - Poor</option>
                    <option value="3">3 - Average</option>
                    <option value="4">4 - Good</option>
                    <option value="5">5 - Excellent</option>
                </select>
                
                <label className='text-sm mt-2'>Add a review</label>
                <textarea name="review" rows='4'  maxLength={300} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" placeholder='Add your review' id="" required></textarea>
                <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form>
            </div>
            <div className='flex flex-col gap-3 px-1 md:px-0'>
                {reviewCus.map((review,idx) => (
                <div key={idx} className='max-w-xs bg-base-300 shadow-md p-5 space-y-1'>

                   <div className='flex justify-between gap-2'>
                    <div className='flex items-center gap-1'>
                        {user?.photoURL ? 
                            <img src={user.photoURL} alt="user" className='w-8 h-8 rounded-full' />
                        : <FaUserCircle size={20} />
                        }
                        <p className='font-bold'>{user?.displayName ? user.displayName : ''}</p>
                    </div>
                    <div className='flex items-start text-orange-300 font-bold'>
                        <span className='text-base'>{review.rating}/5</span>
                        <span><FaStar size={20} /></span>
                    </div>
                   </div>
                    <p className='text-base break-words'>{review.review.slice(0,150)}</p>
                </div>
                ))}
            </div>
        </div>
        
    );
};

export default CustomerReview;