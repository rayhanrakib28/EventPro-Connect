import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center bg-red-500 min-h-screen'>
            <div className='text-center'>
                <h1 className='text-9xl my-6 text-white font-bold'>4<span className='text-[110px]'>🙄</span>4</h1>
                <h2 className='text-5xl my-2 uppercase text-gray-200'>Page Not Found</h2>
                <Link to="/">{<button className="btn text-xl my-4 bg-red-400 text-white hover:bg-red-500 hover:text-white">Back To Home</button>}</Link>
            </div>
        </div>
    );
};

export default ErrorPage;