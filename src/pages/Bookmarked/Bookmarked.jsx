import React, { useEffect, useState } from 'react';
import BookmarkedCard from './BookmarkedCard';

const Bookmarked = () => {
    const [isShowAll,setIsShowAll]=useState(false)
    const [saved, setSaved] = useState([]);
    const [noData, setNoData] = useState(false);

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem("bookmarked"));
        if (savedItems) {
            setSaved(savedItems);
        } else {
            setNoData("Explore Our Events & Enroll Now to Unlock a World of Corporate Event Possibilities!")
        }
    },[])

    return (
        <div>
            {
                noData ? (<div className='bg-black h-[90vh] flex items-center justify-center p-10'><h1 className='w-1/2 text-3xl text-white text-center font-medium'>{noData}</h1></div> ) :
                    (
                        <div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center px-6 lg:px-0'>
                                {
                                    isShowAll ? saved.map((bookmarked) => (
                                        <BookmarkedCard key={bookmarked.id} bookmarked={bookmarked}></BookmarkedCard>
                                    ))

                                        : saved.slice(0, 3).map((bookmarked) => (
                                            <BookmarkedCard key={bookmarked.id} bookmarked={bookmarked}></BookmarkedCard>
                                        ))
                                }
                            </div>
                            {
                                saved.length > 3 && <button onClick={() => setIsShowAll(!isShowAll)} className="mt-8 px-10 py-2 text-lg font-semibold text-white bg-green-600 rounded-md block mx-auto">
                                    See All
                                </button>
                            }
                        </div>
                    )
            }
        </div>
    );
};

export default Bookmarked;