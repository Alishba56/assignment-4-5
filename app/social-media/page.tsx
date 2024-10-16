"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const SocialMedia = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center h-auto"
    >
      <motion.div variants={slideInFromTop} className="z-50 mt-40">
        <div className="text-center  text-white text-3xl Sm:text  font-extrabold">
          <h1>Social Media</h1>
        </div>
      </motion.div>

      <motion.img
        className="mt-0 items-center justify-center"
        src="/social.png"
        animate={{ scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0 }}
        width={900}
        height={500}
      />

      <motion.div variants={slideInFromTop} transition={{ delay: 0.5 }}>
        <div className="content mb-40 mt-20 bg-[#2c2a3698]    h-auto w-[75vw]  text-white text-2xl justify-center">
          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl  font-bold">
            Introduction
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Social media has transformed the landscape of communication,
            allowing individuals to connect across the globe instantly.
            Platforms like Facebook, Instagram, and TikTok have not only changed
            how we interact but have also influenced culture, politics, and even
            business.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            From MySpace to TikTok: A Brief History
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Social media has made communication faster and more accessible than
            ever before. It enables people to stay connected with family and
            friends, no matter the geographical distance. Additionally, social
            media has become a powerful tool for social change, allowing
            activists to reach large audiences quickly and organize movements,
            such as the #MeToo campaign or climate change protests.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            Positive Impacts on Communication
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Energy use is one of the largest contributors to environmental
            degradation. Switching to renewable energy sources like solar or
            wind power, using energy-efficient appliances, and practicing
            mindful energy consumption (e.g., turning off lights when not in
            use) can significantly reduce one’s carbon footprint. Governments
            and corporations are also investing in green technologies and
            renewable energy projects to promote large-scale sustainable living.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            Challenges and Negative Impacts
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            However, the evolution of social media has not been without its
            challenges. Misinformation can spread quickly on these platforms,
            often with significant consequences. Furthermore, the constant
            pressure to present a perfect online persona can lead to mental
            health issues like anxiety, depression, and low self-esteem,
            especially among younger users.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            Conclusion
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            While social media has revolutionized communication in many positive
            ways, it is essential to approach it with caution and mindfulness.
            Balancing the benefits of connectivity with the potential pitfalls
            of misinformation and mental health impacts is key to navigating the
            modern social media landscape.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SocialMedia;
