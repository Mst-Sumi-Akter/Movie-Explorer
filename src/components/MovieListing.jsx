import MovieCard from './MovieCard'

const filterOptions = ['All titles', 'Drama', 'Comedy', 'Action']

function MovieListing({
  query,
  onQueryChange,
  activeFilter,
  onFilterChange,
  shows,
  isLoading,
  error,
  showAll,
  onShowAll,
  onSelectShow,
}) {
  const filteredShows = shows.filter((show) => {
    return activeFilter === 'All titles' || show.genres?.includes(activeFilter)
  })

  const visibleShows = showAll ? filteredShows : filteredShows.slice(0, 12)

  return (
    <section className="discover-section listing-page" id="discover">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The library</p>
          <h2>
            Find your
            <br />
            <em>next obsession.</em>
          </h2>
        </div>
        <p className="section-intro">
          Endless worlds, one good choice away.
          <br />
          Start somewhere unexpected.
        </p>
      </div>

      <div className="search-row">
        <label className="search-box listing-search">
          <span aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search for a movie..."
            aria-label="Search by movie title"
          />
          {query && (
            <button type="button" className="clear-search" onClick={() => onQueryChange('')} aria-label="Clear search">
              ×
            </button>
          )}
        </label>

        <div className="filters" aria-label="Filter titles">
          {filterOptions.map((filter) => (
            <button
              type="button"
              className={activeFilter === filter ? 'filter active' : 'filter'}
              key={filter}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="catalog-note">{error}</p>}

      {isLoading ? (
        <div className="loading-state">
          Loading the library<span>...</span>
        </div>
      ) : (
        <div className="show-grid">
          {visibleShows.map((show, index) => (
            <MovieCard key={show.id} show={show} index={index} onSelect={onSelectShow} />
          ))}
        </div>
      )}

      {!isLoading && filteredShows.length === 0 && (
        <div className="empty-state">No titles found. Try another search.</div>
      )}

      {!isLoading && filteredShows.length > 12 && !showAll && (
        <button className="show-all-button" type="button" onClick={onShowAll}>
          Show all titles <span aria-hidden="true">↓</span>
        </button>
      )}
    </section>
  )
}

export default MovieListing
