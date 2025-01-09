import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { forums } from "./mockdata";
import "./style.scss";
import Link from "next/link";
type Props = {};

function ForumMap({}: Props) {
  return (
    <div className="ForumMap flex gap-5 p-5 rounded">
      {/* <ChartExample /> */}
      {forums.map((forum) => {
        const size = forum.departments.length * 50;
        return (
          <Link
            href={"#"}
            className="forum bg-cover bg-no-repeat bg-center rounded-full"
            key={uuidv4()}
            style={{
              width: `${size}px`,
              height: `${size}px`
            }}
          >
            {/* {forum.title} */}
            <Image src={forum.icon} alt="forum icon" />
            {/* {forum.departments.map((department) => (
              <div key={uuidv4()} className="department">
                {department.name}
              </div>
            ))} */}
          </Link>
        );
      })}
    </div>
  );
}

export default ForumMap;
