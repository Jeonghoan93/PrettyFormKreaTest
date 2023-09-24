import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cv from "./CV";
import RootLayout from "./layouts/RootLayout";
import Form from "./pages/Form";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            {/* Default redirect to /step1 */}
            <Route index element={<Form page="step1" />} />
            <Route path="step1" element={<Form page="step1" />} />
            <Route path="step2" element={<Form page="step2" />} />
            <Route path="step3" element={<Form page="step3" />} />
            <Route path="step4" element={<Form page="step4" />} />
            <Route path="cv" element={<Cv />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
