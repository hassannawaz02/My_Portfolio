import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="text-gray-700 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              className="rounded-full"
              src={require("../../../public/assests/picture/logo.png")}
              alt="Logo"
              width={80}
              height={100}
            />
            <span className="ml-3 text-xl">Hassan Nawaz</span>
          </div>
          <p className="text-sm text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Hassan Nawaz
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="https://linkedin.com/in/hassan-nawaz-414983331" target="_blank">
              <FaLinkedin className="text-3xl text-gray-700 hover:text-[#2a2affd3]" />
            </Link>
            <Link href="https://github.com/hassannawaz02" target="_blank">
              <FaGithub className="text-3xl text-gray-700 hover:text-[#a88484]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
