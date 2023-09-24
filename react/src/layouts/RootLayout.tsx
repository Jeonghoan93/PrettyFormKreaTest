import { Outlet } from "react-router-dom";
import Navbar from "src/components/navbar/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <Outlet />
      </div>
    </>
  );
}
