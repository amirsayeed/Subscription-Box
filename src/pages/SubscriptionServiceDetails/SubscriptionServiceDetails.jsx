import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Loading from '../../components/Loading/Loading'
import CustomerReview from '../CustomerReview/CustomerReview';
import SubscriptionServiceDetailsCard from './SubscriptionServiceDetailsCard';
const SubscriptionServiceDetails = () => {

    const {id} = useParams();
    const detailsData = useLoaderData()
    const [serviceInfo, setServiceInfo] = useState();

    useEffect(()=>{
        const serviceDetail = detailsData.find(detail=>detail.id == id);
        setServiceInfo(serviceDetail);
    },[detailsData,id])

    if(!serviceInfo){
        return <Loading/>;
    }

    return (
        <div>
            <title>{`Subscription Box | Details | ${id} `}</title>
            <div className='bg-base-200 pb-10'>
            <div>
                <SubscriptionServiceDetailsCard serviceInfo={serviceInfo}/>
            </div>
            <div className='my-8 space-y-3'>
                <h2 className="text-3xl font-bold text-center">Customer's Review</h2>
                <CustomerReview/>
            </div>
            </div>
        </div>
    );
};

export default SubscriptionServiceDetails;