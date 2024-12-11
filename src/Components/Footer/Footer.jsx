import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    <section className='relative pt-20 pb-10 bg-black/100 text-white'>
      <div className="container ">
         <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-10">
         <div>
            <a href="#home"
              className="text-2xl font-bold uppercase flex items-center gap-2" ><span>Playing</span>
            </a>
            <p className='text-sm leading-6 mt-4'>We’ve curated the world’s finest headphones & earphones to help you discover the riffs, percussions, basslines and solos that were always there but never heard.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold uppercase flex items-center gap-2">Quick Links</h2>
            <div className="flex items-center justify-between mt-4">
               <ul>
                <li className='mb-2'>
                  <a href="" className='text-[16px] font-semibold'>Home</a>
                </li>
                <li className='mb-2'>
                  <a href="" className='text-[16px] font-semibold'>About</a>
                </li>
                <li className='mb-2'>
                  <a href="" className='text-[16px] font-semibold'>Info</a>
                </li>
                <li className='mb-2'>
                  <a href="" className='text-[16px] font-semibold'>Contact</a>
                </li>
               </ul>
               <ul>
                <li className='mb-2'>
                  <a href="" className='text-[16px] font-semibold'>Services</a>
                </li>
                <li className='mb-2'>
                  <a href="" className='text-[16px] font-semibold'>Info</a>
                </li>
                <li className='mb-2'>
                  <a href="" className='text-[16px] font-semibold'>Terms & Conditions</a>
                </li>
                <li className='mb-2'>
                  <a href="" className='text-[16px] font-semibold'>Privacy Policy</a>
                </li>
               </ul>
            </div>
          </div>
          <div>
          <h2 className="text-2xl font-bold uppercase flex items-center gap-2">Follow Links</h2>
          <ul className='flex items-center justify-start gap-6 mt-4'>
                <li className='mb-2'>
                  <a href="" className='text-2xl font-semibold'>
                    <FaWhatsapp/>
                  </a>
                </li>
                <li className='mb-2'>
                  <a href="" className='text-2xl font-semibold'>
                    <CiLinkedin/>
                  </a>
                </li>
                <li className='mb-2'>
                  <a href="" className='text-2xl font-semibold'>
                    <CiYoutube/>
                  </a>
                </li>
                <li className='mb-2'>
                  <a href="" className='text-2xl font-semibold'>
                    <CiInstagram/>
                  </a>
                </li>
               </ul>
          </div>
         </div>
         <div className='border-t border-t-gray-300 pt-5'>
          <p className='text-sm  text-center text-white'>&copy; copyright all right reserved.</p>
         </div>
      </div>
    </section>
  )
}

export default Footer
