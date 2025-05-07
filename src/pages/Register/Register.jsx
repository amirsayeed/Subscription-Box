import React, { useContext, useState} from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {
    const {signUp,googleSignIn,setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        //console.log(email,password,name,photo);

        const passRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if(!passRegex.test(password)){
            const msg = 'Password must contain at least one uppercase letter, one lowercase letter and be at least 6 characters long.';
            toast.error(msg);
            return;
        }
        
        signUp(email,password).then(result=>{
            console.log(result.user);
            setUser(result.user);
            toast.success("Registration successful!");
            navigate('/');
        })
        .catch(error=>{
            console.log(error);
            toast.error(error.message);
        })
        
    }

    const handleGoogleLogin = () =>{
        googleSignIn().then(result=>{
            console.log(result.user);
            setUser(result.user);
            toast.success("Registration successful!");
            navigate('/');
        })
        .catch(error=>{
            console.log(error);
            toast(error.message);
        })
    }

    return (
        <div>
        <title>Subscription Box | Register</title>
        <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <h1 className="my-3 text-4xl font-bold text-center">Register</h1>
                
            <form onSubmit={handleRegister} className="fieldset">
                <label className="text-sm">Name</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />

                <label className="text-sm mt-2">Photo URL</label>
                <input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />

                <label className="text-sm mt-2">Email address*</label>
                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required/>
                    
                
                <label className="text-sm mt-2">Password*</label> 
                <div className='relative'>      
                <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    className="input w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                    placeholder="Password" required />
                    <span onClick={() => { setShowPassword(!showPassword) }}
                        className='absolute top-3 right-8'>
                    {
                        showPassword ? <FaEyeSlash size={20}/>: <FaEye size={20}/>
                    }
                    </span>
                </div>

                <p className="my-1 text-sm text-center dark:text-gray-600">Already have an account?
                <Link to='/auth/login' className="hover:underline text-blue-400"> Login</Link>
                </p>
                
                <button type='submit' className="btn btn-primary w-full text-white rounded-md">Register</button>
            </form>
            <div className="mt-2">
                <button onClick={handleGoogleLogin} className="btn w-full bg-primary text-white border-[#e5e5e5]">
                <FcGoogle size={20}/> Login with Google</button>
            </div>
        </div>
        </div>
    );
};

export default Register;