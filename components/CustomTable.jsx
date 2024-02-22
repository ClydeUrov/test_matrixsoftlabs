import { IoIosSunny } from "react-icons/io";
import { TbSnowflake } from "react-icons/tb";
import { TireRows } from "@/constants/TableRows";
import { 
  Table, 
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow, 
} from "./ui/table";

export default function CustomTable({ t }) {
  const columns = [
    { key: "wires", name: t("Tires"), },
    { key: "summer", name: t("Summer"), },
    { key: "winter", name: t("Winter"), },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow className="text-[18px] border-b-gray-400">
          {columns.map((column) => (
            <TableHead key={column.key} className="min-w-[80px] text-black" >
              <span className="flex gap-2">
                {column.key === "summer" ? (
                  <IoIosSunny color="#2B71AF" size={20} />
                ) : column.key === "winter" ? (
                  <TbSnowflake color="#2B71AF" size={20} />
                ) : null}
                {column.name}
              </span>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-[16px]">
        {TireRows.map((row) => (
          <TableRow key={row.key} className="hover:bg-gray-200 cursor-pointer border-b-gray-300">
            <TableCell className="font-medium">{row.wires}</TableCell>
            <TableCell className="font-medium">{row.summer} %</TableCell>
            <TableCell className="font-medium">{row.winter} %</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
