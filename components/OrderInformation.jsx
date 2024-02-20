import { TiMail } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { Divider } from "@nextui-org/react";

const OrderInformation = () => {
  return (
    <div className='w-6/12 bg-[#1d1d1d] text-white text-[15px] rounded-[24px] py-6 pl-6 max-w-[388px]'>
      <h3 className="text-[18px] my-4">Find out information about orders:</h3>

      <div className="flex gap-3 my-2">
        <div className="bg-[#2B71AF] rounded-full w-10 h-10 flex items-center justify-center">
          <TiMail className="mb-1" size={27} />
        </div>
        <div>
          <p>Email us:</p>
          <p>shop@tireshop.lv</p>
        </div>
      </div>
      <Divider className="my-4 max-w-[220px] bg-slate-400 ml-auto" />
      <div className="flex gap-3 my-2">
        <div className="bg-[#2B71AF] rounded-full w-10 h-10 flex items-center justify-center">
          <FiPhone size={20} />
        </div>
        <div>
          <p>Phone number:</p>
          <p>+371 25737000</p>
        </div>
      </div>
      <Divider className="my-4 max-w-[220px] bg-slate-400 ml-auto" />
      <p className="pr-5">If you have specific questions about clarifying the terms of cooperation, please contact our hired managers.</p>

      <h3 className="text-[18px] my-4">Your manager:</h3>

      <p>Wholesale prices and discounts</p>
      <div className="flex gap-3 my-2">
        <div className="bg-[#2B71AF] rounded-full w-10 h-10 flex items-center justify-center">
          <FaRegUser size={20} />
        </div>
        <div>
          <p>First name:</p>
          <p>Uldis Taurins</p>
        </div>
      </div>
      <Divider className="my-4 max-w-[220px] bg-slate-400 ml-auto" />
      <div className="flex gap-3 my-2">
        <div className="bg-[#2B71AF] rounded-full w-10 h-10 flex items-center justify-center">
          <TiMail className="mb-1" size={27} />
        </div>
        <div>
          <p>Email us:</p>
          <p>shop@tireshop.lv</p>
        </div>
      </div>
      <Divider className="my-4 max-w-[220px] bg-slate-400 ml-auto" />
      <div className="flex gap-3 my-2">
        <div className="bg-[#2B71AF] rounded-full w-10 h-10 flex items-center justify-center">
          <FiPhone size={20} />
        </div>
        <div>
          <p>Phone number:</p>
          <p>+371 25737000</p>
        </div>
      </div>
      <Divider className="my-4 max-w-[220px] bg-slate-400 ml-auto" />
    </div>
  )
}

export default OrderInformation;