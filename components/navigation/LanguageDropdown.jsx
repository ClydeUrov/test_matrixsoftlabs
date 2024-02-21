import { Listbox } from "@headlessui/react";
import { MdOutlineLanguage } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";

const LanguageDropdown = ({ selectedLanguage, onSelectChange, modal }) => (
  <div className={modal ? "leftSideButton" : "bottom-5 left-6 absolute flex items-center w-full mt-auto cursor-pointer" }>
    <Listbox value={selectedLanguage} onChange={onSelectChange} >
      <div className="flex flex-col">
        <Listbox.Button className="flex items-center gap-10 text-[18px]">
          <MdOutlineLanguage className="text-[40px]" />
          {selectedLanguage === "en" ? "English" : "Latvian"}
          <FaSortDown />
        </Listbox.Button>
        <Listbox.Options className="mt-2 z-10">
          <Listbox.Option
            key="en"
            value="en"
            className="py-2 px-4 cursor-pointer text-center border-b-1"
          >
            English
          </Listbox.Option>
          <Listbox.Option
            key="lv"
            value="lv"
            className="py-2 px-4 cursor-pointer text-center border-b-1"
          >
            Latvian
          </Listbox.Option>
        </Listbox.Options>
      </div>
    </Listbox>
  </div>
);

export default LanguageDropdown;
