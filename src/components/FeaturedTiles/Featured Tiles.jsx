import { jsondata } from '@/lib/data';
import Link from 'next/link';
import React from 'react';

const FeaturedTiles = async () => {
    const tiles = await jsondata(); 
    const firstFourTiles = tiles.slice(0, 4);    
    
    return (
        
        <div className='grid grid-cols-4 grid-rows-6 gap-4 p-4 h-[600px]'>
            {/* Image 1 - Large */}
            <div className="col-span-2 row-span-4 relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                    src={firstFourTiles[0]?.image} 
                    alt={firstFourTiles[0]?.title}
                    className="border w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                <Link 
                    href={`/tiles/${firstFourTiles[0]?.id}`}
                    className="absolute bottom-4 left-4 bg-[#d81b99] hover:bg-[#b8167a] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                    View Details →
                </Link>
            </div>
            
            {/* Image 2 - Small Top Right */}
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                    src={firstFourTiles[1]?.image} 
                    alt={firstFourTiles[1]?.title}
                    className="border w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                <Link 
                    href={`/tiles/${firstFourTiles[1]?.id}`}
                    className="absolute bottom-3 left-3 bg-[#d81b99] hover:bg-[#b8167a] text-white px-3 py-1 rounded-lg text-xs font-semibold transition-colors"
                >
                    View Details →
                </Link>
            </div>
            
            {/* Image 3 - Large Bottom Left */}
            <div className="col-span-2 row-span-4 relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                    src={firstFourTiles[2]?.image} 
                    alt={firstFourTiles[2]?.title}
                    className="border w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                <Link 
                    href={`/tiles/${firstFourTiles[2]?.id}`}
                    className="absolute bottom-4 left-4 bg-[#d81b99] hover:bg-[#b8167a] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                    View Details →
                </Link>
            </div>
            
            {/* Image 4 - Small Bottom Right */}
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                    src={firstFourTiles[3]?.image} 
                    alt={firstFourTiles[3]?.title}
                    className="border w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                <Link 
                    href={`/tiles/${firstFourTiles[3]?.id}`}
                    className="absolute bottom-3 left-3 bg-[#d81b99] hover:bg-[#b8167a] text-white px-3 py-1 rounded-lg text-xs font-semibold transition-colors"
                >
                    View Details →
                </Link>
            </div>
        </div>
    );
};

export default FeaturedTiles;