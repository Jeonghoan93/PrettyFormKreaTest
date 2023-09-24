import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface MenuBoxProps {
  label: string;
  selected?: boolean;
}

const MenuBox: React.FC<MenuBoxProps> = ({ label, selected }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(label === "CV" ? `/cv` : `/${label.toLowerCase()}`);
  }, [label, navigate]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        pt-3
        pb-2
        border-b-2
        hover:text-neutral-900
        transition
        cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <div className="font-semibold text-[10pt]">{label}</div>
    </div>
  );
};

export default MenuBox;
