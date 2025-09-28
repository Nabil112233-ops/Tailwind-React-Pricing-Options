import React from 'react';
import Navbar from './Navbar';

const Link = ({route}) => {
    return (
        <ul className='hover:bg-blue-400 md:p-2'>
            <li className=''><a href={route.path}>{route.name}</a></li>
        </ul>
    );
};

export default Link;