import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className='font-semibold text-2xl text-center'>Login Your Account</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input placeholder:opacity-50" placeholder="Enter your email" />
          <label className="label">Password</label>
          <input type="password" className="input placeholder:opacity-50" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='font-semibold text-center pt-5'>
          Dont’t Have An Account ? <Link className='text-secondary font-semibold' to="/auth/register">Register</Link>
          </p>
        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default Login;