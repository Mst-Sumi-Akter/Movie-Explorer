import { cleanSummary, formatYear } from '../utils/showHelpers'

function DetailsModal({ show, onClose }) {
  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <article className="details-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close details">
          ×
        </button>
        <div
          className="modal-image"
          style={{ backgroundImage: `url(${show.image?.medium || show.image?.original})` }}
        ></div>
        <div className="modal-content">
          <p className="eyebrow">{show.network?.name || 'Cineverse selection'}</p>
          <h2 id="modal-title">{show.name}</h2>
          <div className="modal-meta">
            <span>★ Rating: {show.rating?.average || '—'}</span>
            <span>Release: {formatYear(show.premiered)}</span>
            <span>Genre: {show.genres?.join(' · ') || 'Series'}</span>
          </div>
          <p className="modal-label">Overview</p>
          <p className="modal-summary">{cleanSummary(show.summary)}</p>
          <div className="modal-actions">
            <button className="primary-button" type="button" onClick={onClose}>
              Close details <span>×</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default DetailsModal
