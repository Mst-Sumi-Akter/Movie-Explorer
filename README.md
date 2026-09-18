Repository Link : https://github.com/Mst-Sumi-Akter/Movie-Explorer
Live Link : https://movie-explorer-swart-chi.vercel.app/



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
```
