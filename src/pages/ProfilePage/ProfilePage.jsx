import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ProfilePage = () => {
    const {user,updateDetails,setUser} = use(AuthContext);

    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;

        const updateInfo ={
            displayName: name,
            photoURL: photourl
        }
        
        updateDetails(updateInfo).then(()=>{
            setUser({...user,...updateInfo});
            toast.success("Profile updated successfully!");
        })
        .catch(error=>{
            toast.error(error);
        })
    }

    return (
        <div>
            <title>Subscription Box | Profile</title>
            <div className="min-h-screen flex items-center justify-center dark:bg-gray-100 dark:text-gray-900">
            <div className="flex-1 grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-5xl font-bold">Profile Details</h1>
                    <p className="pt-2 pb-4 text-lg">Fill in the form to update details</p>
                    <div className="space-y-3 flex flex-col">
                        {user?.photoURL ? (<div><img className='w-20 h-20 rounded-full' src={user.photoURL} alt="" /></div>) : (<div><FaUserCircle size={50} /></div>)}
                        <p className='text-lg font-medium'>Name : {user?.displayName ? user?.displayName : ''}</p>
                        <p className='text-lg font-medium'>Email : {user.email}</p>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleUpdate} className="flex flex-col py-6 space-y-3 md:py-0 md:px-6">
                        <label className="text-sm font-medium"><span>Full name</span></label>
                        <input type="text" name='name' placeholder="Leroy Jenkins" className="w-full rounded-md shadow-sm p-2 bg-base-100" />
                        
                        <label className="text-sm mt-2 font-medium"><span>Photo URL</span></label>
                        <input type="text" name='photourl' placeholder="Enter photo url" className="p-2 w-full rounded-md shadow-sm bg-base-100" />
                        
                        <button type="submit" className="mt-2 self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProfilePage;