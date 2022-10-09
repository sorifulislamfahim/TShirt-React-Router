import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navber'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/shop'>Shop</Link>
        </div>
    );
};

export default Header;