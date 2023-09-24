import { Link } from "react-router-dom";

const MainMenu: React.FC = () => {
  return (
    <div className="relative ml-6">
      <div className="flex flex-row items-center gap-3">
        <Link to={"https://github.com/Jeonghoan93"}>
          <div
            className="
            text-sm 
          font-normal
          underline
            py-1 
            px-2 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
          >
            Git repo
          </div>
        </Link>

        <Link to={"https://www.linkedin.com/in/jimmy-h-199814242/"}>
          <div
            className="
            text-sm 
          font-normal
          underline
            py-1 
            px-2 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
          >
            Linkedin
          </div>
        </Link>

        <Link to={"https://d27g9rjxpg3tzd.cloudfront.net/"}>
          <div
            className="
            text-sm 
          font-normal
          underline
            py-1 
            px-2 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
          >
            Portfolio
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
