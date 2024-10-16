"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const AI = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center h-auto"
    >
      <motion.div variants={slideInFromTop} transition={{ delay: 0 }} className="-z-50 mt-40">
        <div className="text-center   text-white text-4xl font-extrabold">
          <h1> About me</h1>
        </div>
      </motion.div>

      <motion.div variants={slideInFromTop} transition={{ delay: 0.1 }} >
        <div className="mt-0 mb-40   bg-[#2c2a3698] h-auto w-[75vw]  text-white text-2xl justify-center">
          <h2 className=" mb-10 mt-10 ml-2   text-white text-3xl sm:text-5xl font-bold">
            artificial Intelligence
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Artificial Intelligence (AI) is no longer a concept limited to
            science fiction; it has integrated into our everyday lives,
            transforming industries, and reshaping the way we live, work, and
            interact. AI is everywhere, from our smartphones to healthcare
            systems, and it continues to grow in significance.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl font-bold">
            AI in Consumer Technology
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus fugiat, id explicabo cumque minus ipsa assumenda nam sequi magni ratione labore. Eligendi in debitis voluptatum numquam molestiae facere quasi.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl font-bold">
            Impact on Healthcare
          </h2>

          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet reprehenderit ab corporis distinctio dolore suscipit! Assumenda aspernatur, quia, illo quas minus enim minima eaque odio voluptate ut, consequatur maxime ipsa?
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl font-bold">
          Education
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quae quis mollitia recusandae. Inventore quaerat quis laboriosam, distinctio nam minima placeat ex dolorum iste repellendus natus adipisci perspiciatis exercitationem voluptatum!
          </p>

          
        </div>
      </motion.div>
    
    </motion.div>
  );
};

export default AI;
