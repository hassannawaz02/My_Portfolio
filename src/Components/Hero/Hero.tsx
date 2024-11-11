import Image from "next/image";
import React from "react";
import Link from "next/link";


const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-zinc-300">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded-full mx-auto w-[15rem]"
            src={require("../../../public/assests/picture/logo.png")}
            alt="Logo"
            width={600}
            height={600}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hello !
            <br className="hidden lg:inline-block" />
            Hassan Nawaz
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I'm a Passionate
            <br className="hidden lg:inline-block" />
            Front-End Developer
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700 mt-2"></div>
          <p className="mb-5 font-normal font-mono text-black leading-relaxed">
            I am passionate about creating stunning web applications with a focus on responsive design, modern UI/UX, and clear code. Let's build something great together!
          </p>
          <div className="flex justify-center">
            <Link href="#Contact">
              <button className="inline-flex font-semibold text-black bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-950 text-center">
      </div>
    </section>
  );
};

export default Hero;
