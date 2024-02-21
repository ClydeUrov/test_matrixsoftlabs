import { useTranslations } from "next-intl";
import TireTable from "./TireTable";

const BasicDiscount = () => {
  const t = useTranslations('BasicDiscount');

  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center text-black">
      <p className="w-full text-left font-bold">{t('application')}</p>
      <select className="w-full bg-[#2B71AF] text-white font-bold p-1.5 rounded-md mb-2">
        <option value="car" className="bg-white text-black p-1">
          {t('car')}
        </option>
        <option value="tire" className="bg-white text-black p-1">
          {t('tire')}
        </option>
        <option value="engine" className="bg-white text-black p-1">
          {t('engine')}
        </option>
      </select>
      <TireTable t={t} />
    </div>
  )
}

export default BasicDiscount;