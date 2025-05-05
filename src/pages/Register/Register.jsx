import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {signUp,googleSignIn} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        //console.log(email,password,name,photo);
        // signUp(email,password).then(result=>{
        //     console.log(result.user);
        // })
        // .catch(error=>{
        //     console.log(error);
        // })
        
    }

    const handleGoogleLogin = () =>{
        googleSignIn().then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <h1 className="my-3 text-4xl font-bold text-center">Register</h1>
                
            <form onSubmit={handleRegister} className="fieldset">
                <label className="text-sm">Name</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />

                <label className="text-sm mt-2">Photo URL</label>
                <input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />

                <label className="text-sm mt-2">Email address</label>
                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    
                <label className="text-sm mt-2">Password</label>       
                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
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
    );
};

export default Register;