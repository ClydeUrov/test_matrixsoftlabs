import Map from "./Map";
import { useTranslations } from "next-intl";
import { 
  Table, 
  TableBody,
  TableCell,
  TableHeader,
  TableRow, 
} from "../ui/table";

const columns = [
  {
    key: "name",
    name: "Name"
  },
  {
    key: "info",
    name: "Info"
  }
];

const Contacts = () => {
  const t = useTranslations("Contacts");
  const rows1 = [
    {
      key: "1",
      name: t("workingTime"),
      info: "P- Pk. 9:00 - 18:00"
    },
    {
      key: "2",
      name: t("storeAddress"),
      info: "Krustpils lela 6, Riga, LV-1073"
    },
    {
      key: "3",
      name: t("officePhone"),
      info: "+371 26606262"
    },
    {
      key: "4",
      name: t("e-mail"),
      info: "info@tireshop.lv"
    }
  ];
  
  const rows2 = [
    {
      key: "1",
      name: t("phone"),
      info: "+371 26916199"
    },
    {
      key: "2",
      name: t("e-mail"),
      info: "kredit@tireshop.lv"
    }
  ];

  return (
    <div className="w-full flex flex-col text-black">
      <Table>
        <TableHeader hidden>
        </TableHeader>
        <TableBody className="text-[16px]">
          {rows1.map((row) => (
            <TableRow key={row.key} className="hover:bg-gray-200 cursor-pointer border-b-gray-300">
              <TableCell className="font-medium break-words">{row.name}</TableCell>
              <TableCell className="font-medium break-words">{row.info} %</TableCell>
            </TableRow>
          ))}
          <h4 className="font-bold w-full my-4 ml-4">{t("contacts")}:</h4>
          {rows2.map((row) => (
            <TableRow key={row.key} className="hover:bg-gray-200 cursor-pointer border-b-gray-300">
              <TableCell className="font-medium break-words">{row.name}</TableCell>
              <TableCell className="font-medium break-words">{row.info} %</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div id="map" className="mt-8">
        <Map />
      </div>
    </div>
  )
}

export default Contacts;