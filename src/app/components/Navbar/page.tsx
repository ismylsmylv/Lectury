import { FiPlusCircle } from "react-icons/fi";
import { IoNotificationsOutline, IoSearch } from "react-icons/io5";
import { LuIndentDecrease } from "react-icons/lu";
import "./style.scss";
// import { IoNotifications } from "react-icons/io5";
import ProfileImg from "@/app/assets/img/profile.png";
import Image from "next/image";
import Link from "next/link";
type Props = {};

function Navbar({}: Props) {
  return (
    <div className="Navbar flex justify-between items-center w-full p-5">
      <div className="left flex w-full gap-5 items-center ">
        <button>
          <LuIndentDecrease size={25} color="#ffffff" />
        </button>
        <div className="searchbar flex gap-3 items-center p-4 rounded">
          <IoSearch size={20} color="#ffffff" />
          <input type="text" placeholder="Search Forums..." />
        </div>
      </div>
      <div className="right flex justify-end items-center gap-5">
        <button>
          <FiPlusCircle size={25} />
        </button>
        <Link href={"/notifications"}>
          <IoNotificationsOutline size={27} />
        </Link>
        <Link href={"/account"} className="accountLink">
          <Image
            alt="Profile picture"
            src={ProfileImg}
            className="profilePicture rounded-full"
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
