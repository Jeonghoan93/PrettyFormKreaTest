import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(root!);
rootContainer.render(<App />);
