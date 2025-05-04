import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-5 text-center'>Login With</h1>
            <div className='space-y-5 flex flex-col justify-center items-center'>
                <button className='btn w-full btn-outline btn-info'><FcGoogle size={25}/>Login With Google</button>
                <button className='btn w-full btn-outline btn-primary'><FaGithub size={25}/>Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;