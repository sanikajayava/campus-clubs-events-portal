const users = [
  { name: "Sanika", role: "Student", status: "Active" },
  { name: "Rahul", role: "Coordinator", status: "Pending" },
  { name: "Admin", role: "Admin", status: "Active" },
];

const UserManagement = () => {
  return (
    <div>
      <h2>User Management</h2>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>

        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.role}</td>
            <td>{user.status}</td>
            <td>
              {user.status === "Pending" && (
                <button className="approve" onClick={() => alert("Coordinator Approved!")}>
                  Approve
                </button>
              )}
              <button
                className="remove"
                onClick={() => alert("Account Disabled")}
              >
                Disable
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserManagement;
