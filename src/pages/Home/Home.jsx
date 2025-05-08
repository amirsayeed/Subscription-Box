import React, { useEffect } from 'react';
import SubscriptionServices from '../../components/SubscriptionServices/SubscriptionServices';
import { useLoaderData } from 'react-router';
import Slider from '../../components/Slider/Slider';
import TrustedReviews from '../../components/TrustedReviews/TrustedReviews';
import Queries from '../../components/Queries/Queries';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Home = () => {
    const subsData = useLoaderData();
    //console.log(subsData);
    useEffect(()=>{
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true
          });
    },[])
    
    return (
        <div>
            <title>Subscription Box | Home</title>
            <Slider/>
            <SubscriptionServices subsData={subsData}/>
            <TrustedReviews/>
            <Queries/>
        </div>
    );
};

export default Home;