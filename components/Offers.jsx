"use client";

import { useState } from "react";
import Contacts from "./contacts/Contacts";
import { useTranslations } from "next-intl";
import { Tab } from "@headlessui/react";
import CustomListbox from "./CustomListbox";
import CustomTable from "./CustomTable";

const Offers = () => {
  const t = useTranslations("Offers");
  const tt = useTranslations("BasicDiscount");
  const [currentTab, setCurrentTab] = useState(0);
  const applications = [
    { key: "car", value: tt("car") },
    { key: "tire", value: tt("tire") },
    { key: "engine", value: tt("engine") },
  ];
  const [selected, setSelected] = useState(applications[0]);

  return (
    <div className="w-full flex flex-col items-center justify-center h-full mr-6">
      <div className="flex flex-col gap-3 w-full mb-6 text-[#777777]">
        <Tab.Group>
          <Tab.List className="flex gap-6">
            <Tab
              className={`border-b-2 text-[20px] hover:border-[#2B71AF] font-medium ${
                currentTab === 0 ? 'border-b-[#2B71AF] text-[#2B71AF]' : ''
              }`}
              onClick={() => setCurrentTab(0)}
            >
              {t('contacts')}
            </Tab>
            <Tab
              className={`border-b-2 text-[20px] font-medium hover:border-[#2B71AF] ${
                currentTab === 1 ? 'border-b-[#2B71AF] text-[#2B71AF]' : ''
              }`}
              onClick={() => setCurrentTab(1)}
            >
              {t('basicDiscounts')}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Contacts />
            </Tab.Panel>
            <Tab.Panel>
              <div className="w-full flex flex-col gap-4 items-center justify-center text-black">
                <CustomListbox
                  applications={applications}
                  selected={selected}
                  setSelected={setSelected}
                />
                <CustomTable t={tt} />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Offers;
