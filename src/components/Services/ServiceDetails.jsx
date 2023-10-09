import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ServiceDetails = ({ service }) => {
    const { id, name, cover, description, details, price, where, when } = service || {};

    const handleBookmark = () => {
        const savedBookmarkArray = [];
        const saved = JSON.parse(localStorage.getItem("bookmarked"));
        if (!saved) {
            savedBookmarkArray.push(service);
            localStorage.setItem("bookmarked", JSON.stringify(savedBookmarkArray));
            toast.success("Bookmark Saved ❤")
        } else {
            const isExist = saved.find((bookmarked) => bookmarked.id === id);
            if (!isExist) {
                savedBookmarkArray.push(...saved, service);
                localStorage.setItem("bookmarked", JSON.stringify(savedBookmarkArray));
                toast.success("Bookmark Saved ❤")
            } else {
                toast.error("Already Bookmarked.")
            }
        }
    }



    return (
        <div key={id} className="bg-black text-white py-20 min-h-screen">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-items-center gap-2">
                <Toaster />
                <div className="w-2/3">
                    <img className="rounded-lg w-full" src={cover} alt="" />
                    <h1 className="my-10 text-2xl md:text-4xl font-semibold">{name}</h1>
                    <h3 className="text-gray-300 text-lg md:text-2xl mb-4">Event Description</h3>
                    <p className="text-gray-400 text-base md:text-xl">{description}</p>

                </div>
                <div className="w-2/3 lg:w-1/3 mt-5 lg:mt-0">
                    <div className="bg-gradient-to-bl from-[#491137] to-[#022b68] rounded-lg p-5">
                        <h2 className="text-center font-semibold text-xl md:text-3xl mb-6">Event Details</h2>
                        <div className="flex items-center gap-4 justify-between justify-items-center">
                            <span className="text-xs md:text-base">Short Description</span>
                            <h3 className="text-xs md:text-base text-end">{details}</h3>
                        </div>
                        <div className="flex items-center gap-4 justify-between justify-items-center mt-6">
                            <span className="text-xs md:text-base">Where</span>
                            <h3 className="text-xs md:text-base text-end">{where}</h3>
                        </div>
                        <div className="flex items-center gap-4 justify-between justify-items-center mt-5">
                            <span className="text-xs md:text-base">When</span>
                            <h3 className="text-xs md:text-base text-end">{when}</h3>
                        </div>
                        <div className="flex items-center gap-4 justify-between justify-items-center mt-5">
                            <span className="text-xs md:text-base">Price</span>
                            <h3 className="text-xs md:text-base text-end">{price}</h3>
                        </div>
                        <div className="mt-20 text-center">
                            <button onClick={handleBookmark} className="text-center font-semibold text-base w-1/2 bg-white text-black rounded-md py-2 px-4 md:text-xl mb-4">Save Bookmarked</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;