import { useState } from "react";
import { useWindowWidth } from "src/hooks/useWindowWidth";

interface TextContainerProps {
  title: string;
  desc: string;
  user: {
    img: string;
    name: string;
    role: string;
  };
}

const TextContainer: React.FC<TextContainerProps> = ({ title, desc, user }) => {
  const windowWidth = useWindowWidth();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DynamicContainer: React.FC<{
    style?: React.CSSProperties;
  }> = ({ style }) => {
    return (
      <section className="mt-2" style={style}>
        <div className="bg-gray-120 p-5 rounded-lg shadow-md space-y-6 mb-10">
          {/* Head */}
          <div
            className="flex flex-row justify-between items-center"
            style={{
              maxHeight: "200px",
            }}
          >
            <div>
              <h2 className="text-[13pt] font-semibold">
                {title.length > 30 ? title.slice(0, 30) + "..." : title}
              </h2>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <div className="cursor-pointer">
                <img height={30} width={30} src={user.img} />
              </div>
              <div className="flex flex-col justify-between">
                <h1 className="font-semibold font-mono text-[11pt]">
                  {user.name}
                </h1>
                <span className="text-gray-700 text-[9pt]">{user.role}</span>
              </div>
            </div>
          </div>

          <p className="text-[12pt] text-gray-800 font-medium font-serif">
            {desc.length > 200 ? desc.slice(0, 200) + "..." : desc}
          </p>

          <div className="mt-5">
            <span
              onClick={handleOpen}
              className="cursor-pointer font-semibold underline"
            >
              Read full
            </span>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <DynamicContainer
        style={windowWidth < 700 ? {} : { maxWidth: "500px" }}
      />

      {/* Custom Modal */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-black opacity-60 absolute top-0 left-0 w-full h-full"></div>
          <div className="bg-gray-50 p-6 rounded-lg m-5 relative z-60 max-w-[500px]">
            <h2 className="text-[14pt] mb-4 font-semibold">{title}</h2>
            <p className="text-[12pt] text-gray-800">{desc}</p>
            <button
              onClick={handleClose}
              className="underline font-semibold mt-4 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TextContainer;
