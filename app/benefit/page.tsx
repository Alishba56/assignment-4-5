"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const SustainableLiving = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center h-auto "
    >
      <motion.div variants={slideInFromTop} className="-z-50 mt-40">
  <div className="text-center  text-white text-3xl Sm:text-6xl font-extrabold">
          <h1 className="">The Future of Remote Work: Opportunities and Challenges</h1>
        </div>
      </motion.div>

      <motion.img
        className="mt-0 items-center justify-center"
        src="/benefit.png"
        animate={{ scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0 }}
        width={900}
        height={500}
      />

      <motion.div variants={slideInFromTop} transition={{ delay: 0.5 }}>
        <div className="content mb-40 mt-20 bg-[#2c2a3698] h-auto w-[75vw]  text-white text-2xl justify-center">
          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl font-bold">
            Introduction
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            The COVID-19 pandemic has accelerated the adoption of remote work,
            reshaping the traditional office environment. As many companies
            discovered the benefits of remote work, it became clear that it was
            more than just a temporary solution. The future of work may well be
            remote, or at least a hybrid of remote and in-office work, bringing
            with it both opportunities and challenges.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl font-bold">
            Benefits of Remote Work
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Remote work offers numerous advantages, both for employees and
            employers. Workers enjoy greater flexibility, which can lead to
            improved work-life balance. Without the need to commute, employees
            can save time and reduce stress, leading to increased productivity.
            Companies, on the other hand, benefit from reduced overhead costs,
            such as office space and utilities. Moreover, remote work allows
            companies to tap into a global talent pool, as geographic location
            becomes less of a barrier.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl font-bold">
            Challenges of Remote Work
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Despite its benefits, remote work also comes with challenges. Many
            employees struggle with feelings of isolation, as they miss the
            social interactions and camaraderie found in traditional office
            environments. Additionally, maintaining a clear separation between
            work and personal life can be difficult, leading to burnout.
            Communication is another challenge, as teams must rely on digital
            tools to stay connected, which can lead to misunderstandings or
            miscommunication.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl font-bold">
            The Hybrid Work Model
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            As companies adapt to the new normal, many are exploring hybrid work
            models that combine remote and in-office work. This approach allows
            employees to enjoy the flexibility of remote work while still
            maintaining the social and collaborative aspects of office life. The
            hybrid model offers a balanced solution, giving both employees and
            employers the best of both worlds.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl font-bold">
            Conclusion
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Remote work is here to stay, but its future will likely involve a
            hybrid model that blends the benefits of remote work with the
            advantages of in-office collaboration. As companies and employees
            continue to navigate this new landscape, the key to success will be
            flexibility, communication, and a focus on maintaining work-life
            balance.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SustainableLiving;
