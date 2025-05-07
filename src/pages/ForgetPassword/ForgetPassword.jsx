import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';
const ForgetPassword = () => {
    const {forgetPassword} = use(AuthContext);
    const {email} = useParams();

    const handleForgetPassword = e =>{
        e.preventDefault();
        // const email = emailRef.current.value;
        forgetPassword(email).then(()=>{
            toast.info(`A reset password email has been sent to ${email}`);
            setTimeout(()=>{
                window.open('https://mail.google.com', '_blank');
            },2000)
            
        })
        .catch(error=>{
            console.log(error.message);
            toast.error(error.message);
        })
    }

    return (
        <div>
        <title>Subscription Box | Forget Password</title>
        <div className='max-w-lg mx-auto my-20 bg-base-200 text-center p-6'>
            <h2 className="text-3xl font-bold">Forget Password</h2>
            <form onSubmit={handleForgetPassword} className='fieldset space-y-2 py-3'>
                <label className='text-sm font-bold'>Email</label>
                <input type="email" name='email' defaultValue={email} placeholder='Your email' className='w-full p-3 border rounded-md dark:border-gray-300 bg-base-100' />
                <button type='submit' className='mx-auto btn btn-primary max-w-40'>Reset Password</button>
            </form>
        </div>
        </div>
    );
};

export default ForgetPassword;