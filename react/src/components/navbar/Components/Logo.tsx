import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className={"cursor-pointer font-bold text-xl"}
    >
      Coding Test
    </div>
  );
};

export default Logo;
