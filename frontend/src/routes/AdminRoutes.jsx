import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

import AdminDashboard from "../Pages/admin/AdminDashboard";
import UserManagement from "../Pages/admin/UserManagement";
import ClubManagement from "../Pages/admin/ClubManagement";
import EventModeration from "../Pages/admin/EventModeration";

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/clubs" element={<ClubManagement />} />
        <Route path="/events" element={<EventModeration />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
