import React from "react";
import BackgroundImg from "../../assets/headphone-3.png";
import { FaSoundcloud } from "react-icons/fa";
import { RiVolumeMuteFill } from "react-icons/ri";
import { MdOutlineTouchApp } from "react-icons/md";
import { CiBatteryCharging } from "react-icons/ci";
import { fadeup } from "../Services/Services";
import { motion } from "framer-motion";

const Brand = () => {
  return (
    <section className="font-poppins bg-black py-10" id="info">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="relative">
            <div>
              <motion.img initial={{opacity:0, x:-100, rotate:-180}}
              animate={{opacity:1, x:0, rotate:0}}
              transition={{duration:0.8, delay:0.2, ease:'easeInOut'}}
              src={BackgroundImg} alt="" className="" />
            </div>
          </div>
          <div className="text-white p-4">
            <motion.h2
              variants={fadeup(0.7)}
              initial="hidden"
              whileInView="show"
              className='text-4xl md:text-3xl relative text-start font-bold before:absolute before:content-[""] before:w-32 before:h-[0.5px] before:bg-white before:-bottom-2 mb-14 text-white'
            >
              Touch & Voice Control
            </motion.h2>
            <motion.div  variants={fadeup(0.9)}
                initial="hidden"
                whileInView="show">
              <p className="text-sm leading-8 text-white tracking-wide mb-10">
                You will never need to use your phone again for control. Air 1
                Plus features 14 different touch controls to easily manage your
                music and calls with a single touch, adjust the volume, or
                access Siri or Google Assistant.
              </p>

              <h2 className="text-white italic underline">
                Fast shipping around the world!
              </h2>
              <div className="flex items-center justify-between mt-10 gap-5">
                <div>
                  <div className="flex  items-center gap-2 rounded-full mb-5 bg-[#23475d] py-1.5 px-3">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-black">
                      <FaSoundcloud className="text-xl" />
                    </div>
                    <span className="text-sm text-wrap font-semibold capitalize">
                      Premium quality audio
                    </span>
                  </div>
                  <div className="flex  items-center gap-2 rounded-full mb-5 bg-[#23475d] py-1.5 px-3">
                    <div className="bg-white text-sm rounded-full w-8 h-8 flex items-center justify-center text-black">
                      <RiVolumeMuteFill className="text-xl" />
                    </div>
                    <span className="text-sm text-wrap font-semibold capitalize">
                      Win noise reduction
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex  items-center gap-2 rounded-full mb-5 bg-[#23475d] py-1.5 px-3">
                    <div className="bg-white text-sm rounded-full w-8 h-8 flex items-center justify-center text-black">
                      <MdOutlineTouchApp className="text-xl" />
                    </div>
                    <span className="text-sm text-wrap font-semibold capitalize">
                      14 Touch commands
                    </span>
                  </div>
                  <div className="flex  items-center gap-2 rounded-full mb-5 bg-[#23475d] py-1.5 px-3">
                    <div className="bg-white text-sm rounded-full w-6 h-6 flex items-center justify-center text-black">
                      <CiBatteryCharging className="text-xl" />
                    </div>
                    <span className="text-sm text-wrap font-semibold capitalize">
                      40 Hours of Battery
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
