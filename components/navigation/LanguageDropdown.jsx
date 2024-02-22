import { MdOutlineLanguage } from "react-icons/md";
import { 
  Select, 
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "../ui/select";

const LanguageDropdown = ({ selectedLanguage, onSelectChange, modal }) => (
  <div className={`${modal ? "leftSideButton" : "bottom-5 left-6 absolute flex items-center w-full mt-auto cursor-pointer"}`}>
    <Select value={selectedLanguage} onValueChange={onSelectChange}>
      <SelectTrigger className="xl:w-[65%] w-[100%] bg-[#1d1d1d] text-white border-0 border-transparent px-0">
        <SelectValue>
          <span className="flex items-center justify-center gap-10 text-[18px]">
            <MdOutlineLanguage className="text-[40px]" />
            {selectedLanguage === "en" ? "English" : "Latvian"}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            value="en"
          >
            English
          </SelectItem>
          <SelectItem
            value="lv"
          >
            Latvian
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
);

export default LanguageDropdown;
