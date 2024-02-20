import TireTable from "./TireTable";

const BasicDiscount = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <p className="w-full text-left font-bold">Application</p>
      <select className="w-full bg-[#2B71AF] text-white font-bold p-1.5 rounded-md mb-2">
        <option value="car" className="bg-white text-black p-1">
          CAR
        </option>
        <option value="tire" className="bg-white text-black p-1">
          TIRE
        </option>
        <option value="engine" className="bg-white text-black p-1">
          ENGINE
        </option>
      </select>
      <TireTable />
    </div>
  )
}

export default BasicDiscount;