import React from 'react';
import Navbar from './Navbar';

const Link = ({route}) => {
    return (
        <ul>
            <li className='mr-4'><a href={route.path}>{route.name}</a></li>
        </ul>
    );
};

export default Link;