// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {


  return (
    <nav className='flex h-11 items-center' style={props.Style}>
      <div className='logo text-2xl mr-5 ml-2'>
        <h1 className='hover:cursor-pointer'>{props.title}</h1>
      </div>
      <div className='options flex list-none ml-4 font-normal text-[20px]'>
        <a className='mr-5 mt-1 hover:underline cursor-pointer' href="#" >Home</a>
        {/* <a className='mr-5 mt-1 hover:underline cursor-pointer' href="/about">About</a> */}
        {/* <li className='mr-5 mt-1 hover:underline cursor-pointer'>Contact</li> */}
      </div>
      <div className="search ml-[600px]">
        <input type="text" placeholder='Search' className='rounded-md border-2 pl-2 h-8' />
        <button className=' w-[60px] h-8 text-[#1D764E] rounded ml-2 text-sm border-[0.8px] border-[#1D764E] hover:bg-[#1D764E] hover:text-white cursor-pointer'>Search</button>
      </div>
      {/* <div className="form-check form-switch ml-5 w-4">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} style={props.Style}/>
      </div> */}
      <div className="relative w-7 h-7 rounded-full overflow-hidden border-[2px] border-white mx-2 cursor-pointer" onClick={props.DarkMode}>
  <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-500"></div>
  <div className="absolute top-0 right-0 w-1/2 h-full bg-black"></div>
</div>
      <div className="relative w-7 h-7 rounded-full overflow-hidden border-[2px] border-white mx-1 cursor-pointer"  onClick={props.GreenMode}>
  <div className="absolute top-0 left-0 w-1/2 h-full bg-green-700"></div>
  <div className="absolute top-0 right-0 w-1/2 h-full bg-black"></div>
</div>
      <div className="relative w-7 h-7 rounded-full overflow-hidden border-[2px] border-white mx-1 cursor-pointer"  onClick={props.BlueMode}>
  <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-700"></div>
  <div className="absolute top-0 right-0 w-1/2 h-full bg-black"></div>
</div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode:PropTypes.string.isRequired,
  DarkMode:PropTypes,
  GreenMode:PropTypes,
  BlueMode:PropTypes,
  Style:PropTypes,
};
