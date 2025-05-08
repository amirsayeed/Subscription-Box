import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';

const Root = () => {
    const {state} = useNavigate();
    return (
        <div className='px-1'>
            <header className='max-w-7xl mx-auto'>
                <Navbar/>
            </header>
            <main className='max-w-7xl mx-auto min-h-[calc(100%-353px)]'>
              {state=='loading' ? <Loading/> : <Outlet/>}  
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Root;