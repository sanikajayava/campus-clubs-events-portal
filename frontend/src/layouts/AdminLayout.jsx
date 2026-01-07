// import { Link } from "react-router-dom";

// const AdminLayout = ({ children }) => {
//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
      
//       {/* Sidebar */}
//       <aside style={{
//         width: "220px",
//         background: "#0f172a",
//         color: "white",
//         padding: "20px"
//       }}>
//         <h3>Admin Panel</h3>
//         <nav style={{ marginTop: "20px" }}>
//           <p><Link style={linkStyle} to="/">Dashboard</Link></p>
//           <p><Link style={linkStyle} to="/users">Users</Link></p>
//           <p><Link style={linkStyle} to="/clubs">Clubs</Link></p>
//           <p><Link style={linkStyle} to="/events">Events</Link></p>
//         </nav>
//       </aside>

//       {/* Content */}
//       <main style={{ flex: 1, padding: "30px" }}>
//         {children}
//       </main>
//     </div>
//   );
// };

// const linkStyle = {
//   color: "white",
//   textDecoration: "none"
// };

// export default AdminLayout;

import { Link } from "react-router-dom";
import "../styles/admin.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h3>Admin Panel</h3>
        <Link to="/">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/clubs">Clubs</Link>
        <Link to="/events">Events</Link>
      </aside>

      <main className="admin-content">{children}</main>
    </div>
  );
};

export default AdminLayout;
