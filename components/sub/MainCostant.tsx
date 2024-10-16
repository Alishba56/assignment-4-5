"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function HomeCostant() {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row justify-between px-5 sm:px-20 mt-16 w-full z-[20]"
      >
        <div className="w-full md:w-1/2 flex flex-col gap-5 justify-center text-start">
          <motion.div
            variants={slideInFromTop}
            className="flex w-40 rounded-full welcome-box py-[8px] px-[4px]  sm:mt-16  mt-14 border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className=" w-4 h-4 " />
            <h1 className="welcome-text text-[13px]  text-white">
              Frontend developer
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>
            Blogs expirence
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-gray-400 text-lg max-w-[600px] my-5 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </motion.p>

          <motion.div
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] w-full h-auto"
          >
            <Link href="/blog">Read Blogs</Link>
          </motion.div>
        </div>
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-[100%] md:w-[35%] mt-7 flex justify-center items-center"
        >
          <Image
            width={0}
            height={0}
            src="/mainIconsdark.svg"
            alt="work icons"
            className="w-[70%] md:w-[100%]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomeCostant;
