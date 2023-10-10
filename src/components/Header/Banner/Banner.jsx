import { TypeAnimation } from "react-type-animation";
import './Banner.css'
const Banner = () => {
    return (
        <div class="bg">
            <div className='container mx-auto py-10'>
            <div className="flex gap-5 h-[90vh] items-center">
                <div className="px-10 my-20 w-full md:w-3/4">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Conferences and Seminars',
                            1000,
                            'Trade Shows and Expos',
                            1000,
                            'Team Building Workshops',
                            1000,
                            'Product Launches Events',
                            1000,
                            'Corporate Meetings',
                            1000,
                            'Award Ceremonies',
                        ]}
                        speed={50}
                        className="text-[12px] md:text-[14px] lg:text-[16px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d050d6] to-[#3e87f5]"
                        repeat={Infinity}
                    />
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold my-2 lg:my-5 text-white">Elevate Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#da35a3] to-[#045bdd]">Corporate Events</span></h1>
                        <p className="text-base lg:text-xl text-gray-200 py-2 ">Discover Seamless Event Planning, Unforgettable Experiences, and Success-Driven Solutions with Our Corporate Event Management Platform. Your Vision, Our Expertise.</p>
                        <button data-aos="fade-right" data-aos-duration="3000" className="btn mt-5 lg:mt-10 px-5 lg:px-8 font-bold hover:text-white border-0 hover:bg-gradient-to-r from-[#da35a3] to-[#045bdd]"><a href="/register">Sign Up Now</a></button>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Banner;