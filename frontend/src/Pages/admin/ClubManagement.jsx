const clubs = [
  { name: "Coding Club", coordinator: "Rahul" },
  { name: "Robotics Club", coordinator: "Not Assigned" },
];

const ClubManagement = () => {
  return (
    <div>
      <h2>Club Management</h2>

      <button className="create"
        onClick={() => alert("Create Club Clicked")}
        style={{ marginBottom: "20px" }}
      >
        + Create New Club
      </button>

      <table border="1" cellPadding="10">
        <tr>
          <th>Club Name</th>
          <th>Coordinator</th>
          <th>Action</th>
        </tr>

        {clubs.map((club, index) => (
          <tr key={index}>
            <td>{club.name}</td>
            <td>{club.coordinator}</td>
            <td>
              <button className="approve" onClick={() => alert("Coordinator Assigned!")}>
                Assign Coordinator
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ClubManagement;
