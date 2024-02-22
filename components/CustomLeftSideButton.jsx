export const CustomLeftSideButton = ({ image, name, number, faDown, onClick }) => (
  <div
    className={`leftSideButton ${
      number >= 0 || faDown ? "justify-between" : ""
    }`}
    onClick={() => onClick()}
  >
    <span className="flex items-center">
      {image}
      <p className="text-base">{name}</p>
    </span>
    {number >= 0 && (
      <span className="bg-white w-6 text-black rounded-md flex items-center justify-center h-full">
        {number}
      </span>
    )}
    {faDown && faDown}
  </div>
);