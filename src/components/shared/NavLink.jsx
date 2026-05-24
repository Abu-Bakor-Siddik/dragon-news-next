'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({href,children, className}) => {

    const pathname = usePathname();
    console.log(pathname);


    const isActive = href === pathname

    return (
        <div>
            <Link href={href} className={`${isActive ? "border-b-2 border-b-purple-500" : ""} ${className}`}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;