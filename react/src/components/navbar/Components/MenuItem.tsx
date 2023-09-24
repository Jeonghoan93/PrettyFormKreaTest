interface MenuItemProps {
  onClick: () => void;
  label: string;
  bold?: boolean;
  semibold?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  bold,
  semibold,
}) => {
  let fontWeightClass = "";

  if (bold) {
    fontWeightClass = "font-bold";
  } else if (semibold) {
    fontWeightClass = "font-semibold";
  } else {
    fontWeightClass = "font-normal"; // default
  }

  return (
    <div
      onClick={onClick}
      className={`
        px-4 
        py-3 
        hover:bg-neutral-100 
        transition
        ${fontWeightClass}
      `}
    >
      {label}
    </div>
  );
};

export default MenuItem;
