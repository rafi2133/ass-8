import { jsondata } from '@/lib/data';
import React from 'react';

const FeaturedTiles = async () => {
    const tiles = await jsondata(); 
    const firstFourTiles = tiles.slice(0, 4);    
    
    return (
        <div className='grid grid-cols-4 grid-rows-6 gap-4 p-4 h-[600px] '>
            {/* Image 1 - Large */}
            <div className="col-span-2 row-span-4 relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                    src={firstFourTiles[0]?.image} 
                    alt={firstFourTiles[0]?.title}
                    className=" border w-full h-full object-cover"
                />
            </div>
            
            {/* Image 2 - Small Top Right */}
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                    src={firstFourTiles[1]?.image} 
                    alt={firstFourTiles[1]?.title}
                    className="border w-full h-full object-cover"
                />
            </div>
            
            {/* Image 3 - Large Bottom Left */}
            <div className="col-span-2 row-span-4 relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                    src={firstFourTiles[2]?.image} 
                    alt={firstFourTiles[2]?.title}
                    className="border w-full h-full object-cover"
                />
            </div>
            
            {/* Image 4 - Small Bottom Right */}
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                    src={firstFourTiles[3]?.image} 
                    alt={firstFourTiles[3]?.title}
                    className="border w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default FeaturedTiles;