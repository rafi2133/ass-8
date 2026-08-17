'use client'
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import NavLink from "./NavLink";


const Navbar = () => {
const [showSearch, setShowSearch] = useState(false);

    const searchHandle = () => {
        setShowSearch(!showSearch);
    }

    const nav = <>
        <NavLink href={'/'}>Home</NavLink>
        <NavLink className="mx-4" href={'/tiles'}>All Tiles</NavLink>
        <NavLink href={'/profile'}>My Profile</NavLink>
    </>

    return (
        <div>
            {showSearch && (
                <div className="container mx-auto px-4 py-3">
                    <label className="input input-bordered flex items-center gap-2 w-full max-w-md mx-auto">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input 
                            type="search" 
                            placeholder="Search tiles..." 
                            className="w-full"
                            autoFocus
                        />
                        <button 
                            onClick={() => setShowSearch(false)} 
                            className="btn btn-ghost btn-xs"
                        >
                            ✕
                        </button>
                    </label>
                </div>
            )}
            
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown  md:hidden ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow font-bold text-center">
                            {nav}
                        </ul>
                    </div>
                    <Link href={'/'} className="btn btn-ghost text-xl">PX-Tile</Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 font-bold items-center">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <button className="cursor-pointer" onClick={searchHandle}>
                        <FaSearch />
                    </button>
                    <Link href={'/signin'} className="btn bg-[#db4899] text-white">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;