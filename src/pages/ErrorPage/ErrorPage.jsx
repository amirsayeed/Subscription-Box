import React from 'react';
import error from '../../assets/404_page-not-found.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <img className='max-w-md h-[350px] object-cover' src={error} alt="" />
            <Link to='/' className='btn btn-primary'>Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;