import React from 'react';
import error from '../../assets/404_page-not-found.png'
import { useNavigate } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div>
        <title>Subscription Box | Error </title>
        <Navbar/>
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <img className='max-w-md h-[350px] object-cover' src={error} alt="" />
            <button onClick={() => navigate("/", { replace: true })} className='btn btn-primary'>Go back to Home</button>
        </div>
        <Footer/>
        </div>
    );
};

export default ErrorPage;