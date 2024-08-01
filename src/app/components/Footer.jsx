import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-primary-400 border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image 
            src='/images/logo.png'
            alt="logo"
            width={60}
            height={30}
          />
        <p className="text-slate-600">All rights reserved @2024 <span className="font-semibold">Niraj Malokar</span></p>
      </div>
    </footer>
  );
};

export default Footer;
