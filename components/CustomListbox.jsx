import { Listbox, Transition } from '@headlessui/react'
import { Fragment } from "react";
import { FaSortDown } from "react-icons/fa";

const CustomListbox = ({applications, selected, setSelected}) => {
  return(
    <Listbox 
      value={selected} 
      onChange={setSelected}
      className="w-full my-3"
    >
      <div className='relative w-full'>
        <Listbox.Button className="w-[100%] px-4 py-2 flex justify-between rounded-md bg-[#2B71AF] text-white">
          {selected.value}<FaSortDown />
        </Listbox.Button>
        <Transition 
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options>
            {applications.map((app) => (
              <Listbox.Option
                key={app.key}
                value={app}
                className="bg-gray-200 hover:bg-gray-300 pl-3"
              >
                {app.value}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default CustomListbox;