"use client";

import { useState, useTransition } from "react";
import { IoMdSearch, IoMdInformationCircle } from "react-icons/io";
import { PiCalculator } from "react-icons/pi";
import { CiFileOn } from "react-icons/ci";
import { FaCircleHalfStroke, FaSortDown } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { FaCarBattery } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import LanguageDropdown from "./LanguageDropdown";

const DropdownItem = ({ icon, text }) => (
  <div className='flex border-b border-gray-200/25 p-2'>
    {icon}
    <p>{text}</p>
  </div>
);

const LeftSidebar = () => {
  const [isPanding, startTransition] = useTransition();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const router = useRouter();
  const t = useTranslations("LeftSidebar");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onSelectChange = (e) => {
    const nextLocal = e.target.value;
    setSelectedLanguage(nextLocal);
    startTransition(() => {
      router.replace(`/${nextLocal}`);
    });
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
          <p className='text-base'>{t("browse")}</p>
        </span>
        <FaSortDown className='text-base ml-2' />
      </div>
      {isDropdownOpen && (
        <div className={`ml-3 ${isDropdownOpen ? 'animate-slideDown' : 'animate-slideUp'}`}>
          <DropdownItem icon={<Image src={'/assets/Tyres.png'} alt='Tyres' width={28} height={14} className='mr-4' />} text={t('tyres')} />
          <DropdownItem icon={<Image src={'/assets/Rims.png'} alt='Rims' width={28} height={14} className='mr-4' />} text={t('rims')} />
          <DropdownItem icon={<FaCarBattery size={26} className='mr-4' />} text={t('butteries')} />
        </div>
      )}
      <div className='flex items-center w-full my-3'>
        <PiCalculator className='text-[40px] mr-8' />
        <p className='text-base'>{t('myOrders')}</p>
      </div>
      <div className="flex items-center w-full my-3">
        <CiFileOn className="text-[40px] mr-8" />
        <p className="text-base">{t("discs")}</p>
      </div>
      <div className="flex items-center w-full my-3">
        <FaCircleHalfStroke className="text-[40px] mr-8" />
        <p className="text-base">{t("add")}</p>
      </div>
      <div className="flex items-center justify-between w-full my-3">
        <span className="flex items-center">
          <MdOutlineShoppingCart className="text-[40px] mr-8" />
          <p className="text-base">{t("cart")}</p>
        </span>
        <span className="bg-white w-6 text-black rounded-md flex items-center justify-center h-full">
          0
        </span>
      </div>
      <div className="flex items-center w-full my-3">
        <IoMdInformationCircle className="text-[40px] mr-8" />
        <p className="text-base">{t("information")}</p>
      </div>
      <LanguageDropdown selectedLanguage={selectedLanguage} onSelectChange={onSelectChange} />
    </div>
  );
};

export default LeftSidebar;
