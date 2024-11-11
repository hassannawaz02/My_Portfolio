import React from 'react'

const About = () => {
  return (
    <div id='About'>
      <section className="text-gray-800 body-font bg-zinc-300">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
              About ME
            </h1>
            <p className="mb-8 leading-relaxed text-black">
              I am a dedicated front-end developer with a passion for crafting
              sleek and interactive web experiences. I have a strong command of
              HTML, CSS, JavaScript, TypeScript, and popular frameworks like
              Bootstrap, Tailwind, and Next.js. I thrive on bringing creative
              ideas to life, creating applications that not only look amazing
              but also perform flawlessly.
            </p>
            <p className="mb-8 leading-relaxed text-black">
              Currently, I'm pursuing Pre-Engineering at Adamjee Government
              Science College. I constantly hone my development skills through
              personal projects and hands-on learning. Whether it's building
              responsive, eye-catching interfaces or deploying optimized apps on
              platforms like Vercel, I always aim to deliver clean, efficient,
              high-quality code in everything I do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
