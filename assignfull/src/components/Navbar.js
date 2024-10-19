import React from 'react';
import LOGO from "../assets/logo.png";
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <header className="text-gray-600 body-font ">
            <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer ">
                    <img src={LOGO} className='w-32' alt="cuvette Logo..." />
                </a>
                <button className="inline-flex items-cente border-0 py-1 px-3 f rounded text-base mt-4 md:mt-0">Contact
                </button>
            </div>
        </header> 
    )
}

export default Navbar
