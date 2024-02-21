import { MdOutlineLanguage } from "react-icons/md";

const LanguageDropdown = ({ selectedLanguage, onSelectChange, modal }) => (
  <div className={modal ? "leftSideButton" : "bottom-5 left-6 absolute flex items-center w-full mt-auto cursor-pointer" }>
    <MdOutlineLanguage className="text-[40px]" />
    <select
      value={selectedLanguage}
      onChange={onSelectChange}
      className="text-white cursor-pointer bg-[#1d1d1d] rounded-md px-8 py-4 focus:outline-none focus:border-gray-500 transition duration-300 text-lg"
    >
      <option value="en">English</option>
      <option value="lv">Latvian</option>
    </select>
  </div>
);

export default LanguageDropdown;
