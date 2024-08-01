import Image from 'next/image'
import React from 'react'

const skillsArray = [
    {
        name: "React",
        image: '/images/reactimage.png'
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
        image: '/images/mongoIcon.png'
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
        image: '/images/typescrImage.png'
    },
    {
        name: "GSAP",
        image: '/images/gsapImage.png'
    },
]

const Skills = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-primary-200 w-full h-full rounded-2xl">
        <h2 className="text-4xl font-bold mb-4 py-4">Skills</h2>
        <div className='flex flex-wrap gap-16 items-center justify-evenly px-8'>
            {skillsArray.map((skill, i) => (
                <div className='flex flex-col items-center justify-start px-2'>
                    <Image 
                        src={skill.image}
                        alt='skillPhoto'
                        width={50}
                        height={50}
                    />
                    <p className='text-base font-semibold lg:text-lg pb-2'>{skill.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills