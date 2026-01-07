import "../../styles/landing.css";
import EventCard from "../../components/common/EventCard";

const LandingPage = () => {
  const dummyEvents = [
    {
      title: "Tech Talk on AI",
      club: "AI Club",
      date: "12 Oct 2025",
    },
    {
      title: "Hackathon 24 Hours",
      club: "Coding Club",
      date: "18 Oct 2025",
    },
    {
      title: "Startup Pitch Day",
      club: "E-Cell",
      date: "25 Oct 2025",
    },
  ];

  return (
    <div className="landing-container">

      {/* Hero Section */}
      <section className="hero">
        <h1>Campus Clubs & Events Portal</h1>
        <p>
          A centralized digital platform to explore, register, and participate
          in all campus events at KLE Technological University.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">Login</button>
          <button className="btn secondary">Register</button>
        </div>
      </section>

      {/* Why This Portal */}
      <section className="why-portal">
        <h2>Why This Portal?</h2>
        <div className="features">
          <div className="feature-card">
            <h3>📅 Centralized Events</h3>
            <p>All campus events in one single platform.</p>
          </div>

          <div className="feature-card">
            <h3>🎟️ QR-Based Entry</h3>
            <p>Digital tickets with secure QR codes.</p>
          </div>

          <div className="feature-card">
            <h3>✅ Automated Attendance</h3>
            <p>No manual attendance or paperwork.</p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="featured-events">
        <h2>Featured Upcoming Events</h2>
        <div className="event-list">
          {dummyEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Login as a Student</li>
          <li>Register for an Event</li>
          <li>Get a QR Code Ticket</li>
          <li>Scan QR at Event Entry</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2025 KLE Technological University | Campus Clubs & Events Portal
        </p>
        <p>Web Technologies Course Project</p>
      </footer>

    </div>
  );
};

export default LandingPage;
