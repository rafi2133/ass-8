import React from 'react';
import Image from 'next/image';
import bg from "../../assets/bg.png"

const Banner = () => {
    return (
        <div className=" ">
            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden ">
            {/* Next.js Image as Background */}
            <Image
                src={bg}
                alt="Background"
                fill
                className="object-cover"
                priority
                quality={100}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            
            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Discover Premium Tiles
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl text-gray-200">
                    Transform your space with our exclusive collection of handcrafted tiles
                </p>
                <button className="bg-[#d81b99] hover:bg-[#b8167a] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Browse Now
                </button>
            </div>
        </div>
        </div>
        
    );
};

export default Banner;