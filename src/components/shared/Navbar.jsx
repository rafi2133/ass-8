'use client'
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

import userAvater from "@/assets/user.png"
import { useRouter } from 'next/navigation';


const Navbar = () => {
 const router = useRouter();



    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    console.log(user);

    const nav = <>
        <NavLink href={'/'}>Home</NavLink>
        <NavLink className="mx-4" href={'/tiles'}>All Tiles</NavLink>
        <NavLink href={'/profile'}>My Profile</NavLink>
    </>

    return (
        <div>

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
                    <Link href={'/'} className="btn btn-ghost text-xl">PX-<span className="text-[#d81b99]">Tile</span></Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 font-bold items-center">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    {isPending ? <span className="loading loading-spinner loading-xl"></span> : user ? (<div className=" flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                        <h2 className="text-sm text-gray-500">Hello ,{user.name}</h2>
                        <img
                            src={user.image || userAvater}
                            alt="user"
                            width={60}
                            height={60}
                        />
                        <button onClick={async () => {
                            await authClient.signOut();
                            router.push('/');
                        }} className="btn bg-[#db4899] text-white">Log Out</button>
                    </div>) :

                        (<Link href={'/signin'} className="btn bg-[#db4899] text-white">Log In</Link>)}

                </div>
            </div>
        </div>
    );
};

export default Navbar;