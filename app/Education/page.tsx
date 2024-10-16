"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const SustainableLiving = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center h-auto"
    >
      <motion.div variants={slideInFromTop}  className="-z-50 mt-40">
        <div className="text-center   text-white text-3xl Sm:text  font-extrabold">
          <h1>The Role of Education in Personal and Professional Growth</h1>
        </div>
      </motion.div>

      <motion.img
        className="mt-0 items-center justify-center"
        src="/education.png"
        animate={{ scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0 }}
        width={900}
        height={500}
      />

      <motion.div variants={slideInFromTop} transition={{ delay: 0.5 }}>
        <div className=" mb-40 mt-20 bg-[#2c2a3698] h-auto w-[75vw]  text-white text-2xl justify-center">
          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl font-bold">
            Introduction
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Education is often seen as the foundation for success, both
            personally and professionally. It equips individuals with the
            skills, knowledge, and mindset necessary to navigate life’s
            challenges and seize opportunities in an ever-changing world.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            Building Critical Thinking and Problem-Solving Skills
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            One of the primary benefits of education is its ability to foster
            critical thinking and problem-solving skills. Whether through formal
            schooling or self-directed learning, education encourages
            individuals to question assumptions, analyze situations, and come up
            with innovative solutions. These skills are essential in both
            personal decision-making and professional environments, where
            adaptability and creativity are highly valued.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            Professional Development and Career Advancement
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            In the professional realm, education is a key driver of career
            advancement. Higher education, specialized training, and continuous
            learning opportunities enhance an individual’s employability and
            open doors to higher-paying positions. Employers often seek
            candidates with strong educational backgrounds, as they bring a
            wealth of knowledge and expertise to the workplace.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            Lifelong Learning and Personal Fulfillment
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Education is not limited to the classroom. Lifelong learning,
            whether through hobbies, travel, or new experiences, plays a
            significant role in personal growth. It helps individuals develop
            new perspectives, improves emotional intelligence, and fosters a
            sense of fulfillment and purpose in life.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            Conclusion
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            The role of education extends far beyond formal schooling. It is a
            lifelong journey that equips individuals with the tools needed for
            personal and professional growth. By embracing education in all its
            forms, we can continue to evolve and thrive in both our personal
            lives and careers.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SustainableLiving;
