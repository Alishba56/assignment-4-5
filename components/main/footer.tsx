"use client";
import Link from "next/link";
import React from "react";

const footer = () => {
  return (
    <div className="w-[100%] ">
      <footer className=" flex flex-col justify-center items-center  w-[100%] h-[100%] p-15  bg-[#2c2a3698]">
        <ul className="text-white list-inside flex justify-center items-center mt-5  p-0 text-lg gap-4 sm:gap-6 md:gap-10  text-center">
          <li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d]">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d]">
            <Link href="/blog">Blogs</Link>
          </li>
          <li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d]">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d]">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <p className="copyright mt-10 text-center text-base mb-6 text-white">
          @ Alishba Shahzad | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default footer;
