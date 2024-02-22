import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const CustomListbox = ({applications, selected, setSelected}) => {
  return(
    <div className='mt-2 w-full'>
      <Select value={selected} onValueChange={setSelected}>
        <SelectTrigger className="w-full bg-[#2B71AF] text-white">
          <SelectValue>{selected ? selected.value : "Select a value"}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {applications.map((item) => (
              <SelectItem 
                key={item.key}
                value={item.key}
              >
                {item.value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default CustomListbox;