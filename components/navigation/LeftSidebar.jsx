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
import { useRouter, usePathname } from "next/navigation";
import LanguageDropdown from "./LanguageDropdown";
import { CustomLeftSideButton } from "../CustomLeftSideButton";

const DropdownItem = ({ icon, text }) => (
  <div className="flex border-b border-gray-200/25 p-2">
    {icon}
    <p>{text}</p>
  </div>
);

const LeftSidebar = ({ modal }) => {
  const [isPanding, startTransition] = useTransition();
  const path = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState(path.slice(1));
  const router = useRouter();
  const t = useTranslations("LeftSidebar");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onSelectChange = (e) => {
    setSelectedLanguage(e);
    startTransition(() => {
      router.replace(`/${e}`);
    });
  };

  return (
    <div
      className={
        modal
          ? "w-[300px] text-white p-6 transition delay-150 flex flex-col"
          : "xl:fixed h-[100vh] xl:flex xl:flex-col xl:w-3/12 hidden max-w-[380px] text-white p-6 transition delay-150 w-0"
      }
    >
      <Image
        src="/assets/tireshop.png"
        alt="TireShop"
        className={modal ? "my-2" : "my-8"}
        width={246}
        height={34}
      />
      <CustomLeftSideButton
        image={<IoMdSearch className="text-[40px] mr-8" />}
        name={t("browse")}
        faDown={<FaSortDown className="text-base ml-2" />}
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div className={`ml-3 ${
          isDropdownOpen ? "animate-slideDown" : "animate-slideUp"
        }`}>
          <DropdownItem
            icon={
              <Image
                src={"/assets/Tyres.png"}
                alt="Tyres"
                width={28}
                height={14}
                className="mr-4"
              />
            }
            text={t("tyres")}
          />
          <DropdownItem
            icon={
              <Image
                src={"/assets/Rims.png"}
                alt="Rims"
                width={28}
                height={14}
                className="mr-4"
              />
            }
            text={t("rims")}
          />
          <DropdownItem
            icon={<FaCarBattery size={26} className="mr-4" />}
            text={t("butteries")}
          />
        </div>
      )}
      <CustomLeftSideButton
        image={<PiCalculator className="text-[40px] mr-8" />}
        name={t("myOrders")}
      />
      <CustomLeftSideButton
        image={<CiFileOn className="text-[40px] mr-8" />}
        name={t("discs")}
      />
      <CustomLeftSideButton
        image={<FaCircleHalfStroke className="text-[40px] mr-8" />}
        name={t("add")}
      />
      <CustomLeftSideButton
        image={<MdOutlineShoppingCart className="text-[40px] mr-8" />}
        name={t("cart")}
        number={0}
      />
      <CustomLeftSideButton
        image={<IoMdInformationCircle className="text-[40px] mr-8" />}
        name={t("information")}
      />
      <LanguageDropdown
        selectedLanguage={selectedLanguage}
        onSelectChange={onSelectChange}
        modal={modal}
      />
    </div>
  );
};

export default LeftSidebar;
