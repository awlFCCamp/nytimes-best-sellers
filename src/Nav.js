import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav(){
    return (
        <nav className='nav-bar'>
            <div>
                <h3 className='text-gray-700 sm:text-base md:text-xl lg:text-2xl'>NYtimes Best Seller Lists <span className='text-gray-500 sm:text-xs md:text-sm lg:text-base'>Current Week</span></h3>
            </div>
            <ul className='nav-links'>
              <li className='text-gray-700 sm:text-base md:text-lg lg:text-xl'> <Link to='/' className='link'>Fiction</Link></li>
                <li className='text-gray-700 sm:text-base md:text-lg lg:text-xl'><Link to='/nonfiction' className='link'>Non Fiction</Link></li>
               <li className='text-gray-700 sm:text-base md:text-lg lg:text-xl'> <Link to='/children' className='link'>Children</Link></li>
                <li className='text-gray-700 sm:text-base md:text-lg lg:text-xl'><Link to='/youngadult' className='link'>Young Adult</Link></li>
            </ul>
        </nav>
    )
}

export default Nav