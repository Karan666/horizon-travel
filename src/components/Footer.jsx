import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src="./travel_favicon.png"
              height="50"
              width="50"
              alt="travelFavicon"
            />
            <p className="text-body-secondary mt-3">
              Horizon Travel is a premier tour operator specializing in bespoke
              travel experiences, including luxury, adventure, and cultural
              tours. Dedicated to fostering "Dream, Explore, Discover," they
              offer tailored itineraries, corporate travel, and seamless booking
              services. Their expert team ensures unforgettable journeys,
              highlighting local culture and sustainable tourism initiatives.
            </p>
          </div>
          <div className="col-md-4 mb-3 text-center">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 mt-5">
                <Link to="/blogs" className="nav-link p-0 text-body-secondary">
                  Blogs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/hotels" className="nav-link p-0 text-body-secondary">
                  Hotels
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0 text-body-secondary">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <form>
              <h5>Subscribe to newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
            <div className="mt-3 d-flex gap-2">
              <img src="./images/instagram.png" alt="Instagram" />
              <img src="./images/youtube.png" alt="YouTube" />
              <img src="./images/linkedin.png" alt="LinkedIn" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between border-top mt-2">
          <p>
            &copy; {new Date().getFullYear()} Horizon Travel, Inc. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
