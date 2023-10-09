import React from 'react';

const GalleryCard = ({ data }) => {
    const { id, image, name } = data || {};
    return (
        <div key={id} data-aos="fade-up" data-aos-duration="2000" className='my-6'>
            <div className='relative'>
                <img className='w-60 lg:w-[400px] rounded-md' src={image} alt="" />
                <div className='p-4 flex justify-center items-center gap-2 rounded-b-md bg-[#000000af] h-full w-60 lg:w-[400px] absolute bottom-0 left-0'>
                    <div>
                        <h2 className='text-sm lg:text-lg font-medium text-white'>{name}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;