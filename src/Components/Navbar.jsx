import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoClose } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import { motion } from "framer-motion"

export default function () {
    const[Icon,setIcon]=new useState(false);
    const togglebar=()=>{
        if (Icon==false) {
            setIcon(true)
        }else{
            setIcon(false)
        }
    }
  return (
    <>
    <nav className='sticky backdrop-blur-lg border-b  border-neutral-700/80 top-0 z-50 py-3 '>
    <div className="container px-4 relative mx-auto text-sm">
        <div className="flex  items-center justify-between">
            <div className="flex items-center flex-shrink-0">
                <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                <span className='text-xl tracking-tight'>VirtualR</span>
            </div>
            <ul className='hidden  ml-14 lg:flex'>
                <a className="mx-3 " href="#">Features</a>
                <a className="mx-3"  href="#">Workflow</a>
                <a className="mx-3"  href="#">Pricing</a>
                <a className="mx-3"  href="#">Testimonials</a>
            </ul>
            <div className="lg:flex hidden items-center justify-center">
                <a href="#" className='py-2 px-3 mx-3 rounded-md  border'>Sign In</a>
                <a href="#" className='py-2 px-5 mx-3 rounded-md  bg-gradient-to-r from-orange-500 to-orange-800'>Create an account</a>
            </div>
            <div className="lg:hidden justify-end   md:flex">
                <button  onClick={togglebar}>{Icon? <IoClose/>: <HiOutlineBars3 /> }</button>
                
            </div>

        </div>
        {Icon && (
            <>
            <div   className="flex z-10  flex-col justify-center items-center lg:hidden gap-10 w-full bg-neutral-900 sticky right-0 p-12">
            
                <a  href="#">Features</a>
                <a   href="#">Workflow</a>
                <a   href="#">Pricing</a>
                <a   href="#">Testimonials</a>

            <div className="lg:hidden  items-center justify-center">
                <a href="#" className='py-2 px-3 mx-3 rounded-md  border'>Sign In</a>
                <a href="#" className='py-2 px-5 mx-3 rounded-md  bg-gradient-to-r from-orange-500 to-orange-800'>Create an account</a>
            </div>
            </div>
            </>
            
        )}

    </div>
    </nav>
    
    </>
    
  )
}
