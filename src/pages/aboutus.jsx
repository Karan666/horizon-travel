const teamMembers = [
  {
    id: 1,
    name: "Aryan Mehta",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Passionate about creating unforgettable travel experiences.",
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    role: "Software Designer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Designs beautiful and intuitive interfaces for travelers.",
  },
  {
    id: 3,
    name: "Rohan Sharma",
    role: "Sales Manager",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Builds strong partnerships with hotels worldwide.",
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Turns traveler needs into seamless product features.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-dark text-white min-vh-100">
      <div className="container py-5">
        {/* ABOUT SECTION */}

        <div className="row align-items-center g-5 mb-5 pb-4">
          {/* Image */}
          <div className="col-lg-6 order-1">
            <div className="rounded-4 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=700&fit=crop"
                alt="Horizon Travel Experience"
                className="img-fluid w-100"
                style={{ objectFit: "cover", minHeight: "420px" }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="col-lg-6 order-2">
            <h1 className="display-5 fw-bold mb-3">About Horizon</h1>
            <p className="text-secondary lead mb-4">
              Horizon is a modern travel platform dedicated to helping people
              discover extraordinary stays around the world. We believe that
              every journey should feel personal, seamless, and inspiring.
            </p>
            <p className="text-secondary mb-4">
              From luxury overwater villas in the Maldives to boutique hotels in
              the heart of Dubai, we carefully curate the best properties so you
              can book with confidence. Our mission is simple — make travel
              planning effortless and memorable.
            </p>
            <p className="text-secondary mb-0">
              Founded with a passion for exploration, Horizon continues to grow
              with one goal in mind: helping you find your perfect escape.
            </p>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">Meet Our Team</h2>
          <p className="text-secondary">The passionate people behind Horizon</p>
        </div>

        <div className="row g-4 justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-sm-6 col-lg-3">
              <div className="card h-100 border-0 bg-black bg-opacity-25 text-center shadow-sm team-card">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-circle shadow"
                      width="110"
                      height="110"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h5 className="fw-bold mb-1 text-white">{member.name}</h5>
                  <p className="text-primary small fw-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-secondary small mb-0">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
