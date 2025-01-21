import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Python from "./Components/Training/Python/Python";
import Verify from "./Components/Training/Certificate_vertification/Verify";
import Zoho from "./Components/Zoho";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect the root path to the Python course */}
        <Route
          path="/"
          element={<Navigate to="/training/python-programming" replace />}
        />
        <Route path="/training/python-programming" element={<Python />} />
        <Route path="/certificate_verify" element={<Verify />} />
        {/* Redirect 404 paths to the Python course */}
        <Route
          path="/training/*"
          element={<Navigate to="/training/python-programming" replace />}
        />
        <Route
          path="*"
          element={<h1 className="text-center">404 Page Not Found</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
