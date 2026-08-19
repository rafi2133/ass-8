import { jsondata } from "@/lib/data";
import Link from "next/link";
import {Input} from "@heroui/react";



const AllTilesPage = async () => {

    const tiles = await jsondata();

    return (
        <div className="">
            <div className="m-4 p-4 border-b-2 flex justify-between">
             <div>
                <h2 className="font-bold text-2xl">
                   
                    <span className="text-[#d81b99]">Complete Your Desires With Us</span>
                </h2>
                <p className="text-gray-500 text-sm mt-1">Discover the perfect tiles for every space</p>
             </div>

                <div className="">
                    <span>
                        <Input aria-label="Name" className="w-64" placeholder="Search For Your Choice" />
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
                {
                    tiles.map(tile => {
                        return (
                            <div className="group relative" key={tile.id}>
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden h-80">
                                        <img
                                            src={tile.image}
                                            alt={tile.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"

                                        />

                                        {/* Overlay on Hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>

                                        {/* Stock Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg ${tile.inStock
                                                    ? 'bg-emerald-500 text-white'
                                                    : 'bg-rose-500 text-white'
                                                }`}>
                                                {tile.inStock ? '● In Stock' : '● Out of Stock'}
                                            </span>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full shadow-lg">
                                                {tile.category}
                                            </span>
                                        </div>

                                        {/* Quick View Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">

                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h2 className="font-bold text-xl text-gray-800 line-clamp-1 group-hover:text-[#d81b99] transition-colors">
                                                    {tile.title}
                                                </h2>
                                                <div className="flex items-center gap-2 mt-1">


                                                </div>
                                            </div>
                                            <div className="bg-[#d81b99]/10 px-3 py-1.5 rounded-xl">
                                                <span className="text-xl font-bold text-[#d81b99]">
                                                    {tile.price}
                                                </span>
                                                <span className="text-[#d81b99] text-sm font-semibold">
                                                    {tile.currency}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                                            {tile.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                                    </svg>
                                                    {tile.dimensions}
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                    </svg>
                                                    {tile.material}
                                                </div>
                                            </div>
                                            <Link href={`/tiles/${tile.id}`}>
                                                <button className="bg-gradient-to-r from-[#d81b99] to-[#b8167a] hover:shadow-lg text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[#d81b99]/25 flex items-center gap-2">
                                                    See Details
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>


        </div>

    );
};

export default AllTilesPage;