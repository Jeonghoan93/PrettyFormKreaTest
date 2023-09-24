import React from "react";

interface ButtonProps {
  onClick?: () => void;
  name: string;
  idName?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, name, idName }) => {
  return (
    <button
      data-testid={idName}
      onClick={onClick}
      className="shadow-md cursor-pointer font-bold bg-gray-200 text-center border-[1px] rounded-lg px-3 py-1 w-full"
    >
      {name}
    </button>
  );
};

export default Button;
