import Map from "./Map";
import { useTranslations } from "next-intl";

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
    <section className="w-full flex flex-col text-black">
      <table className="w-full text-base">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-2">{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows1.map((row) => (
            <tr key={row.key} className="border-y border-gray-300">
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-2">{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="font-bold my-2 ml-4">Stationery contacts</h4>
      <table className="w-full text-base">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-2">{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows2.map((row) => (
            <tr key={row.key} className="border-b border-gray-300">
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-2">{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div id="map" className="mt-8">
        <Map />
      </div>
    </section>
  )
}

export default Contacts;