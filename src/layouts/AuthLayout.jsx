import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className='w-11/12 mx-auto my-10'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default AuthLayout;