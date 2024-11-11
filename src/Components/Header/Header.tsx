import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-700 mb-4 md:mb-0">
            <span className="ml-3 font-bold text-xl">Hassan Nawaz</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-10 font-semibold hover:text-blue-600">
              Home
            </Link>
            <Link href="#About" className="mr-10 font-semibold hover:text-blue-600">
              About
            </Link>
            <Link href="#Skills" className="mr-10 font-semibold hover:text-blue-600">
              Skills
            </Link>
            <Link href="#Project" className="mr-10 font-semibold hover:text-blue-600">
              Projects
            </Link>
            <Link href="#Contact" className="mr-10 font-semibold hover:text-blue-600">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
