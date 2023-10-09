import React from 'react';

const Partnerships = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center mt-20'>
            <h1 className='text-6xl font-semibold capitalize text-center my-5'><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#da35a3] to-[#045bdd]'>Partnership</span> Powerhouse</h1>
            <hr />
            <h3 className='text-lg md:text-xl text-gray-600 text-center my-2'>Navigating Partnerships in the Real Business World</h3>
            <div className='flex flex-col lg:flex-row items-center justify-between container mx-auto'>
                <p className='text-gray-600 text-sm lg:text-base px-5 lg:px-0'>Our commitment to partnerships extends beyond mere transactions. We are dedicated to fostering mutually beneficial relationships that drive innovation, growth, and shared success. With a focus on synergy and shared values, we strive to create lasting connections that stand the test of time.</p>
                <img className='w-fit' src="https://i.ibb.co/L0h1nk3/partners-page-logos.png" alt="" />
            </div>
        </div>
    );
};

export default Partnerships;