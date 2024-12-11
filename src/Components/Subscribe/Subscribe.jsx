import React from "react";
import { motion } from "framer-motion";
import { fadeup } from "../Services/Services";
import { FaArrowRightLong } from "react-icons/fa6";
const Subscribe = () => {
  return (
    <section className="relative pt-10 pb-20 bg-brandDark" id="contact">
      <div className="container text-center">
        <motion.h2
          variants={fadeup(0.2)}
          initial="hidden"
          whileInView="show"
          className='text-6xl md:text-4xl max-lg:text-2xl relative text-center font-bold mb-8 text-white before:absolute before:content-[""] before:w-32 before:h-[0.5px] before:bg-white before:-bottom-2'
        >
          Subscribe to Our Newsletter
        </motion.h2>
        <motion.div variants={fadeup(0.2)} initial="hidden" whileInView="show">
          <p className="text-white leading-6 max-lg:w-full w-1/2 mx-auto mb-10">
            Subscribe to our newsletters now and stay updated with new products,
            the latest brands and exclusive offers.
          </p>
          <form action="" className="relative w-1/2 mx-auto">
            <input
              type="text"
              className="px-4 py-2 max-lg:w-full relative w-full bg-transparent border-b border-b-gray-500 focus:outline-none text-white"
              placeholder="Your Email Address"
            />
            <span className="absolute text-white top-3 right-3 duration-500 transition-all">
              <FaArrowRightLong />
            </span>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscribe;
