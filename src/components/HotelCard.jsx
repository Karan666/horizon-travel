export default function HotelCard({
  image,
  name,
  location,
  rating,
  reviews,
  price,
  perNight = true,
  amenities = [],
  isFeatured = false,
}) {
  return (
    <div className="card h-100 shadow-sm border-0 hotel-card">
      <div className="position-relative">
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ height: "220px", objectFit: "cover" }}
        />
        {isFeatured && (
          <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-3">
            Featured
          </span>
        )}
        <span className="badge bg-dark bg-opacity-75 position-absolute bottom-0 end-0 m-3">
          ★ {rating} ({reviews})
        </span>
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-1">{name}</h5>
        <p className="text-muted small mb-2">
          <i className="bi bi-geo-alt me-1"></i>
          {location}
        </p>

        <div className="mb-3">
          {amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="badge bg-light text-dark border me-1 mb-1"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div>
            <span className="fs-5 fw-bold text-primary">${price}</span>
            {perNight && <span className="text-muted small"> / night</span>}
          </div>
          <button className="btn btn-primary btn-sm px-3">
            Add to favorites
          </button>
        </div>
      </div>
    </div>
  );
}
