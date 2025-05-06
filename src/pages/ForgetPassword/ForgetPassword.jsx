import React, { use, useRef } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
const ForgetPassword = () => {
    const {forgetPassword} = use(AuthContext);
    const emailRef = useRef();

    const handleForgetPassword = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        forgetPassword(email).then(()=>{
            toast.info(`A reset password email has been sent to ${email}`);
            setTimeout(()=>{
                window.location.href = 'https://mail.google.com';
            },2000)
            
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <div className='max-w-lg mx-auto my-20 bg-base-200 text-center p-6'>
            <h2 className="text-3xl font-bold">Forget Password</h2>
            <form onSubmit={handleForgetPassword} className='fieldset space-y-2 py-3'>
                <label className='text-sm font-bold'>Email</label>
                <input type="email" name='email' ref={emailRef} placeholder='Your email' className='w-full p-3 border rounded-md dark:border-gray-300 bg-base-100' />
                <button type='submit' className='mx-auto btn btn-primary max-w-40'>Reset Password</button>
            </form>
        </div>
    );
};

export default ForgetPassword;