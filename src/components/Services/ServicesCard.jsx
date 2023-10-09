import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { id, name, image, details, price } = service || {};

    return (
        <div key={id} data-aos="fade-up" data-aos-duration="2000" className='my-6'>
            <div className='relative'>
                <img className='w-80 lg:w-[400px] rounded-md' src={image} alt="" />
                <div className='p-4 flex items-center justify-between gap-2 rounded-b-md bg-[#000000af] w-80 lg:w-[400px] absolute bottom-0 left-0'>
                    <div>
                        <h2 className='text-sm lg:text-lg font-medium text-white'>{name}</h2>
                        <h3 className='text-white hidden lg:block lg:text-sm py-2'>{details}</h3>
                        <span className='text-white text-sm lg:text-lg font-bold'>{price}</span>
                    </div>
                    <Link to={`/details/${id}`}>
                    <button className='btn text-xs lg:text-base hover:text-white border-0 hover:bg-gradient-to-r from-[#da35a3] to-[#045bdd]'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;