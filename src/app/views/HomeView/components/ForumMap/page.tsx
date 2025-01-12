import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { forums } from "./mockdata";
import "./style.scss";
import Link from "next/link";
import { sortDepartmentsByLength } from "@/app/utils/functions";
type Props = {};

function ForumMap({}: Props) {
  return (
    <div className="ForumMap flex flex-wrap gap-5 p-5 rounded-3xl">
      {/* <ChartExample /> */}
      {sortDepartmentsByLength(forums).map((forum) => {
        const size = forum.departments.length * 50;
        return (
          <Link
            href={"#"}
            className="forum bg-cover bg-no-repeat bg-center rounded-full mr-1 ml-1"
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
