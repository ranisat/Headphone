import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const navbarMenu = [
    {
      id: "1",
      title: "home",
      link: "#home",
    },
    {
      id: "2",
      title: "Services",
      link: "#services",
    },
    {
      id: "3",
      title: "Info",
      link: "#info",
    },
    {
      id: "4",
      title: "about",
      link: "#about",
    },
    {
      id: "5",
      title: "contact",
      link: "#contact",
    },
  ];

  const [isOpen, setIsopen] = useState(false)
  return (
    <>
      <div className="bg-brandDark text-white font-poppins fixed w-full z-50">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{duration:1, delay:0.5}}
          className="container flex items-center justify-between py-4"
        >
          {/* logo section */}
          <div>
            <a
              href=""
              className="text-xl font-bold uppercase flex items-center gap-2"
            >
              {" "}
              <span>Playing</span>{" "}
              <span className="font-extralight text-white/70">
              / Market
              </span>
            </a>
          </div>
          {/* menu section */}
          <div className="max-lg:hidden md:block">
            <ul className="flex items-center gap-6">
              {navbarMenu.map((item) => (
                <li key={item.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      followSpeed: 1.5,
                      scale:3,
                      mixBlendMode: "difference",
                    }}
                  >
                    <a
                      href={item.link}
                      className="inline-block text-sm py-2 px-3 uppercase"
                    >
                      {item.title}
                    </a>
                  </UpdateFollower>
                </li>
              ))}
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <button className="text-xl ps-14">
                  <SlEarphones />
                </button>
              </UpdateFollower>
            </ul>
          </div>
          {/* Mobile Section menu  */}

         {isOpen ? (
           <div className="max-lg:block hidden ">
           <ul className="flex flex-col items-center gap-4 absolute left-0 bg-black z-30 top-0 h-screen py-20 px-10">
             {navbarMenu.map((item) => (
               <li key={item.id}>
                 <UpdateFollower
                   mouseOptions={{
                     backgroundColor: "white",
                     zIndex: 999,
                     followSpeed: 1.5,
                     scale:3,
                     mixBlendMode: "difference",
                   }}
                 >
                   <a
                     href={item.link}
                     className="inline-block text-sm py-2 px-3 uppercase"
                   >
                     {item.title}
                   </a>
                 </UpdateFollower>
               </li>
             ))}
             <UpdateFollower
               mouseOptions={{
                 backgroundColor: "white",
                 zIndex: 999,
                 followSpeed: 1.5,
                 scale: 5,
                 mixBlendMode: "difference",
               }}
             >
             </UpdateFollower>
           </ul>
         </div>
         ) : ''}
          <div className="hidden max-sm:block" onClick={()=>setIsopen(!isOpen)}>
            {isOpen ? <IoCloseSharp className="text-4xl " /> : <IoIosMenu className="text-4xl "/>}
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;
