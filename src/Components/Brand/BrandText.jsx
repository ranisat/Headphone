import React from 'react'
import { UpdateFollower } from 'react-mouse-follower';
import { fadeup } from '../Services/Services';
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiArrowGoBackFill } from "react-icons/ri";
import { SlEarphones } from "react-icons/sl";
import { FaStarOfDavid } from "react-icons/fa";
import {motion} from 'framer-motion'
const BrandText = () => {
  const data = [
    {
      id:'1',
      icon:'',
      title:'Worldwide Shipping',
      desc:'enjoy free delivery on every order'
    },
    {
      id:'2',
      icon:'',
      title:'money back guarantee',
      desc:'we offer 30-day money back guarantee'
    },
    {
      id:'3',
      icon:'',
      title:'Hassle-Free Warranty',
      desc:'If it isn’t loved at first listen, returns are hassle-free.'
    },
    {
      id:'3',
      icon:'',
      title:'Online Customer Service',
      desc:'Call our expert for help creating your system.'
    }
  ]

  const boxContent = [
    {
      id:'1',
      icon:<LiaShippingFastSolid />,
      title:'Worldwide Shipping',
      desc:'Enjoy free delivery on every order.'
    },
    {
      id:'21',
      icon:<RiArrowGoBackFill/>,
      title:'Money-Back Guarantee',
      desc:'We offer 30-day money back guarantee.'
    },
    {
      id:'3',
      icon:<FaStarOfDavid/>,
      title:'Hassle-Free Warranty',
      desc:'If it isn’t loved at first listen, returns are hassle-free.'
    },
    {
      id:'4',
      icon:<SlEarphones/>,
      title:'Online Customer Service',
      desc:'Call our expert for help creating your system.'
    }
  ]
  return (
    <section className='relative py-20 bg-brandDark' id="about">
      <div className="container bg-[#23475d] py-10 rounded-xl mb-20">
         <div className='text-center'>
         <UpdateFollower
         mouseOptions={{
          backgroundColor:'black',
          zIndex:9999,
          followSpeed:0.5,
          mixBlendMode:'screen',
          scale:5
         }}>
         <motion.h1 
         variants={fadeup(0.4)}
         initial="hidden"
         whileInView="show"
         className='text-6xl max-lg:text-3xl text-white font-poppins leading-normal'>Headphones With Good Quality And Affordable Price</motion.h1>
         </UpdateFollower>
         </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
         {boxContent.map((data)=>(
          
          <motion.div
          variants={fadeup(0.2)}
          initial="hidden"
          whileInView="show" 
          key={data.id} className='text-center overflow-hidden px-6 py-10 odd:bg-[#8b5958] even:bg-cyan-800 transition-all duration-500 hover:scale-[1.1] border-transparent border hover:border-gray-400'>
            <div className='w-14 h-14 bg-white rounded-full flex justify-center mx-auto place-items-center'>
            <h1 className='text-center inline-block text-4xl font-bold'>{data.icon}</h1>
            </div>
            <div className="mt-5">
               <h2 className='font-bold uppercase text-white text-2xl max-lg:text-xl mb-5'>{data.title}</h2>
               <p className='leading-6 text-white'>{data.desc}</p>
            </div>
          </motion.div>
         ))}
         </div>
    </section>
  )
}

export default BrandText
