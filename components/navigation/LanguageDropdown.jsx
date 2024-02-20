import { MdOutlineLanguage } from "react-icons/md";

const LanguageDropdown = ({ selectedLanguage, onSelectChange }) => (
  <div className='flex items-center w-full mt-auto mb-12'>
    <MdOutlineLanguage className='text-[40px]' />
    <select
      value={selectedLanguage}
      onChange={onSelectChange}
      className="text-white bg-[#1d1d1d] rounded-md px-8 py-4 focus:outline-none focus:border-gray-500 transition duration-300 text-lg"
    >
      <option value='en'>English</option>
      <option value='lv'>Latvian</option>
    </select>
  </div>
);

export default LanguageDropdown;