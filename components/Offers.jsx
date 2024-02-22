"use client";

import { useState } from "react";
import Contacts from "./contacts/Contacts";
import { useTranslations } from "next-intl";
import CustomListbox from "./CustomListbox";
import CustomTable from "./CustomTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Offers = () => {
  const t = useTranslations("Offers");
  const tt = useTranslations("BasicDiscount");
  const [currentTab, setCurrentTab] = useState(1);
  const applications = [
    { key: "car", value: tt("car") },
    { key: "tire", value: tt("tire") },
    { key: "engine", value: tt("engine") },
  ];
  const [selected, setSelected] = useState(applications[0].key);

  return (
    <div className="w-full flex flex-col items-center justify-center h-full mr-6">
      <div className="flex flex-col gap-3 w-full mb-6 text-[#777777]">
        <Tabs defaultValue='basicDiscounts' >
          <TabsList className="gap-6 bg-transparent mb-3">
            <TabsTrigger 
              className={`border-b-2 text-[20px] hover:border-[#2B71AF] font-medium ${currentTab === 0 ? 'border-b-[#2B71AF]' : ''}`}
              onClick={() => setCurrentTab(0)} 
              value='contacts'
            >
              <span className={currentTab === 0 ? "text-[#2B71AF]" : ""}>{t('contacts')}</span>
            </TabsTrigger>
            <TabsTrigger 
              className={`border-b-2 text-[20px] hover:border-[#2B71AF] font-medium ${currentTab === 1 ? 'border-b-[#2B71AF]' : ''}`}
              onClick={() => setCurrentTab(1)} 
              value='basicDiscounts'
            >
              <span className={currentTab === 1 ? "text-[#2B71AF]": ''}>{t('basicDiscounts')}</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value='contacts'>
            <Contacts />
          </TabsContent>
          <TabsContent value='basicDiscounts'>
            <div className="w-full flex flex-col gap-4 items-center justify-center text-black">
              <CustomListbox
                applications={applications}
                selected={selected}
                setSelected={setSelected}
              />
              <CustomTable t={tt} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Offers;
