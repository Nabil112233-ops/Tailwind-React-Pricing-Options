import React from 'react';
import Link from './Link';

const navigation = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Products", path: "/products" },
  { id: 5, name: "Contact", path: "/contact" }
];


const Navbar = () => {
    return (
        <nav className='flex justify-center'>

            {
                navigation.map(route => <Link key={route.id} route={route}></Link>)
            }


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
        </nav>
    );
};

export default Navbar;