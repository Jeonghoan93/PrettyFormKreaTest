import Container from "../Container";
import Menus from "../Menus";
import Logo from "./Components/Logo";
import MainMenu from "./Components/MainMenu";

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <div className="relative">
              <div className="flex flex-row">
                <Logo />
              </div>
            </div>

            <MainMenu />
          </div>
        </Container>
      </div>
      <Menus menus={["Step1", "Step2", "Step3", "Step4", "CV"]} />
    </div>
  );
};

export default Navbar;
