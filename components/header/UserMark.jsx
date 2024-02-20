import Image from "next/image";
import { FaUser } from "react-icons/fa";

const UserMark = ({user, client}) => {
  return (
    <div className="flex flex-row items-center gap-5">
      <div className="flex flex-col items-end">
        <span className="font-bold">{user?.username || "MatrixSoftLabs"}</span>
        {user?.rule || client}
      </div>
      {user.image ? (
        <Image
          src={user.image}
          alt="UserImage"
          width={41}
          height={41}
        />
      ) : (
        <FaUser size={41} className="p-2 rounded-full border-solid border border-black" />
      )}
    </div>
  )
}

export default UserMark;