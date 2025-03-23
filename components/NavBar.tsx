"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close the mobile menu
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const pathName = usePathname();

  // Scroll animation effects
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(scrollYProgress, [0, 0.1], ["transparent", "#11112B"]);
  const textColor = useTransform(scrollYProgress, [0, 0.1], ["#11112B", "#fff"]);

  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.5s ease",
        color: pathName === "/blog" ? textColor : "white",
      }}
      className="z-50 fixed w-full flex items-center justify-between px-10 py-5 top-0 left-0"
    >
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">Algonix Technologies</Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 list-none text-md uppercase font-[400] font-Poppins cursor-pointer">
        {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Services", path: "/services" }].map(
          (item) => (
            <Link key={item.path} href={item.path}>
              <li className="relative px-3 group transition duration-300 hover:text-gray-300">
                <span className="h-[2px] w-0 bg-white absolute left-0 right-0 -bottom-2 group-hover:w-full transition-all ease-in-out duration-500">
                  &nbsp;
                </span>
                {item.name}
              </li>
            </Link>
          )
        )}
      </ul>

      {/* Contact Button */}
      <div className="hidden md:flex text-xl font-normal">
        <Link href="/contact">
          <motion.button
            style={{ borderColor: pathName === "/blog" ? textColor : "white" }}
            className="rounded-lg border-2 py-1 px-4 backdrop-blur-md hover:bg-white/10 transition-all duration-300 font-Poppins"
          >
            Contact Us
          </motion.button>
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden z-50 relative">
        {!isOpen ? (
          <GiHamburgerMenu size={40} className="text-white cursor-pointer" onClick={handleClick} />
        ) : (
          <MdClose size={40} className="text-white cursor-pointer" onClick={handleClick} />
        )}
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`fixed left-0 top-0 w-[80%] h-full bg-black/90 text-white flex flex-col justify-center items-center z-40 shadow-2xl 
        transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-[-100%]"}`}
      >
        {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Services", path: "/services" }, { name: "Contact Us", path: "/contact" }].map(
          (item) => (
            <Link key={item.path} href={item.path} onClick={handleClick}>
              <div
                className="py-6 text-3xl border-b border-gray-700 w-full text-center hover:bg-white/10 rounded-md transition-all duration-200 ease-in-out"
              >
                {item.name}
              </div>
            </Link>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default NavBar;
