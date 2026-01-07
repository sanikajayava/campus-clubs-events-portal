import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p><strong>Club:</strong> {event.club}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <button className="btn small">View Details</button>
    </div>
  );
};

export default EventCard;
