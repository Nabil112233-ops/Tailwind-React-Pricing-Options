import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigation = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Contact", path: "/contact" }
];


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const links = navigation.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-8'>
            <span className='flex' onClick={() => setOpen(!open)}>
                { open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
                <ul className={`md:hidden absolute duration-1000 
                    ${open ? 'left-14' : '-left-40'} 
                    bg-amber-200`}>
                    {links}
                </ul>
                <h3 className='ml-2.5'>
                    My Navbar
                </h3>
            </span>
            <ul className='md:flex hidden justify-center'>
                {
                    links
                }
            </ul>


            {/* <ul className='flex'>
                {
                    navigation.map(route => <li className='mr-2.5'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}



            {/* <ul className='flex'>
                <li className='mr-2.5'><a href="/blog">Blog</a></li>
                <li className='mr-2.5'><a href="/">Home</a></li>
                <li className='mr-2.5'><a href="/about">About</a></li>
            </ul> */}
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;