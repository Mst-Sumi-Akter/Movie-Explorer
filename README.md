Repository Link : https://github.com/Mst-Sumi-Akter/Movie-Explorer

Live Link : https://movie-explorer-smwc.vercel.app/



# MovieExplorer

A responsive movie and TV show explorer built with React and Vite. MovieExplorer uses the free [TVMaze API](https://www.tvmaze.com/api) to browse the catalog, search by title, filter by genre, and open rich show details in a modal.

## Run locally

```bash
npm install
npm run dev
```

The production build can be checked with `npm run build`, and linting with `npm run lint`.

## Features

- Responsive poster grid with a featured-show hero
- TVMaze `/shows` catalog and `/search/shows` title search
- Genre filters, loading state, empty state, and API fallback selection
- Detail modal with poster, network, year, genres, rating, and synopsis
- Keyboard escape and backdrop click close behavior

Show data and images are provided by [TVMaze](https://www.tvmaze.com/), used under its [CC BY-SA license](https://creativecommons.org/licenses/by-sa/4.0/).

## Source structure

```text
src/
	components/       Reusable UI components such as MovieCard
	data/             Local fallback show data
	utils/            Shared show formatting and summary helpers
	assets/           Static project assets
	App.jsx           Page routing and application state
	App.css           Application styles
	index.css         Global styles and fonts
	main.jsx          React entry point

-----

🎬 Assignment: Movie Explorer
Objective: Build a responsive Movie Explorer Application using React. Users should be able to browse movies, search for specific titles, and view detailed information in an interactive modal.

🛠️ Technology Stack
Core: JavaScript, React
Styling: CSS, Tailwind CSS (Optional but recommended)
Data: Free Movie Database API (e.g., OMDB, TMDB, TVMaze)
TVMaze Doc: API
📋 Features & Requirements
1. Home Page
The Home Page serves as the landing page and must include the following sections:

Navbar
Application logo or brand name.
Navigation links.
A prominent button/link to navigate to the Movie Listing Page.
Hero Banner
A visually attractive section to hook the user. It must include:

A movie-related background image or gradient.
Application title/heading.
A short, engaging description.
A Call-To-Action (CTA) button navigating to the Movie Listing Page.
📐 UI Wireframe Example:

╭──────────────────────────────────────────────────────╮
│  🎬 MovieExplorer                        [ Movies ]  │
├──────────────────────────────────────────────────────┤
│                                                      │
│                 DISCOVER MOVIES                      │
│                                                      │
│        Explore and discover your favorite            │
│        movies from around the world.                 │
│                                                      │
│                 [   Explore Now ]                    │
│                                                      │
╰──────────────────────────────────────────────────────╯
Footer
Application name.
Copyright information (e.g., © 2026 MovieExplorer).
Optional social media or GitHub links.
2. Movie Listing Page
Create a dedicated page where users can browse and search for movies.

Search Functionality
Include a prominent search bar at the top of the page.
Users must be able to search by movie title.
The movie grid should dynamically update based on the search query.
** UI Wireframe Example:**

╭──────────────────────────────────────────────────────╮
│  🔍 Search for a movie...                            │
╰──────────────────────────────────────────────────────╯
Search Shows
Endpoint: GET /search/shows?q=:query

Example:

GET https://api.tvmaze.com/search/shows?q=girls
🌐 API Integration & State Management
Fetch movie data from your chosen Free Movie Database API.

🎬 Movie Cards
Display movies using reusable Card components. Each card must include:

Movie poster image.
Movie title/name.
Release year/date.
Rating (e.g., ⭐ 8.5).
A See Details button.
** UI Wireframe Example:**

╭─────────────────────╮
│                     │
│       Poster        │
│                     │
├─────────────────────┤
│  Movie Title        │
│  ⭐ 8.5  •  📅2024 │
│                     │
│  [ See Details ]    │
╰─────────────────────╯
Requirement: Cards must be displayed using a responsive CSS Grid or Flexbox layout.

All Shows/Movie
Endpoint:
GET /shows

Example:

GET https://api.tvmaze.com/shows
Description:
Fetch all available TV shows.

🎞️ 3. Movie Details Modal
When a user clicks the See Details button, open a modal overlay displaying in-depth information about the selected movie.

Modal Contents:

Movie backdrop image or large poster.
Movie title.
Overview / Summary.
Rating and Release date.
Any additional relevant info from the API (e.g., Genre, Director).
** UI Wireframe Example:**

╭──────────────────────────────────────────────╮
│                                      [ ✕ ]   │
├──────────────────────────────────────────────┤
│                                              │
│               MOVIE BACKDROP                 │
│                                              │
├──────────────────────────────────────────────┤
│  Movie Title                                 │
│  ⭐ Rating: 8.5   |   📅 Release: 2024      │
│                                              │
│  Overview:                                   │
│  Movie description goes here...              │
│                                              │
│                              [ ❌ Close ]    │
╰──────────────────────────────────────────────╯
Interaction Requirements:

Must be closable via the ✕ (Close) button.
Optional: Closable by clicking outside the modal (on the backdrop).
📱 Responsive Design & UX
The application must be fully responsive and provide a seamless experience across all devices:

Mobile: Single column layout, stacked elements, touch-friendly buttons.
Desktop: 3-4+ column grid for movie cards, optimized spacing.

```

