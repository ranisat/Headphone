import React from "react";
import { GrInsecure } from "react-icons/gr";
import { UpdateFollower } from "react-mouse-follower";
import { MdAdminPanelSettings } from "react-icons/md";
import { motion } from "framer-motion";

export const fadeup = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const Services = () => {
  const serviceData = [
    {
      id: "1",
      title: "Security",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae!",
      icon: <GrInsecure />,
      delay: 0.1,
    },
    {
      id: "2",
      title: "Gurantee",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae!",
      icon: <MdAdminPanelSettings />,
      delay: 0.5,
    },
    {
      id: "3",
      title: "Affordability",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae!",
      icon: <GrInsecure />,
      delay: 1.1,
    },
  ];
  return (
    <section className="bg-brandDark py-20 text-white font-poppins" id="services">
      <div className="container">
        <motion.h2
          variants={fadeup(0.2)}
          initial="hidden"
          whileInView="show"
          className='text-4xl md:text-3xl relative text-center font-bold before:absolute before:content-[""] before:w-32 before:h-[0.5px] before:bg-white before:-bottom-2 mb-14'
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {serviceData.map((data) => (
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                textColor: "black",
                zIndex: 999,
                followSpeed: 0.5,
                rotate: 410,
                mixBlendMode: "difference",
                scale: 4,
                backgroundElement: (
                  <div className="text-sm font-bold  -rotate-45 text-[#d08c60]">
                    {data.icon}
                  </div>
                ),
              }}
            >
              <motion.div
              variants={fadeup(data.delay)}
              initial="hidden"
              whileInView="show"
                key={data.id}
                className="border border-gray-600 hover:border-primary bg-black/80 py-4 px-5 rounded-md text-center shadow-xl shadow-orange-700/20 transition-all duration-500 hover:shadow-2xl mb-10"
              >
                <div className="-mt-5 bg-[#8b5958] text-center border border-primary rounded-md flex items-center justify-center w-24 h-24 mx-auto rotate-45 mb-10 transition-all duration-500 hover:rotate-[360deg]">
                  <motion.span 
                    className="text-5xl font-bold  -rotate-45 text-white"
                  >
                    {data.icon}
                  </motion.span>
                </div>
                <div>
                  <h1 className="text-2xl mb-5 font-semibold">{data.title}</h1>
                  <p className="text-sm leading-6 tracking-wider text-start">
                    {data.desc}
                  </p>
                </div>
              </motion.div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
