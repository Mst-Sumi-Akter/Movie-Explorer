import { cleanSummary, formatYear } from '../utils/showHelpers'

function DetailsPage({ show, onNavigate }) {
  return (
    <section className="details-page">
      <div className="details-page-header">
        <span>Movie details</span>
        <a
          className="back-link"
          href="/movies"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/movies')
          }}
          aria-label="Close and return to library"
        >
          ×
        </a>
      </div>

      <div
        className="details-page-poster"
        style={{ backgroundImage: `url(${show.image?.medium || show.image?.original})` }}
      ></div>

      <div className="details-page-copy">
        <p className="eyebrow">{show.network?.name || 'Cineverse selection'}</p>
        <h2>{show.name}</h2>
        <div className="modal-meta">
          <span>★ Rating: {show.rating?.average || '—'}</span>
          <span>Release: {formatYear(show.premiered)}</span>
          <span>Genre: {show.genres?.join(' · ') || 'Series'}</span>
        </div>
        <p className="modal-label">Overview</p>
        <p className="modal-summary">{cleanSummary(show.summary)}</p>
        <button className="primary-button" type="button" onClick={() => onNavigate('/movies')}>
          Close details <span>×</span>
        </button>
      </div>
    </section>
  )
}

export default DetailsPage
