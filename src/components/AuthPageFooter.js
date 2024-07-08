import React from 'react';
import { Link } from 'react-router-dom';

function AuthPageFooter() {
  return (
    <div>
        <footer className='absolute bottom-1 w-full max-w-screen-2xl left-2/4 px-10 text-xs text-gray-400 -translate-x-2/4 text-center leading-8'>
            <Link to='/' className='hover:text-orange-400 m-5 cursor-pointer'>Home</Link>
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>Big Deals</Link>
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>Offers</Link>
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>Updates</Link>
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>Buy</Link>
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>Order</Link>
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>Delivery Process</Link>
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>Terms & Condition</Link> <br />
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>Services</Link>
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>Company Policy</Link> 
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>Product information</Link>
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>Dealers</Link>
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>Experince</Link>
            <Link to='/OnProcessing' className='hover:text-orange-400 m-5 cursor-pointer'>FAQ</Link>
        </footer>
    </div>
  )
}

export default AuthPageFooter