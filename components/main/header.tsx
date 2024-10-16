"use client";
import Link from "next/link";
import React, {  useState } from "react";
import Image from "next/image";
import logo from "../.././public/sparkling.png";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { RxCross2 } from "react-icons/rx";


const Header = () => {
  const [attr , setAttr] = useState('hidden');
  const [attr2, setAttr2] = useState('block');
  const [isOpen, setIsOpen] = useState (false);

  const openMenu =() =>{
    setIsOpen(!isOpen);
    setAttr(isOpen ? 'hidden' :'block');
    setAttr2(isOpen ? 'block' : 'hidden')
  }

  return (
    <>
    <motion.div initial="hidden" animate="visible" className="w-full z-50">
      <motion.div variants={slideInFromTop}>
        <header className="absolute top-0 flex justify-between text-white items-center gap-3  mt-5  w-[100%] h-[10vh] z-50">
            <Link href="/" className="mt-6 md:mt-0 pl-20  rounded-full cursor-pointer ease-in duration-300 hover:scale-[1.1]">
              <Image
                className=""
                src={logo}
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
            
            <nav className="md:flex gap-20 p-10 text-white text-lg font-extrabold list-none">
              <ul className="hidden md:flex gap-20">
              <Link href="/">
                <li className=" cursor-pointer ease-in duration-300 hover:text-[#712fff3d] hover:scale-[1.1]">
                  Home
                </li>
                </Link>
                  <li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d] hover:scale-[1.1]">
                  <Link href="/blog">Blogs</Link>
                </li>
                <li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d] hover:scale-[1.1] ">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d] hover:scale-[1.1]">
                  <Link href="/about">About</Link>
                </li> 
                </ul>
                <h1 onClick={openMenu} className={`block text-2xl md:hidden text-white ${attr2}`}><IoMenu/> </h1>
                <h1 onClick={openMenu} className={`cross ${attr} text-2xl md:hidden text-white  `}><RxCross2/></h1>
            </nav>
        </header>
    </motion.div>
   </motion.div>
            <div className={`menu md:hidden h-40 pt-24 bg-transparent text-white w-full ${attr}`}>
              <ul className="grid justify-center items-center gap-3 text-center text-xl">
                <Link href='/'><li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d] hover:scale-[1.1]">Home</li></Link>
                <Link href='/blog'><li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d] hover:scale-[1.1]">Blogs</li></Link>
                <Link href='/contact'><li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d] hover:scale-[1.1]">Contact</li></Link>
                <Link href='/about'><li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d] hover:scale-[1.1]">About</li></Link>
              </ul>

            </div>
            </>
  );
};

export default Header;
