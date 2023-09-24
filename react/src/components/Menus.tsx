import { useLocation } from "react-router-dom";
import MenuBox from "src/components/MenuBox";

interface MenusProps {
  menus: string[];
}

const Menus: React.FC<MenusProps> = ({ menus }) => {
  const location = useLocation();

  const currentStep = location.pathname.split("/").pop();

  return (
    <div
      className="
        max-w-[2520px]
        mx-auto
        xl:px-16
        md:px-7
        sm:px-2
        px-5
      "
    >
      <div
        className="
          flex 
          flex-row 
          items-center 
          overflow-x-auto
          gap-4
        "
      >
        {menus.map((item) => (
          <MenuBox
            key={item}
            label={item}
            selected={currentStep === item.toLowerCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default Menus;
