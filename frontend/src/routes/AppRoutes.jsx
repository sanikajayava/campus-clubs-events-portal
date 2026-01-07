// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./AdminRoutes.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="*" element={<div style={{ padding: 50, textAlign: "center" }}>
        <h1>Page Not Found</h1>
      </div>} />
    </Routes>
  );
};

export default AppRoutes;
