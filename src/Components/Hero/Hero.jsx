import React, { act, useState } from "react";
import Headphone1 from "../../assets/headphone-1.png";
import Headphone2 from "../../assets/headphone-2.png";
import Headphone3 from "../../assets/headphone-3.png";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { IoMusicalNotes } from "react-icons/io5";
import { IoWifiSharp } from "react-icons/io5";
import { FaCloudRain } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";


const fadeup = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};
const Hero = () => {
  const HeadData = [
    {
      id: "1",
      image: Headphone1,
      title: "headphones wireless",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid nobis facere id neque voluptatibus sequi nam repellat nesciunt dolores cum ratione.",
      price: "2400",
      modal: "Modal Brown",
      bgColor: "#8b5958",
    },
    {
      id: "2",
      image: Headphone2,
      title: "headphones wireless 2",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid nobis facere id neque voluptatibus sequi nam repellat nesciunt dolores cum ration.",
      price: "2400",
      modal: "Lime Green",
      bgColor: "#638153",
    },
    {
      id: "3",
      image: Headphone3,
      title: "headphones wireless 3",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid nobis facere id neque voluptatibus sequi nam repellat nesciunt dolores cum ratione.",
      price: "2400",
      modal: "Ocean Blue",
      bgColor: "#5d818c",
    },
  ];

   const listData = [
    {
      id:'1',
      name:'Whole room music',
      icon:<IoMusicalNotes/>
    },
    {
      id:'2',
      name:'Wifi & Bluetooth',
      icon:<IoWifiSharp/>
    },
    {
      id:'3',
      name:'Waterproof',
      icon:<FaCloudRain/>
    },
    {
      id:'4',
      name:'hours time of play',
      icon:<IoIosTimer/>
    },
   ]
  const [activeData, setActiveData] = useState(HeadData[0]);
  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <section className="bg-brandDark text-white font-poppins pt-20" id="home">
      <div className="container grid grid-cols-2 max-lg:grid-cols-1 min-h-[600px]">
        {/* Headphone Info */}
        <div className="flex flex-col justify-center py-10 md:py-0 xl:max-w-[500px] mb-10">
          <div className="space-y-5 text-center md:text-left">
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 0.5,
                  rotate: -720,
                  mixBlendMode: "difference",
                  scale: 6,
                }}
              >
                <motion.h1
                  key={activeData.id}
                  variants={fadeup(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-3xl lg:text-6xl font-bold font-poppins capitalize"
                >
                  {activeData.title}
                </motion.h1>
              </UpdateFollower>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeData.id}
                variants={fadeup(0.3)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-sm leading-loose text-white/80"
              >
                {activeData.subtitle}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: activeData.bgColor,
                  zIndex: 999,
                  followSpeed: 0.5,
                  rotate: -720,
                  mixBlendMode: "difference",
                  scale: 5,
                  backgroundElement: (
                    <div>
                      <img src={activeData.image} />
                    </div>
                  ),
                }}
              >
                <div className="mb-5">
                  <motion.button
                    key={activeData.id}
                    variants={fadeup(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      backgroundColor: activeData.bgColor,
                    }}
                    className="px-4 py-2 mb-10 inline-block font-semibold rounded-full shadow-xl shadow-black/30 uppercase "
                  >
                    Buy and Listen
                  </motion.button>
                </div>
              </UpdateFollower>
            </AnimatePresence>
            {/*----- Headphone List Separator ----- */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-24">
              <div className="w-20 h-[1px] bg-white"></div>
              <div>
                <p className="uppercase text-sm">Top Headphones for you</p>
              </div>
              <div className="w-20 h-[1px] bg-white"></div>
            </div>
            {/* ----- Headphone Switcher --- */}
            <div className="grid grid-cols-3 gap-10">
              {HeadData.map((item) => (
               <UpdateFollower
               mouseOptions={{
                backgroundColor:item.bgColor,
                zIndex:999,
                followSpeed:0.5,
                scale:4,
                text:'View Details',
                textFontSize:'2px'
               }}>
                 <div
                  key={item.id}
                  onClick={() => handleActiveData(item)}
                  className="grid grid-cols-2 place-items-center cursor-pointer"
                >
                  <div className="mr-2">
                    <img src={item.image} alt="" className="w-[200px] " />
                  </div>
                  <div className="space-y-2">
                    <p className="text-base font-bold">{item.price}</p>
                    <p className="text-xs font-normal text-nowrap">
                      {item.modal}
                    </p>
                  </div>
                </div>
               </UpdateFollower>
              ))}
            </div>
          </div>
        </div>
        {/* ----     HeroImg Section      ----- */}
        <div className="flex flex-col justify-end items-center relative">
          <AnimatePresence>
            <motion.img
              key={activeData.id}
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              variants={fadeup(0.4)}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 100,
                transition: {
                  duration: 0.4,
                  delay: 0.2,
                  ease: easeInOut,
                },
              }}
              transition={{ duration: 0.5 }}
              src={activeData.image}
              alt="hero image"
              className="w-[300px] md:w-[400px] xl:w-[500px] z-20"
            />
            <div className="absolute w-96 h-96 bg-gray-600 z-10 rounded-full opacity-40"></div>
            <div className="absolute w-44 h-96 z-20 -right-16 max-lg:-right-10">
              {
                listData.map((item)=>(
                  <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 100 }}
                  variants={fadeup(0.4)}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    y: 100,
                    transition: {
                      duration: 0.4,
                      delay: 0.2,
                      ease: easeInOut,
                    },
                  }}
                  transition={{ duration: 0.5 }}
                  key={item.id} className="flex  items-center gap-2 rounded-full mb-5 bg-[#23475d] py-1.5 px-3">
                  <div className="bg-white text-sm rounded-full w-6 h-6 flex items-center justify-center text-black">{item.icon} 
                  </div>
                  <span className="text-[10px] text-wrap font-semibold capitalize font-poppins">{item.name}</span>
                 </motion.div>
                ))
              }

            </div>
          </AnimatePresence>
        </div>
        {/*-------  Whatsapp icon   --------*/}
        <div className="text-3xl text-white fixed bottom-0 right-10 hover:rotate-[360deg] duration-500 z-20 mix-blend-difference">
          <a href="">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
