import Search from '@/components/Search/Search';
import { jsondata } from '@/lib/data';
import Link from 'next/link';

const SearchPage = async ({ searchParams }) => {
    const { q } = await searchParams;
    const tiles = await jsondata();
    
    const searchResults = q 
        ? tiles.filter(tile => 
            tile.title.toLowerCase().includes(q.toLowerCase())
          )
        : [];

    // If no results
    if (q && searchResults.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                {/* Responsive header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <h1 className="text-xl sm:text-2xl font-bold break-words">
                        No results for: <span className="text-[#d81b99]">{q}</span>
                    </h1>
                    <div className="w-full sm:w-auto">
                        <Search />
                    </div>
                </div>
                
                <div className="text-center py-12 sm:py-16">
                    <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                    <p className="text-gray-500 text-sm sm:text-base">Try different search terms</p>
                    <Link href="/tiles" className="text-[#d81b99] hover:underline mt-2 inline-block text-sm sm:text-base">
                        Browse all tiles →
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
            {/* Responsive header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 sm:mb-8">
                <div className="w-full lg:w-auto">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold break-words">
                        {q ? (
                            <>Results for <span className="text-[#d81b99]">{q}</span></>
                        ) : (
                            'Search Tiles'
                        )}
                    </h1>
                    {q && (
                        <p className="text-sm text-gray-500 mt-1">
                            {searchResults.length} tile{searchResults.length !== 1 ? 's' : ''} found
                        </p>
                    )}
                </div>
                <div className="w-full sm:w-auto">
                    <Search />
                </div>
            </div>

            {/* Results grid - responsive */}
            {q ? (
                searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {searchResults.map((tile) => (
                            <Link key={tile.id} href={`/tiles/${tile.id}`}>
                                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                    <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                                        <img 
                                            src={tile.image} 
                                            alt={tile.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                        {!tile.inStock && (
                                            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                Out of Stock
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-3 sm:p-4">
                                        <h3 className="font-semibold text-sm sm:text-base text-gray-800 line-clamp-1">
                                            {tile.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                                            {tile.category}
                                        </p>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-lg sm:text-xl font-bold text-[#d81b99]">
                                                ${tile.price}
                                            </p>
                                            <span className="text-xs text-gray-400 hidden sm:inline">
                                                {tile.dimensions}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 sm:py-16">
                        <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700">No results found</h3>
                        <p className="text-sm sm:text-base text-gray-500 mt-2">Try adjusting your search terms</p>
                    </div>
                )
            ) : (
                <div className="text-center py-12 sm:py-16">
                    <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                    <p className="text-gray-500 text-sm sm:text-base">Enter a search term to find tiles</p>
                </div>
            )}
        </div>
    );
};

export default SearchPage;