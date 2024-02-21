import { FaAngleRight } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";
import UserMark from "./UserMark";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations('Header');
  const user = {}
  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex items-center gap-5 text-[#777777]">
        <p className="text-base">{t("home")}</p>
        <FaAngleRight size={14} />
      </div>
      <div className="flex lg:gap-10 gap-2 items-center">
        <UserMark user={user} client={t("client")} />
        <RxExit size={30} />
      </div>
    </header>
  )
}

export default Header;