import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { toast } from 'react-toastify';

const ContactUs = () => {
    
    return (
        <div className="min-h-screen flex items-center justify-center dark:bg-gray-100 dark:text-gray-900">
            <div className="grid max-w-7xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex flex-col border p-2 rounded-2xl max-w-64 items-center justify-center gap-3">
                            <span><ImLocation2 size={25}/></span>
                            <span className='text-center'>House 123, Road 4, Dhanmondi, Dhaka 1209, Bangladesh</span>
                        </div>
                        <div className="flex flex-col border p-2 rounded-2xl max-w-64 items-center justify-center gap-3">
                            <span><FaPhoneAlt size={25}/></span>
                            <span className='text-center'>+880 1711-123456</span>
                            <span className='text-center'>+880 2-9123456</span>
                        </div>
                        <p className="flex flex-col border p-2 rounded-2xl max-w-64 items-center justify-center gap-3">
                            <span><MdEmail size={25} /></span>
                            <span className='text-center'>subscribe@business.com</span>
                        </p>
                    </div>
                </div>
                <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label>Full name</label>
                        <input type="text" placeholder="Leroy Jenkins" className="p-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-base-100" required />
                    
                    <label className="mt-2">Email address</label>
                        <input type="email" placeholder="leroy@jenkins.com" className="p-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-base-100" required/>
                    
                    <label className="mt-2">Message</label>
                        <textarea rows="4" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-base-100"></textarea>
                    
                    <button onClick={()=>toast.success('Form submitted successfully.')} type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;