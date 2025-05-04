import React from 'react';
import { Link } from 'react-router';

const Registration = () => {
    return (
       <div className='flex justify-center min-h-screen items-center'>
                   <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                       <h1 className='font-semibold text-2xl text-center'>Register Your Account</h1>
             <div className="card-body">
               <fieldset className="fieldset">
                 <label className="label text-black font-medium">Your Name</label>
                 <input type="text" className="input placeholder:opacity-50" placeholder="Enter Your Name" />
                 <label className="label text-black font-medium">Image URL</label>
                 <input type="text" className="input placeholder:opacity-50" placeholder="Enter Image URL" />
                 <label className="label text-black font-medium">Email</label>
                 <input type="email" className="input placeholder:opacity-50" placeholder="Enter your email address" />
                 <label className="label text-black font-medium">Password</label>
                 <input type="password" className="input placeholder:opacity-50" placeholder="Password" />
                 
                 <button className="btn btn-neutral mt-4">Register</button>
                 <p className='font-semibold text-center pt-5'>
                 Already Have An Account ? <Link className='text-secondary font-semibold' to="/auth/login">Login</Link>
                 </p>
               </fieldset>
             </div>
           </div>
               </div>
    );
};

export default Registration;