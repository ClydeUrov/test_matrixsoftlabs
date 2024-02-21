"use client"

import Image from "next/image";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import LeftSidebar from "./navigation/LeftSidebar";
import { RxCross1 } from "react-icons/rx";

const MobileNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="xl:hidden flex px-8 pt-8 h-11 text-center justify-between items-center">
      <Image
        src='/assets/tireshop.png'
        alt='TireShop'
        className='my-8'
        width={246}
        height={34}
      />

      <IoMdMenu 
        className="text-white text-5xl mr-5 cursor-pointer" 
        onClick={toggleSidebar}
      />

      {isSidebarOpen && (
        <div 
          className="fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={toggleSidebar}
        >
          <div 
            className="relative bg-[#1d1d1d] rounded-lg mx-8 max-w-[800px] w-[100%] items-center text-center justify-center flex"
            onClick={(e) => e.stopPropagation()}
          >
            <LeftSidebar modal={isSidebarOpen} />
            <button
              onClick={toggleSidebar} 
              className="absolute top-0 left-full -mt-22 mr-4 cursor-pointer"
            >
              <RxCross1 className="text-white text-3xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNav;