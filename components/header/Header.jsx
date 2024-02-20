import { FaAngleRight } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";
import UserMark from "./UserMark";

const Header = () => {
  const user = {}
  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex items-center gap-5 text-[#777777]">
        <p className="text-base">Home</p>
        <FaAngleRight size={14} />
      </div>
      <div className="flex gap-12 items-center">
        <UserMark user={user} />
        <RxExit size={30} />
      </div>
    </header>
  )
}

export default Header;