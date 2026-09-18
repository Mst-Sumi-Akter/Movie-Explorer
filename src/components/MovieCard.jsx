import { formatYear } from '../utils/showHelpers'

function MovieCard({ show, index, onSelect }) {
  return (
    <article className="show-card" style={{ '--delay': `${Math.min(index, 8) * 60}ms` }}>
      <div className="card-image-wrap">
        {show.image?.medium ? <img src={show.image.medium} alt={`${show.name} poster`} /> : <div className="no-poster">CINEVERSE</div>}
        <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="rating">★ {show.rating?.average || '—'}</span>
      </div>
      <div className="card-info">
        <div>
          <h3>{show.name}</h3>
          <p>{formatYear(show.premiered)} <span>·</span> {show.genres?.slice(0, 2).join(' / ') || 'Series'}</p>
        </div>
        <button type="button" onClick={() => onSelect(show)} aria-label={`See details for ${show.name}`}>See details <span aria-hidden="true">↗</span></button>
      </div>
    </article>
  )
}

export default MovieCard

