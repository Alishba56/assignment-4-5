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
      <motion.div variants={slideInFromTop} className="-z-50 mt-40">
        <div className="text-center   text-white text-3xl Sm:text font-extrabold">
          <h1>The Benefits of Sustainable Living</h1>
        </div>
      </motion.div>

      <motion.img
        className="mt-0 items-center justify-center"
        src="/sustainable.png"
        animate={{ scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0 }}
        width={900}
        height={500}
      />

      <motion.div variants={slideInFromTop} transition={{ delay: 0.5 }}>
        <div className=" mb-40 mt-20 bg-[#2c2a3698] h-auto w-[75vw]  text-white text-2xl justify-center">
          <h2 className="mb-10 mt-10 ml-2 text-white text-3xl sm:text-5xl  font-bold">
            Introduction
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Sustainable living is about making choices that reduce our
            environmental impact, helping to preserve the planet for future
            generations. With climate change becoming a pressing global issue,
            adopting sustainable practices in our daily lives is more crucial
            than ever.
          </p>
          <blockquote></blockquote>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            Reducing Waste
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            One of the most significant ways individuals can contribute to a
            more sustainable lifestyle is by reducing waste. This can be
            achieved by adopting simple habits such as using reusable shopping
            bags, containers, and water bottles. Composting food waste and
            recycling paper, glass, and plastics also help reduce the volume of
            waste sent to landfills, which in turn lowers greenhouse gas
            emissions.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            Energy Conservation
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
            Supporting Sustainable Businesses
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Consumers have the power to influence the market by supporting
            companies that prioritize sustainability. This includes businesses
            that use eco-friendly materials, practice fair trade, or have
            carbon-neutral policies. By choosing to spend money on these
            products and services, individuals help create a demand for
            sustainable goods and practices, encouraging other businesses to
            follow suit.
          </p>

          <h2 className="mb-10 mt-10 ml-2 text-white text-5xl font-bold">
            Conclusion
          </h2>
          <p className="ml-3 mr-3 sm:text-2xl text-xl">
            Sustainable living may seem like a small effort on an individual
            level, but collectively, it can lead to significant environmental
            benefits. By reducing waste, conserving energy, and supporting
            eco-friendly businesses, we can each play a part in protecting the
            planet.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SustainableLiving;
