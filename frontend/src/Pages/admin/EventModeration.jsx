const events = [
  { name: "Hackathon 2025", status: "Pending" },
  { name: "Cultural Fest", status: "Approved" },
];

const EventModeration = () => {
  return (
    <div>
      <h2>Event Moderation</h2>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <tr>
          <th>Event Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>

        {events.map((event, index) => (
          <tr key={index}>
            <td>{event.name}</td>
            <td>{event.status}</td>
            <td>
              {event.status === "Pending" && (
                <button className="approve" onClick={() => alert("Event Approved!")}>
                  Approve
                </button>

              )}
              <button
                className="remove"
                onClick={() => alert("Event Removed")}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default EventModeration;
