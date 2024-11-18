import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const Project = () => {
  return (
    <div id='Project'>
      <section className="text-gray-800 body-font bg-fixed bg-cover bg-zinc-300">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="Project-1"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/my-project-01.png")}
                  width={600}
                  height={600}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume Builder
                  </h1>
                  <p className="leading-relaxed text-stone-900">
                    The Resume Generator is an intuitive web application that streamlines the process of creating professional resumes. Users can easily input their personal details, education, work experience, and skills through a user-friendly interface. The application dynamically generates a polished resume that can be downloaded in PDF format, offering a hassle-free solution for job seekers. This project highlights my skills in form handling, data manipulation, and output generation while delivering a clean and efficient user experience.
                  </p>
                  <Link target='_blank' href={"https://giaic-omega.vercel.app/"}>
                    <p className="leading-relaxed text-stone-950 bg-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
