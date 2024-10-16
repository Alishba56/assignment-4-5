"use client";
import React, { useRef } from "react";
import Image from "next/image";
import AI from "../../public/AI.png";
import mental from "../../public/mental.png";
import social from "../../public/social.png";
import education from "../../public/education.png";
import sustainable from "../../public/sustainable.png";
import benefit from "../../public/benefit.png";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

const Blogs = () => {
  const ref = useRef(null);
  const animationDelay = 0.3;
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="flex flex-col flex-wrap justify-center items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 "
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={slideInFromBottom}
      initial="hidden"
      custom={isInView}
      transition={{ delay: 0.5, index: animationDelay }}
    >
      <div className="-z-50 mt-40">
      <h4
        className=" text-white mt-0 text-6xl font-extrabold text-center mb-28"
        style={{ transform: "scale(0.9)" }}
      >
        <Link href="/blog">Our Blogs</Link>
      </h4>
      <div className=" flex flex-wrap justify-around gap-y-20">
        <div className="flex flex-col items-center bg-[#2c2a3698] hover:bg-gray-400  hover:w-[370px] sm:hover:w-[430px] transition-all duration-300 rounded-3xl sm:h-[600px] sm:w-[400px]  w-[350px]  border-radius[3rem] border[5px solid transparent] cursor-pointer transition[0.4s ease-in-out]">
          <h1 className=" text-white mt-5 font-bold font-weight ">
            Artificial Intelligence in Everyday Life
          </h1>
          <Image
            className=" mt-5 mb-10 w-[320px] h-[230px] border-radius[3rem] border[5px solid transparent] cursor-pointer transition[0.4s ease-in-out]"
            src={AI}
            alt="Picture"
            width={200}
            height={200}
          />
          <p className=" font-sans font-weight[800] text-center line-height[2] text-white">
            {" "}
            Artificial Intelligence (AI) has become a revolutionary force across
            many industries, and the world of digital art is no exception. By
            enabling artists to push the boundaries of creativity, AI is now
            being used to generate images, enhance designs, and even collaborate
            with creators in ways that were previously unimaginable.
          </p>
          <Link href="/AI">
            <button className="bg-[#bf97ff70] w-44 mb-7 sm:mt-14  mt-4 rounded-full  hover:bg-gray-700 text-white font-bold py-2 px-4  hover:w-48 transition-all duration-300 cursor-pointer">
              Read More
            </button>
          </Link>
        </div>

        {/* second blog */}

        <div className="flex flex-col items-center bg-[#2c2a3698] hover:bg-gray-400 sm:hover:w-[430px]  hover:w-[370px] transition-all duration-300 rounded-3xl Sm:h-[600px] sm:w-[400px] w-[350px]  border-radius[3rem] border[5px solid transparent] cursor-pointer transition[0.4s ease-in-out]">
          <h1 className=" text-white mt-5 font-bold font-weight ">
            The Benefits of Sustainable Living
          </h1>
          <Image
            className=" mt-5 mb-10 w-[320px] h-[230px] border-radius[3rem] border[5px solid transparent] cursor-pointer transition[0.4s ease-in-out]"
            src={sustainable}
            alt="Picture"
            width={200}
            height={200}
          />
          <p className=" font-sans font-weight[800] text-center line-height[2] text-white">
            {" "}
            Sustainable living is about making choices that reduce our
            environmental impact, helping to preserve the planet for future
            generations. With climate change becoming a pressing global issue,
            adopting sustainable practices in our daily lives is more crucial
            than ever.
          </p>
          <Link href="/Sustainable-Living">
            <button className="bg-[#bf97ff70] w-44 rounded-full mb-7 sm:mt-16   mt-4 hover:bg-gray-700 text-white font-bold py-2 px-4  hover:w-48 transition-all duration-300 cursor-pointer">
              Read More
            </button>
          </Link>
        </div>

        {/* third blog */}

        <div className="flex flex-col items-center bg-[#2c2a3698] hover:bg-gray-400 sm:hover:w-[430px]  hover:w-[370px] transition-all duration-300 rounded-3xl sm:h-[600px] sm:w-[400px] w-[350px]  border-radius[3rem] border[5px solid transparent] cursor-pointer transition[0.4s ease-in-out]">
          <h1 className=" mt-5 text-white font-bold font-weight ">
            {" "}
            Mental Health
          </h1>
          <Image
            className=" mt-5 mb-10 w-[320px] h-[230px]] border-radius[3rem] border[5px solid transparent] cursor-pointer transition[0.4s ease-in-out]"
            src={mental}
            alt="Image"
            width={200}
            height={200}
          />
          <p className=" font-sans font-weight[800] text-center  line-height[2] text-white">
            {" "}
            Mental health is a critical aspect of our overall well-being,
            encompassing our emotional, psychological, and social well-being. It
            plays a pivotal role in shaping how we perceive and respond to the
            world around us.
          </p>
          <Link href="/mental-health">
            <button className="bg-[#bf97ff70] w-44 rounded-full mb-7 sm:mt-32  mt-4 hover:bg-gray-700 text-white font-bold py-2 px-4  hover:w-48 transition-all duration-300 cursor-pointer">
              Read More
            </button>
          </Link>
        </div>

        {/* fourth blog */}
        <div className="flex flex-col items-center bg-[#2c2a3698] hover:bg-gray-400 sm:hover:w-[430px]   hover:w-[370px] transition-all duration-300 rounded-3xl sm:h-[600px] sm:w-[400px] w-[350px]  border-radius[3rem] border[5px solid transparent] cursor-pointer transition[0.4s ease-in-out]">
          <h1 className=" text-white mt-5 font-bold font-weight ">
            Evolution of Social Media
          </h1>
          <Image
            className="mt-5 mb-10 w-[320px] h-[230px] border-radius[3rem] border[5px solid transparent] cursor-pointer transition[0.4s ease-in-out]"
            src={social}
            alt="Picture"
            width={200}
            height={200}
          />
          <p className=" font-sans font-weight[800] text-center line-height[2] text-white">
            {" "}
            Social media has transformed the landscape of communication,
            allowing individuals to connect across the globe instantly.
            Platforms like Facebook, Instagram, and TikTok have not only changed
            how we interact but have also influenced culture, politics, and even
            business.
          </p>
          <Link href="/social-media">
            <button className="bg-[#bf97ff70] w-44 rounded-full mb-7  sm:mt-14  mt-4 hover:bg-gray-700 text-white font-bold py-2 px-4  hover:w-48 transition-all duration-300 cursor-pointer">
              Read More
            </button>
          </Link>
        </div>

        {/* fifth blog */}

        <div className="flex flex-col items-center bg-[#2c2a3698] hover:bg-gray-400  sm:hover:w-[430px]  hover:w-[370px] transition-all duration-300 rounded-3xl sm:h-[600px] sm:w-[400px] w-[350px]  border-radius[3rem] border[5px solid transparent] cursor-pointer transition[0.4s ease-in-out]">
          <h1 className=" text-white mt-5 font-bold font-weight ">
            Education in Personal Growth
          </h1>
          <Image
            className=" mt-5 mb-10 w-[320px] h-[230px] border-radius[3rem] border[5px solid transparent] cursor-pointer transition[0.4s ease-in-out]"
            src={education}
            alt="Picture"
            width={200}
            height={200}
          />
          <p className=" font-sans font-weight[800] text-center line-height[2] text-white">
            {" "}
            Education is often seen as the foundation for success, both
            personally and professionally. It equips individuals with the
            skills, knowledge, and mindset necessary to navigate life’s
            challenges and seize opportunities in an ever-changing world.
          </p>
          <Link href="/Education">
            <button className="bg-[#bf97ff70] w-44 rounded-full mb-7  sm:mt-14  mt-4 hover:bg-gray-700 text-white font-bold py-2 px-4  hover:w-48 transition-all duration-300 cursor-pointer">
              Read More
            </button>
          </Link>
        </div>

        {/* sixth blog */}

        <div className="flex flex-col items-center bg-[#2c2a3698] hover:bg-gray-400  sm:hover:w-[430px]  hover:w-[370px] transition-all duration-300 rounded-3xl sm:h-[600px] sm:w-[400px] w-[350px]  border-radius[3rem] border[5px solid transparent] cursor-pointer transition[0.4s ease-in-out]">
          <h1 className=" text-white mt-5 font-bold font-weight ">
            The Future of Remote Work
          </h1>
          <Image
            className=" mt-5 mb-10 w-[320px] h-[230px] border-radius[3rem] border[5px solid transparent] cursor-pointer transition[0.4s ease-in-out]"
            src={benefit}
            alt="Picture"
            width={200}
            height={200}
          />
          <p className=" font-sans font-weight[800] text-center line-height[2] text-white">
            {" "}
            The concept of remote work has gained widespread popularity,
            especially following the COVID-19 pandemic. What was once an
            occasional perk for certain jobs has now become the norm for many
            industries
          </p>
          <Link href="/benefit">
            <button className="  bg-[#bf97ff70] w-44 rounded-full mb-7 sm:mt-20   mt-4 hover:bg-gray-700 text-white font-bold py-2 px-4  hover:w-48 transition-all duration-300 cursor-pointer">
              Read More
            </button>
          </Link>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Blogs;
