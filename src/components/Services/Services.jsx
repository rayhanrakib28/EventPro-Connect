import React from 'react';
import ServicesCard from './ServicesCard';

const Services = ({ dataload }) => {

    return (
        <div className='container mx-auto'>
            <div className='pt-20 pb-10'>
                <h1 className='text-6xl font-semibold capitalize text-center my-5'>Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#da35a3] to-[#045bdd]'>Events</span></h1>
                <h3 className='text-lg md:text-xl text-gray-600 text-center'>Seamless Solutions for Exceptional Office Events.</h3>
            </div>
            <div>

                

                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center px-10 lg:px-0'>
                    {
                        dataload?.map(service=><ServicesCard key={service.id} service={service}></ServicesCard> )
                    }
                </div>






            </div>
        </div>
    );
};

export default Services;