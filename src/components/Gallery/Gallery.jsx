import React from 'react';
import GalleryCard from './GalleryCard';

const Gallery = ({ dataload }) => {
    return (
        <div className='container mx-auto mt-32 py-10'>
            <h1 className='text-5xl font-bold capitalize text-white text-center my-5'><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#da35a3] to-[#045bdd]'>Event Excellence </span>Showcase</h1>
            <h2 className='text-xl font-medium capitalize text-gray-300 text-center my-5'>Where Corporate Excellence Meets Exceptional Events</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-5 justify-items-center px-10 lg:px-0'>
            {
                dataload?.map(data=> <GalleryCard key={data.id} data={data}></GalleryCard> )
            }
        </div>
        </div>
    );
};

export default Gallery;