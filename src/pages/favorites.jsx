import { useState } from "react";
import FavoritesCard from "../components/FavoritesCard";

const initialFavorites = [
  {
    id: 1,
    name: "Azure Horizon Resort",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    rating: 4.9,
    reviews: 1284,
    basePrice: 420,
    rooms: [
      { id: "deluxe", name: "Deluxe Ocean View", price: 420, discount: 0 },
      { id: "suite", name: "Overwater Suite", price: 680, discount: 50 },
      {
        id: "villa",
        name: "Private Villa with Pool",
        price: 950,
        discount: 100,
      },
    ],
  },
  {
    id: 2,
    name: "Skyline Boutique Hotel",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    rating: 4.7,
    reviews: 892,
    basePrice: 289,
    rooms: [
      { id: "standard", name: "City View Room", price: 289, discount: 0 },
      { id: "premium", name: "Premium Suite", price: 410, discount: 30 },
    ],
  },
];

export default function Favorites() {
  const [favorites, setFavorites] = useState(initialFavorites);

  const handleRemove = (id) => {
    setFavorites((prev) => prev.filter((hotel) => hotel.id !== id));
  };

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="fw-bold mb-1">Your Favorites</h1>
          <p className="text-muted mb-0">
            {favorites.length === 0
              ? "No saved hotels yet"
              : `${favorites.length} hotel${favorites.length > 1 ? "s" : ""} saved`}
          </p>
        </div>
      </div>

      {/* Empty State */}
      {favorites.length === 0 ? (
        <div className="text-center py-5">
          <div className="mb-4">
            <i className="bi bi-heart display-1 text-muted"></i>
          </div>
          <h4 className="fw-semibold">No favorites yet</h4>
          <p className="text-muted mb-4">
            Start exploring and save the hotels you love for later.
          </p>
          <a href="/hotels" className="btn btn-primary px-4">
            Browse Hotels
          </a>
        </div>
      ) : (
        <div className="row g-4">
          {favorites.map((hotel) => (
            <div key={hotel.id} className="col-md-6 col-lg-4">
              <FavoritesCard hotel={hotel} onRemove={handleRemove} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
