import { TiMail } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";

const ContactInfo = ({ icon, title, content }) => (
  <>
    <div className="flex gap-4 my-2">
      <div className="bg-[#2B71AF] rounded-full w-10 h-10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>
    <Divider className="my-4 max-w-[220px] bg-slate-400 ml-auto" />
  </>
);

const ContactSection = ({ title, children }) => (
  <>
    <h3 className="text-[18px] my-5">{title}</h3>
    {children}
  </>
);

const OrderInformation = () => {
  const t = useTranslations("OrderInformation");
  return (
    <div className="w-6/12 lg:mt-14 bg-[#1d1d1d] text-white min-w-52 text-[15px] rounded-[24px] py-6 pl-6 h-fit">
      <ContactSection title={t("firstTitle")}>
        <ContactInfo
          icon={<TiMail className="mb-1" size={27} />}
          title={t("emailUs")}
          content="shop@tireshop.lv"
        />
        <ContactInfo
          icon={<FiPhone size={20} />}
          title={t("phone")}
          content="+371 25737000"
        />
        <p className="pr-5">{t("text")}</p>
      </ContactSection>
      <ContactSection title={t("secondTitle")}>
        <p className="mb-4">{t("text2")}</p>
        <ContactInfo
          icon={<FaRegUser size={20} />}
          title={t("firstName")}
          content="Uldis Taurins"
        />
        <ContactInfo
          icon={<TiMail className="mb-1" size={27} />}
          title={t("emailUs")}
          content="shop@tireshop.lv"
        />
        <ContactInfo
          icon={<FiPhone size={20} />}
          title={t("phone")}
          content="+371 25737000"
        />
      </ContactSection>
    </div>
  );
};

export default OrderInformation;
