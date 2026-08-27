import { useState } from "react";

export default function FavoritesCard({ hotel, onRemove }) {
  const { id, image, name, location, rating, reviews, rooms = [] } = hotel;

  const [selectedRoom, setSelectedRoom] = useState(rooms[0]?.id || "");
  const [nights, setNights] = useState(2);
  const [guests, setGuests] = useState(2);

  const currentRoom = rooms.find((r) => r.id === selectedRoom) || rooms[0];
  const roomPrice = currentRoom?.price || 0;
  const taxes = Math.round(roomPrice * nights * 0.12);
  const discount = currentRoom?.discount || 0;
  const subtotal = roomPrice * nights;
  const total = subtotal + taxes - discount;

  return (
    <div className="card border-0 shadow mb-4 overflow-hidden bg-dark text-white">
      <div className="row g-0">
        {/* Wider Image */}
        <div className="col-md-5 position-relative">
          <img
            src={image}
            alt={name}
            className="w-100 h-100"
            style={{ objectFit: "cover", minHeight: "340px" }}
          />
          <button
            className="btn btn-dark btn-sm rounded-circle position-absolute top-0 end-0 m-3 border border-secondary"
            onClick={() => onRemove(id)}
            title="Remove from favorites"
          >
            <i className="bi bi-heart-fill text-danger"></i>
          </button>
        </div>

        {/* Content */}
        <div className="col-md-7">
          <div className="card-body p-4">
            {/* Header */}
            <div className="mb-3">
              <h5 className="fw-bold mb-1 text-white">{name}</h5>
              <p className="text-secondary small mb-2">
                <i className="bi bi-geo-alt me-1"></i>
                {location}
              </p>
              <span className="badge bg-warning text-dark">
                ★ {rating} ({reviews} reviews)
              </span>
            </div>

            {/* Room Selection */}
            <div className="mb-3">
              <label className="form-label small text-secondary mb-1">
                Select Room Type
              </label>
              <select
                className="form-select form-select-sm bg-dark text-white border-secondary"
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
              >
                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} — ${room.price}/night
                    {room.discount > 0 ? ` (Save $${room.discount})` : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Nights + Guests */}
            <div className="row g-2 mb-3">
              <div className="col-6">
                <label className="form-label small text-secondary mb-1">
                  Nights
                </label>
                <select
                  className="form-select form-select-sm bg-dark text-white border-secondary"
                  value={nights}
                  onChange={(e) => setNights(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <option key={n} value={n}>
                      {n} night{n > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <label className="form-label small text-secondary mb-1">
                  Guests
                </label>
                <select
                  className="form-select form-select-sm bg-dark text-white border-secondary"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                >
                  {[1, 2, 3, 4].map((g) => (
                    <option key={g} value={g}>
                      {g} Guest{g > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-black bg-opacity-25 border border-secondary rounded-3 p-3 mb-3">
              <div className="d-flex justify-content-between small text-secondary mb-1">
                <span>
                  {currentRoom?.name} × {nights} night{nights > 1 ? "s" : ""}
                </span>
                <span className="text-white">${subtotal}</span>
              </div>
              <div className="d-flex justify-content-between small text-secondary mb-1">
                <span>Taxes & fees</span>
                <span className="text-white">${taxes}</span>
              </div>
              {discount > 0 && (
                <div className="d-flex justify-content-between small text-success mb-1">
                  <span>Deal Discount</span>
                  <span>-${discount}</span>
                </div>
              )}
              <hr className="border-secondary my-2" />
              <div className="d-flex justify-content-between fw-bold">
                <span className="text-white">Total</span>
                <span className="text-primary fs-5">${total}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-grid gap-2 d-md-flex">
              <button className="btn btn-outline-secondary btn-sm flex-fill">
                View Full Details
              </button>
              <button className="btn btn-primary btn-sm flex-fill">
                <i className="bi bi-check2-circle me-1"></i>
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
