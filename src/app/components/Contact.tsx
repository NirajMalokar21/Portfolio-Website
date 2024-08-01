'use client';

import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-email';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-400 to-transparent max-sm:hidden rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-black my-2">
            Let&apos;s Connect
            </h5>
            <p className="text-[#676c70] mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
            <Link href="github.com">
                <Image src={GithubIcon} alt="Github Icon" className='invert' />
            </Link>
            <Link href="linkedin.com">
                <Image src={LinkedinIcon} alt="Linkedin Icon" className='invert'/>
            </Link>
            
            </div>
        </div>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-5'>
                <label
                htmlFor='name'
                className='mb-3 block text-base font-medium text-black'
                >
                Full Name
                </label>
                <input
                type='text'
                placeholder='Full Name'
                className='w-full rounded-md border border-gray-300 bg-primary-100 py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-500 focus:shadow-md'
                {...register('name', { required: true })}
                />
            </div>
            <div className='mb-5'>
                <label
                htmlFor='email'
                className='mb-3 block text-base font-medium text-black'
                >
                Email Address
                </label>
                <input
                type='email'
                placeholder='Your Email'
                className='w-full rounded-md border border-gray-300 bg-primary-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-primary-500 focus:shadow-md'
                {...register('email', { required: true })}
                />
            </div>
            <div className='mb-5'>
                <label
                htmlFor='message'
                className='mb-3 block text-base font-medium text-black'
                >
                Message
                </label>
                <textarea
                rows={4}
                placeholder='Type your message'
                className='w-full resize-none rounded-md border border-gray-300 bg-primary-100 py-3 px-6 text-base font-medium text-black outline-none focus:border-primary-500 focus:shadow-md'
                {...register('message', { required: true })}
                ></textarea>
            </div>
            <div>
                <button className='hover:shadow-form w-full rounded-md bg-primary-500 py-3 px-8 mt-4 text-base font-semibold text-black outline-none'>
                Submit
                </button>
            </div>
        </form>
      </div>
    </section>
    
  );
};

export default Contact;