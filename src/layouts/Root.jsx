import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';

const Root = () => {
    const {state} = useNavigate();
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className='min-h-[calc(100%-353px)]'>
              {state=='loading' ? <Loading/> : <Outlet/>}  
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Root;