import { jsondata } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaDollarSign } from 'react-icons/fa';

const TilesDetailsPage = async ({ params }) => {
    const { id } = await params;
    const tiles = await jsondata();
    const tile = tiles.find((t) => t.id === id);

    if (!tile) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            
           

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Image */}
                <div className="relative h-96 w-full">
                    <img
                        src={tile.image}
                        alt={tile.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Details */}
                <div className="p-6">
                    {/* Title & Price */}
                    <div className="flex justify-between items-start mb-4">
                        <h1 className="text-2xl font-bold text-gray-800">
                            {tile.title}
                        </h1>
                        <div className="flex items-center bg-[#d81b99]/10 px-3 py-1.5 rounded-full">
                            <span className="text-xl font-bold text-[#d81b99]">
                                {tile.price}
                            </span>
                            <FaDollarSign className="text-[#d81b99] ml-0.5" />
                        </div>
                    </div>

                    {/* Description - 1-2 lines */}
                    <p className="text-gray-600 text-sm mb-4">
                        {tile.description}
                    </p>

                    
                    <div className="flex flex-wrap gap-3 mb-4">
                        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                            📐 {tile.dimensions}
                        </span>
                        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                            🏷️ {tile.material}
                        </span>
                        <span className={`text-xs px-3 py-1 rounded-full ${
                            tile.inStock 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-red-100 text-red-700'
                        }`}>
                            {tile.inStock ? '✅ In Stock' : '❌ Out of Stock'}
                        </span>
                    </div>

                   
                    <div className="text-right">
                        <Link href="/tiles">
                        <button className="flex-1 bg-[#d81b99] hover:bg-[#b8167a] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors">
                            ← Back to all tiles
                        </button>  
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TilesDetailsPage;