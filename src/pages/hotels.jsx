import HotelCard from "../components/HotelCard";

const hotels = [
  {
    id: 1,
    name: "Azure Horizon Resort",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    rating: 4.9,
    reviews: 1284,
    price: 420,
    amenities: ["Private Pool", "Beachfront", "Spa"],
    isFeatured: true,
  },
  {
    id: 2,
    name: "Skyline Boutique Hotel",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    rating: 4.7,
    reviews: 892,
    price: 289,
    amenities: ["Rooftop Pool", "City View", "Gym"],
  },
  {
    id: 3,
    name: "Alpine Peak Lodge",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    rating: 4.8,
    reviews: 654,
    price: 310,
    amenities: ["Mountain View", "Fireplace", "Ski Access"],
  },
];

export default function Hotels() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Discover Your Perfect Stay</h1>
        <p className="text-muted">Handpicked hotels by Horizon Travel</p>
      </div>

      <div className="row g-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="col-md-6 col-lg-4">
            <HotelCard {...hotel} />
          </div>
        ))}
      </div>
    </div>
  );
}
