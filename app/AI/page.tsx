"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const AI = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center h-auto "
    >
      <motion.div variants={slideInFromTop} transition={{ delay: 0 }} className="-z-50 mt-40">
        <div className="text-center sm:mt-24  text-white text-2xl Sm:text-6xl font-extrabold">
          <h1 className="sm:text-5xl"> Artificial Intelligence in Everyday Life</h1>
        </div>
      </motion.div>

      <motion.img
        className="mt-0 items-center justify-center"
        src="/AI.png"
        animate={{ scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0 }}
        width={900}
        height={500}
      />

      <motion.div variants={slideInFromTop} transition={{ delay: 0.1 }}>
        <div className="mt-0 mb-40   bg-[#2c2a3698] h-auto w-[75vw]  text-white text-2xl justify-center">
          <h2 className=" mb-10 mt-10 ml-2   text-white text-3xl sm:text-5xl font-bold">
            Introduction
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
            One of the most recognizable applications of AI in daily life is
            through personal assistants like Siri, Alexa, and Google Assistant.
            These AI-driven platforms use natural language processing to
            interpret commands and assist users with various tasks, such as
            setting reminders, playing music, and answering questions. AI also
            powers recommendation algorithms for platforms like Netflix and
            YouTube, providing personalized content based on user preferences.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl font-bold">
            Impact on Healthcare
          </h2>

          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            In the healthcare sector, AI is revolutionizing how diseases are
            diagnosed and treated. Machine learning algorithms can analyze
            medical data more accurately and efficiently than human doctors in
            some cases. For example, AI systems are being used to detect cancers
            in medical images, predict patient outcomes, and tailor personalized
            treatment plans. These advancements not only save time but also
            improve the accuracy of diagnoses, ultimately leading to better
            patient care.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl font-bold">
            Challenges and Ethical Considerations
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            While AI has brought about many benefits, it also raises ethical
            concerns. Privacy is a significant issue, especially as AI systems
            collect and process vast amounts of personal data. Moreover, the
            fear of job displacement due to automation looms large for many
            workers. Addressing these challenges requires responsible
            development and regulation to ensure AI is used in ways that benefit
            society as a whole.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl font-bold">
            Conclusion
          </h2>
          <p className="  ml-3  mr-3 sm:text-2xl text-xl">
            The rise of artificial intelligence is undeniably reshaping the
            modern world. As we move forward, balancing innovation with ethical
            considerations will be essential to ensuring AI serves humanity in
            positive and transformative ways.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AI;
