"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const MentalHealth = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center h-auto "
    >
      <motion.div variants={slideInFromTop} className="-z-50 mt-40">
        <div className="text-center  text-white text-3xl Sm:text  font-extrabold">
          <h1 className=""> The Importance of Mental Health Awareness</h1>
        </div>
      </motion.div>

      <motion.img
        className="mt-0 items-center justify-center"
        src="/mental.png"
        animate={{ scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0 }}
        width={900}
        height={500}
      />

      <motion.div variants={slideInFromTop} transition={{ delay: 0.5 }}>
        <div className="content mb-40 mt-20 bg-[#2c2a3698] h-auto w-[75vw]  text-white text-2xl justify-center">
          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl  font-bold">
            Introduction
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Mental health is a critical component of overall well-being, yet it
            often doesn’t receive the attention it deserves. The increasing
            awareness of mental health has brought to light the importance of
            recognizing and addressing mental health challenges early, breaking
            down societal stigmas, and creating a supportive environment for
            those affected.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            Breaking the Stigma
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            For many years, mental health was a taboo subject, often swept under
            the rug. People suffering from conditions such as anxiety,
            depression, or bipolar disorder were frequently labeled as weak or
            unstable. This stigma prevented many individuals from seeking help,
            exacerbating their condition. Today, mental health campaigns are
            making significant strides in shifting public perception. By
            encouraging open discussions and education, more people feel
            comfortable acknowledging their struggles and reaching out for
            support.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            The Role of Early Intervention
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Like physical illnesses, early detection and treatment of mental
            health issues are crucial for effective management. Many mental
            health problems, when caught early, can be treated more
            successfully, allowing individuals to lead fulfilling lives.
            Schools, workplaces, and communities are vital in promoting early
            intervention through mental health education programs, counseling
            services, and support networks.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            Conclusion
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Mental health awareness is not just about addressing illnesses but
            about fostering a culture where mental well-being is prioritized. By
            breaking the stigma, promoting early intervention, and creating
            supportive communities, we can ensure a healthier society for
            everyone, mentally and emotionally.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MentalHealth;
