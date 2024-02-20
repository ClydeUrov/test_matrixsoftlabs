'use client'

import { useState } from 'react'
import { IoMdSearch, IoMdInformationCircle } from "react-icons/io";
import { PiCalculator } from "react-icons/pi";
import { CiFileOn } from "react-icons/ci";
import { FaCircleHalfStroke, FaSortDown, FaAngleDown } from "react-icons/fa6";
import { MdOutlineShoppingCart, MdOutlineLanguage } from "react-icons/md";
import Image from 'next/image';
import { TbWheel } from "react-icons/tb";
import { FaCarBattery } from "react-icons/fa6";

const LeftSide = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='flex flex-col w-3/12 text-white p-6'>
      <Image
        src='/assets/tireshop.png'
        alt='TireShop'
        className='my-8'
        width={246}
        height={34}
      />

      <div
        className='flex items-center justify-between w-full my-3 cursor-pointer'
        onClick={toggleDropdown}
      >
        <span className='flex items-center'>
          <IoMdSearch className='text-[40px] mr-8' />
          <p className='text-base'>Browse</p>
        </span>
        <FaSortDown className='text-base ml-2' />
      </div>
      {isDropdownOpen && (
        <div className={`ml-3 ${isDropdownOpen ? 'animate-slideDown' : 'animate-slideUp'}`}>
          <div className='flex border-b border-gray-200/25 p-2'>
            <Image 
              src={'/assets/Tyres.png'}
              alt='Tyres'
              width={28}
              height={14}
              className='mr-4'
            />
            <p>Tyres</p>
          </div>
          <div className='flex border-b border-gray-200/25 p-2'>
            <Image 
              src={'/assets/Rims.png'}
              alt='Tyres'
              width={28}
              height={14}
              className='mr-4'
            />
            <p>Rims</p>
          </div>
          <div className='flex border-b border-gray-200/25 p-2'>
            <FaCarBattery size={26} className='mr-4' />
            <p>Butteries</p>
          </div>
        </div>
      )}
      <div className='flex items-center w-full my-3'>
        <PiCalculator className='text-[40px] mr-8' />
        <p className='text-base'>My orders</p>
      </div>
      <div className='flex items-center w-full my-3'>
        <CiFileOn className='text-[40px] mr-8' />
        <p className='text-base'>Add</p>
      </div>
      <div className='flex items-center w-full my-3'>
        <FaCircleHalfStroke className='text-[40px] mr-8' />
        <p className='text-base'>Discs</p>
      </div>
      <div className='flex items-center justify-between w-full my-3'>
        <span className='flex items-center'>
          <MdOutlineShoppingCart className='text-[40px] mr-8' />
          <p className='text-base'>Cart</p>
        </span>
        <span className='bg-white w-6 text-black rounded-md flex items-center justify-center h-full'>0</span>
      </div>
      <div className='flex items-center w-full my-3'>
        <IoMdInformationCircle className='text-[40px] mr-8' />
        <p className='text-base'>Information</p>
      </div>
      <div className='flex items-center justify-between w-full mt-auto mb-8'>
        <span className='flex items-center'>
          <MdOutlineLanguage className='text-[40px] mr-8' />
          <p className='text-base'>English</p>
        </span>
        <FaAngleDown />
      </div>
    </div>
  )
}

export default LeftSide;