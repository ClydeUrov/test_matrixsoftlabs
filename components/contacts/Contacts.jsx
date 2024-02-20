import Map from "./Map";

const rows1 = [
  {
    key: "1",
    name: "Working time",
    info: "P- Pk. 9:00 - 18:00"
  },
  {
    key: "2",
    name: "Store / Warehouse address",
    info: "Krustpils lela 6, Riga, LV-1073"
  },
  {
    key: "3",
    name: "Office phone number",
    info: "+371 26606262"
  },
  {
    key: "4",
    name: "E-mail",
    info: "info@tireshop.lv"
  }
];

const rows2 = [
  {
    key: "1",
    name: "Phone num.",
    info: "+371 26916199"
  },
  {
    key: "2",
    name: "E-mail",
    info: "kredit@tireshop.lv"
  }
];

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
  return (
    <section className="w-full flex flex-col">
      <table className="w-full text-base">
        <tbody >
          {rows1.map((row) =>
            <tr key={row.key} className="border-y border-gray-300">
              {columns.map((column) =>
                <td key={column.key} className="px-4 py-2">{row[column.key]}</td>
              )}
            </tr>
          )}
        </tbody>
        <h4 className="font-bold my-2 ml-4">Stationery contacts</h4>
        <tbody >
          {rows2.map((row) =>
            <tr key={row.key} className="border-b border-gray-300">
              {columns.map((column) =>
                <td key={column.key} className="px-4 py-2">{row[column.key]}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
      <div id="map" className="mt-8">
        <Map />
      </div>
    </section>
  )
}

export default Contacts;