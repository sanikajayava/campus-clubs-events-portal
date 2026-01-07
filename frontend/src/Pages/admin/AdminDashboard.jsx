const stats = [
  { label: "Total Users", value: 842 },
  { label: "Total Events", value: 56 },
  { label: "Active Clubs", value: 18 },
  { label: "Pending Coordinator Approvals", value: 6 },
];

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>

      <div className="stats-container">
  {stats.map((stat, index) => (
    <div className="stat-card" key={index}>
      <h1>{stat.value}</h1>
      <p>{stat.label}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default AdminDashboard;
