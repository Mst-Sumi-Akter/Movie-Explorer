import { formatYear } from '../utils/showHelpers'

function HomePage({ featured, onNavigate }) {
  return (
    <section
      className="hero-section"
      style={{ '--hero-image': 'url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=85)' }}
    >
      <div className="hero-copy">
        <p className="eyebrow">Your next watch is waiting</p>
        <h1>
          DISCOVER
          <br />
          <em>MOVIES.</em>
        </h1>
        <p className="hero-description">
          Explore and discover your favorite movies and shows from around the world.
        </p>
        <a
          className="primary-button"
          href="/movies"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/movies')
          }}
        >
          Explore Now <span>↓</span>
        </a>
        <div className="hero-stats">
          <span><strong>10k+</strong> titles to explore</span>
          <span><strong>24/7</strong> new stories</span>
        </div>
      </div>

      <div
        className="hero-poster"
        style={{ backgroundImage: `url(${featured.image?.medium || featured.image?.original})` }}
      >
        <div className="poster-shade"></div>
        <span className="poster-label">Featured / 01</span>
        <div className="poster-caption">
          <span>{featured.genres?.slice(0, 2).join(' · ')}</span>
          <strong>{featured.name}</strong>
          <span>
            {formatYear(featured.premiered)} &nbsp;·&nbsp; ★ {featured.rating?.average || '—'}
          </span>
        </div>
      </div>
    </section>
  )
}

export default HomePage
