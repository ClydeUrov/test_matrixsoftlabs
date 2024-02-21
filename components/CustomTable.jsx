import { IoIosSunny } from "react-icons/io";
import { TbSnowflake } from "react-icons/tb";
import { TireRows } from "@/constants/TableRows";

export default function CustomTable({ t }) {
  const columns = [
    {
      key: "wires",
      name: t("Tires"),
    },
    {
      key: "summer",
      name: t("Summer"),
    },
    {
      key: "winter",
      name: t("Winter"),
    },
  ];

  return (
    <table className="w-full">
      <thead>
        <tr className="border-y border-gray-400">
          {columns.map((column) => (
            <th key={column.key} className="px-4 py-2 text-left">
              <span className="flex gap-1">
                {column.key === "summer" && (
                  <IoIosSunny color="#2B71AF" size={20} />
                )}
                {column.key === "winter" && (
                  <TbSnowflake color="#2B71AF" size={20} />
                )}
                {column.name}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TireRows.map((row) => (
          <tr key={row.key} className="border-y border-gray-300">
            {columns.map((column) => (
              <td key={column.key} className="px-4 py-2">
                {row[column.key]} {column.key === "wires" || ("summer" && " %")}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
