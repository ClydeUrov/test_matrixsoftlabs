"use client";

import { useState } from "react";
import BasicDiscount from "./BasicDiscount";
import Contacts from "./contacts/Contacts";
import { useTranslations } from "next-intl";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const Offers = () => {
  const t = useTranslations("Offers");

  return (
    <div className="w-full flex flex-col items-center justify-center h-full mr-6">
      <div className="flex flex-col gap-3 w-full mb-6 text-[#777777]">
        <Tabs variant="underlined" aria-label="Tabs variants" color="primary">
          <Tab key="contacts" title={t("contacts")}>
            <Contacts />
          </Tab>

          <Tab key="basicDiscounts" title={t("basicDiscounts")}>
            <BasicDiscount />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Offers;
