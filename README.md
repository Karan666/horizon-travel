# Horizon

A modern travel platform built with React that helps users discover extraordinary stays around the world. Browse curated hotels, save favorites, read travel blogs, and learn about the team behind Horizon.

## Features

- **Home** – Landing experience powered by the Main component
- **Hotels** – Browse handpicked hotels with ratings, amenities, and pricing
- **Favorites** – Save hotels and manage your list (add/remove)
- **Blogs** – Travel stories and destination highlights
- **About Us** – Company story and team profiles

## Tech Stack

- React
- React Router DOM
- Bootstrap (classes used throughout)
- Bootstrap Icons (e.g. on the Favorites empty state)

## Project Structure
src/
├── App.js                 # Router setup and layout (Header + routes + Footer)
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Main.jsx
│   ├── HotelCard.jsx
│   ├── FavoritesCard.jsx
│   └── Card.jsx
└── pages/
├── home.jsx
├── hotels.jsx
├── favorites.jsx
├── blogs.jsx
└── aboutus.jsx
text## Pages & Routes

| Path         | Component   | Description                          |
|--------------|-------------|--------------------------------------|
| `/`          | Home        | Main landing page                    |
| `/hotels`    | Hotels      | Hotel listings                       |
| `/favorites` | Favorites   | Saved hotels                         |
| `/blogs`     | Blogs       | Travel blog cards                    |
| `/about`     | AboutUs     | About Horizon and team               |

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/horizon.git
   cd horizon

Install dependencies:Bashnpm install
Start the development server:Bashnpm start
Open http://localhost:3000 in your browser.

Build for Production
Bashnpm run build
The production build will be in the build/ folder.
Sample Data

Hotels include properties in the Maldives, Dubai, and the Swiss Alps (with ratings, reviews, prices, and amenities).
Favorites start with two pre-saved hotels and support room options with discounts.
About Us features a team of four members with roles and short bios.
Blogs highlight destinations such as Lisbon, Bali, and the Arctic.

## Notes

Images are loaded from Unsplash and local paths (e.g. ./images/horizon_banner.png on the Blogs page). Ensure local image assets are present if you use them.
The app uses client-side routing via React Router. For production hosting, configure your server to serve index.html for all routes.
Favorites state is currently in-memory (resets on refresh). You can extend it with localStorage or a backend later.

## Contributing

Fork the repository
Create a feature branch (git checkout -b feature/your-feature)
Commit your changes (git commit -m "Add your feature")
Push to the branch (git push origin feature/your-feature)
Open a Pull Request

## License
This project is open source and available under the MIT License
