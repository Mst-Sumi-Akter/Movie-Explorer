import { useEffect, useState } from 'react'
import './App.css'
import DetailsModal from './components/DetailsModal'
import DetailsPage from './components/DetailsPage'
import Header from './components/Header'
import HomePage from './components/HomePage'
import MovieListing from './components/MovieListing'
import fallbackShows from './data/fallbackShows'

function App() {
  const [shows, setShows] = useState([])
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All titles')
  const [selectedShow, setSelectedShow] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [pathname, setPathname] = useState(window.location.pathname)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadShows() {
      setIsLoading(true)

      try {
        const endpoint = query.trim()
          ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
          : 'https://api.tvmaze.com/shows'
        const response = await fetch(endpoint, { signal: controller.signal })

        if (!response.ok) {
          throw new Error('Unable to reach TVMaze')
        }

        const data = await response.json()
        setShows(query.trim() ? data.map((item) => item.show) : data)
        setError('')
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setShows(fallbackShows)
          setError('Showing a hand-picked selection while the catalog reconnects.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    const timer = setTimeout(loadShows, query ? 350 : 0)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  useEffect(() => {
    document.body.style.overflow = selectedShow ? 'hidden' : ''

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setSelectedShow(null)
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedShow])

  useEffect(() => {
    function handlePopState() {
      setPathname(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(path) {
    window.history.pushState({}, '', path)
    setPathname(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isListingPage = pathname === '/movies'
  const detailsId = pathname.startsWith('/movies/') ? pathname.split('/')[2] : null
  const detailsShow = detailsId
    ? shows.find((show) => String(show.id) === detailsId)
    : null
  const featuredShow = shows[0] || fallbackShows[0]

  function renderPage() {
    if (detailsId) {
      if (detailsShow) {
        return <DetailsPage show={detailsShow} onNavigate={navigate} />
      }

      return (
        <div className={isLoading ? 'loading-state details-route-state' : 'empty-state details-route-state'}>
          {isLoading ? 'Loading details...' : 'This title is not available.'}
        </div>
      )
    }

    if (isListingPage) {
      return (
        <MovieListing
          query={query}
          onQueryChange={(value) => {
            setQuery(value)
            setShowAll(false)
          }}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          shows={shows}
          isLoading={isLoading}
          error={error}
          showAll={showAll}
          onShowAll={() => setShowAll(true)}
          onSelectShow={setSelectedShow}
        />
      )
    }

    return <HomePage featured={featuredShow} onNavigate={navigate} />
  }

  return (
    <div className="app-shell">
      <Header onNavigate={navigate} />
      <main id="top">{renderPage()}</main>

      <footer id="about">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">▶</span>
          MOVIEEXPLORER
        </div>
        <p>Good stories. Better company.</p>
        <span>
          Data by <a href="https://www.tvmaze.com/" target="_blank" rel="noreferrer">TVMaze</a> · © 2026 MovieExplorer
        </span>
      </footer>

      {selectedShow && <DetailsModal show={selectedShow} onClose={() => setSelectedShow(null)} />}
    </div>
  )
}

export default App
