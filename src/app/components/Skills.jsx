"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillsArray = [
    {
        name: "React",
        image: '/images/reactImage.png'
    },
    {
        name: "Next.Js",
        image: '/images/nextImage.png'
    },
    {
        name: "TailwindCSS",
        image: '/images/tailwindImage.png'
    },
    {
        name: "Redux",
        image: '/images/reduxImage.png'
    },
    {
        name: "MongoDB",
        image: '/images/MongoIcon.png'
    },
    {
        name: "SQL",
        image: '/images/sqlImage.png'
    },
    {
        name: "GitHub",
        image: '/images/githubImage.png'
    },
    {
        name: "Express",
        image: '/images/expressIcon.png'
    },
    {
        name: "NodeJS",
        image: '/images/nodeImage.png'
    },
    {
        name: "Typescript",
        image: '/images/typescriptImage.png'
    },
    {
        name: "GSAP",
        image: '/images/gsapImage.png'
    },
    {
        name: "Pandas",
        image: '/images/pandas.png'
    },
    {
        name: "Numpy",
        image: '/images/numpy.png'
    },
    {
        name: "Jupyter",
        image: '/images/jupyter.png'
    },
]

const Skills = () => {

  useGSAP(() => {
    gsap.to('.skill-item', {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#about_me',
            start: 'top 90%',  
            once: true
      },
    })
  }, [])
//   bg-[#FFC2CA]

  return (
    <div className="flex flex-col justify-start items-center bg-[#b2b2db] w-full h-full rounded-2xl max-lg:hidden pb-4">
        <h2 className="text-4xl font-bold mb-4 py-4">Skills</h2>
        <div className='flex flex-wrap gap-16 items-center justify-evenly px-8 '>
            {skillsArray.map((skill, i) => (
                <div key={i} id='skill' className='flex flex-col items-center justify-start px-2'>
                    <Image 
                        src={skill.image}
                        alt='skillPhoto'
                        width={50}
                        height={50}
                        className='-translate-y-48 opacity-0 skill-item'
                    />
                    <p className='text-base font-semibold lg:text-lg pb-2 -translate-y-48 opacity-0 skill-item'>{skill.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills