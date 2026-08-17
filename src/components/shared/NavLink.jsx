'use client'
import Link from 'next/link';
import {  usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, className}) => {
    const pathname = usePathname();
    

    const isActive = href === pathname ;
    
    return (
        <div>
            <Link href={href} className={`${isActive ? "border-b-2 border-b-[#c920bb]" : ""} ${className}`}>
            {children}
            </Link>
        </div>
    );
};

export default NavLink;