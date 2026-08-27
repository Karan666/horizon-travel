import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container-fluid header">
      <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
        >
          <img
            src="./travel_favicon.png"
            width="40"
            height="32"
            alt="Travel App"
          />
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/hotels" className="nav-link">
              Hotels
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/favorites" className="nav-link">
              Favorites
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
