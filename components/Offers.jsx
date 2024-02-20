"use client";

import { useState } from "react";
import BasicDiscount from "./BasicDiscount";
import Contacts from "./contacts/Contacts";
import { useTranslations } from "next-intl";

const Offers = () => {
  const t = useTranslations('Offers');
  const [selectedItem, setSelectedItem] = useState("Basic Discounts");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const getItemClassName = (item) => {
    return `cursor-pointer ${
      selectedItem === item && "text-[#2B71AF] border-b-2 border-[#2B71AF]"
    }`;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-full mr-6">
      <div className="flex gap-8 w-full mb-6 text-[#777777]">
        <p
          className={getItemClassName("Contacts")}
          onClick={() => handleItemClick("Contacts")}
        >
          {t("contacts")}
        </p>
        <p
          className={getItemClassName("Basic Discounts")}
          onClick={() => handleItemClick("Basic Discounts")}
        >
          {t("basicDiscounts")}
        </p>
      </div>
      {selectedItem === "Basic Discounts" ? <BasicDiscount /> : <Contacts />}
    </div>
  );
};

export default Offers;
