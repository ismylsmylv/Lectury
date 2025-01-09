import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { forums } from "./mockdata";
import "./style.scss";
type Props = {};

function ForumMap({}: Props) {
  return (
    <div className="ForumMap flex gap-5 p-5">
      {/* <ChartExample /> */}
      {forums.map((forum) => {
        const size = forum.departments.length * 50;
        return (
          <div
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
          </div>
        );
      })}
    </div>
  );
}

export default ForumMap;
