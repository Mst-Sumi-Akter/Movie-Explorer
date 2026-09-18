function Header({ onNavigate }) {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="/"
        onClick={(event) => {
          event.preventDefault()
          onNavigate('/')
        }}
        aria-label="MovieExplorer home"
      >
        <span className="brand-mark" aria-hidden="true">▶</span>
        MOVIEEXPLORER
      </a>
      <a
        className="header-cta"
        href="/movies"
        onClick={(event) => {
          event.preventDefault()
          onNavigate('/movies')
        }}
      >
        Movies <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Header
