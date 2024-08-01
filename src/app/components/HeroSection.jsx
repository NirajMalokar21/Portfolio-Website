"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {

  useGSAP(() => {
    gsap.to('#hero_text', {
      opacity: 1,
      duration: 2,
      x: 0,
      ease: 'power2.inOut'
    })

    gsap.to('#exclam3', {
      y: -250, 
      repeat: -1, 
      yoyo: true, 
      duration: 2, 
      ease: 'power1.inOut'
    })

    gsap.to('#squiggle', {
      y: 25, 
      repeat: -1, 
      yoyo: true, 
      duration: 2, 
      ease: 'power1.inOut'
    })

    gsap.to('#star', {
      scale: 0.75, 
      repeat: -1, 
      yoyo: true, 
      duration: 2, 
      ease: 'power1.inOut'
    })

    gsap.to('#my_photo', {
      x: "-50%",
      opacity: 1,
      duration: 2,
      ease: 'power1.inOut'
    })
  }, [])
  
  return (
    <section className="max-md:pb-44 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
          id="hero_text"
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start opacity-0 translate-x-96"
        >
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary_light">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            Niraj Malokar
          </h1>
          
          <h2 className="text-black mb-4 text-xl pb-4 sm:text-2xl lg:text-4xl lg:leading-normal font-extrabold">
            <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "3rd Year C.S Student",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          <div className="max-sm:pb-12">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-primary_light hover:bg-slate-200 text-white"
            >
              <p className="font-bold">Hire Me</p>
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-primary_light hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 max-sm:pb-12">
                <p className="font-bold">Download CV</p>
              </span>
            </Link>
          </div>
          <Image 
            id="squiggle"
            src='/images/hero-element-2.png'
            alt="squiggle"
            width={90}
            height={90}
            className="invert translate-y-4 translate-x-24 filter grayscale brightness-50 hidden xl:block"
          />
        </div>
        <div
          className="col-span-4 place-self-center mt-4 lg:mt-0 pt-8"
        >
          <div className="rounded-full bg-background w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
              <div className="h-[470px] w-[300px] max-md:hidden bg-transparent -translate-y-7 translate-x-8 border-primary-300 rounded-full border-4"></div>
              <Image
                id="my_photo"
                src="/images/portfolioImg.jpg"
                alt="hero image"
                className="absolute transform -translate-y-1/2 top-1/2 left-1/2 rounded-full opacity-0"
                width={300}
                height={300}
              />
            <Image 
              id="squiggle2"
              src='/images/hero-element-4.png'
              alt="squiggle2"
              width={100}
              height={100}
              className="invert -translate-y-32 -translate-x-12 filter grayscale brightness-50 hidden xl:block"
            />
          </div>
          <Image  
            id="exclam3"
            src='/images/hero-element-1.png'
            alt="exclam3"
            width={60}
            height={60}
            className="invert -translate-y-72 -translate-x-80 filter grayscale brightness-50 hidden xl:block"
          />
          
          <Image 
            id="star"
            src='/images/hero-element-3.png'
            alt="star"
            width={30}
            height={30}
            className="invert -translate-y-96 translate-x-96 filter grayscale brightness-50 hidden xl:block"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
